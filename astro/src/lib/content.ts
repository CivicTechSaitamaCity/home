export interface ContentFrontmatter {
  title?: string;
  date?: string;
  eventDate?: string;
  reportDate?: string;
  link?: string;
  thumb?: string;
}

export interface ContentEntry {
  id: string;
  path: string;
  slug: string[];
  frontmatter: ContentFrontmatter;
  headingTitle: string;
  Content: any;
}

type MarkdownModule = {
  Content: any;
  frontmatter?: ContentFrontmatter;
};

const renderedModules = import.meta.glob<MarkdownModule>("../../../content/**/*.md", {
  eager: true,
});

const rawModules = import.meta.glob<string>("../../../content/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const stripFrontmatter = (source: string) =>
  source.replace(/^---\n[\s\S]*?\n---\n?/, "").trim();

const getHeadingTitle = (source: string) => {
  const body = stripFrontmatter(source);
  const headingMatch = body.match(/^#{1,2}\s+(.+)$/m);
  return headingMatch?.[1]?.trim() ?? "";
};

const toContentId = (key: string) => {
  const match = key.match(/content\/(.*)\.md$/);

  if (!match) {
    throw new Error(`Unexpected content path: ${key}`);
  }

  return match[1];
};

const toEntry = ([key, mod]: [string, MarkdownModule]): ContentEntry => {
  const id = toContentId(key);
  const raw = rawModules[key] ?? "";

  return {
    id,
    path: `/${id}`,
    slug: id.split("/"),
    frontmatter: mod.frontmatter ?? {},
    headingTitle: getHeadingTitle(raw),
    Content: mod.Content,
  };
};

const allEntries = Object.entries(renderedModules)
  .map(toEntry)
  .sort((left, right) => left.path.localeCompare(right.path));

const compareDesc = (left?: string, right?: string) => (right ?? "").localeCompare(left ?? "");

export const getAllEntries = () => allEntries;

export const getPageEntry = (id: string) => allEntries.find((entry) => entry.id === id);

export const getDataEntries = () => allEntries.filter((entry) => entry.id.startsWith("data/"));

export const getNewsEntries = (limit?: number) => {
  const items = getDataEntries()
    .filter((entry) => (entry.frontmatter.date ?? "") > "2020-01-01")
    .sort(
      (left, right) =>
        compareDesc(left.frontmatter.eventDate, right.frontmatter.eventDate) ||
        compareDesc(left.frontmatter.date, right.frontmatter.date),
    );

  return typeof limit === "number" ? items.slice(0, limit) : items;
};

export const getEventEntries = (limit?: number) => {
  const items = getDataEntries()
    .filter((entry) => (entry.frontmatter.eventDate ?? "") > "2020-01-01")
    .sort((left, right) => compareDesc(left.frontmatter.eventDate, right.frontmatter.eventDate));

  return typeof limit === "number" ? items.slice(0, limit) : items;
};

export const getReportEntries = () =>
  getDataEntries()
    .filter((entry) => (entry.frontmatter.reportDate ?? "") > "2020-01-01")
    .sort((left, right) => compareDesc(left.frontmatter.reportDate, right.frontmatter.reportDate));

export const getDisplayTitle = (entry: ContentEntry) =>
  entry.headingTitle || entry.frontmatter.title || entry.slug[entry.slug.length - 1];
