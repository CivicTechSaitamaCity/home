import { getCollection } from "astro:content";

const splitReport = (body: string) => {
  const [announcement = "", report = ""] = body.split("<!-- SPLIT_REPORT -->");

  return {
    announcement: announcement.trim(),
    report: report.trim(),
  };
};

const toSlug = (entry: { id: string; slug?: string }) =>
  entry.slug ?? entry.id.replace(/\.mdx?$/, "");

export async function GET() {
  const entries = await getCollection("news");
  const data = entries
    .sort((left, right) => right.data.date.getTime() - left.data.date.getTime())
    .map((entry) => ({
      slug: toSlug(entry),
      ...entry.data,
      date: entry.data.date.toISOString().slice(0, 10),
      content: splitReport(entry.body ?? ""),
    }));

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
