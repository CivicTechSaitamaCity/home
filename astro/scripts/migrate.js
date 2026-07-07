import fs from "node:fs";
import path from "node:path";

const allowedTags = [
  "デジタル相談室",
  "アイデアソン",
  "ハッカソン",
  "もくもく会",
  "勉強会",
  "マッピングパーティ",
  "ウィキペディアタウン",
  "ワークショップ",
  "オープンデータ",
  "まちづくり",
  "地域課題",
  "防災",
  "減災",
  "子育て",
  "教育",
  "アクセシビリティ",
  "福祉",
  "PLATEAU",
  "初心者歓迎",
  "非エンジニア歓迎",
  "プランナー・デザイナー歓迎",
  "親子参加OK",
  "学生歓迎",
];

const tagAliases = new Map([
  ["相談室", "デジタル相談室"],
  ["相談会", "デジタル相談室"],
  ["デジタル相談会", "デジタル相談室"],
  ["ideathon", "アイデアソン"],
  ["hackathon", "ハッカソン"],
  ["mokumoku", "もくもく会"],
  ["もくもく", "もくもく会"],
  ["study", "勉強会"],
  ["勉強", "勉強会"],
  ["mapping", "マッピングパーティ"],
  ["openstreetmap", "マッピングパーティ"],
  ["osm", "マッピングパーティ"],
  ["wikipedia", "ウィキペディアタウン"],
  ["wiki", "ウィキペディアタウン"],
  ["workshop", "ワークショップ"],
  ["open data", "オープンデータ"],
  ["opendata", "オープンデータ"],
  ["plateau", "PLATEAU"],
  ["アクセシビリティー", "アクセシビリティ"],
]);

const bodyFrontmatterKeys = [
  "announcement",
  "announcement_body",
  "announce",
  "description",
  "body",
  "content",
  "report",
  "report_body",
  "reportBody",
];

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const positional = args.filter((arg) => !arg.startsWith("--"));
const inputDir = path.resolve(positional[0] ?? "../content/data");
const outputDir = path.resolve(positional[1] ?? "src/content/news");
const splitMarker = "<!-- SPLIT_REPORT -->";

const walkMarkdownFiles = (dir) => {
  if (!fs.existsSync(dir)) {
    throw new Error(`Input directory was not found: ${dir}`);
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walkMarkdownFiles(fullPath);
    }

    return entry.isFile() && /\.mdx?$/i.test(entry.name) ? [fullPath] : [];
  });
};

const parseScalar = (value) => {
  const trimmed = value.trim();

  if (!trimmed) return "";
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
};

const parseArray = (value) => {
  const inner = value.trim().slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(",").map(parseScalar);
};

const parseFrontmatter = (source) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match && !source.startsWith("---")) {
    return { data: {}, body: source.trim() };
  }

  const yamlSource = match?.[1] ?? source.replace(/^---\r?\n?/, "");
  const bodySource = match ? source.slice(match[0].length) : "";
  const data = {};
  const lines = yamlSource.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyMatch) continue;

    const [, key, rawValue] = keyMatch;

    if (rawValue.trim() === "") {
      const values = [];
      while (lines[index + 1]?.match(/^\s*-\s+/)) {
        index += 1;
        values.push(parseScalar(lines[index].replace(/^\s*-\s+/, "")));
      }
      data[key] = values;
      continue;
    }

    data[key] = rawValue.trim().startsWith("[") ? parseArray(rawValue) : parseScalar(rawValue);
  }

  return {
    data,
    body: bodySource.trim(),
  };
};

const yamlQuote = (value) => {
  if (typeof value === "number") return String(value);
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(value))) return String(value);
  return JSON.stringify(String(value));
};

const stringifyFrontmatter = (data) => {
  const lines = ["---"];

  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null || value === "") continue;

    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}:`);
      value.forEach((item) => lines.push(`  - ${yamlQuote(item)}`));
      continue;
    }

    lines.push(`${key}: ${yamlQuote(value)}`);
  }

  lines.push("---", "");
  return lines.join("\n");
};

const toDate = (value, fallback = "1970-01-01") => {
  const match = String(value ?? "").match(/\d{4}-\d{2}-\d{2}/);
  return match?.[0] ?? fallback;
};

const normalizeCategory = (value, filePath, frontmatter) => {
  const normalized = String(value ?? "").toLowerCase();
  const fileName = path.basename(filePath).toLowerCase();

  if (["event", "news", "media", "column", "partner_event"].includes(normalized)) {
    return normalized;
  }
  if (normalized.includes("media") || normalized.includes("掲載")) return "media";
  if (normalized.includes("column") || normalized.includes("コラム")) return "column";
  if (normalized.includes("partner") || normalized.includes("共催")) return "partner_event";
  if (frontmatter.eventDate || fileName.includes("event")) return "event";

  return "news";
};

const normalizeStatus = (eventDate, frontmatter) => {
  if (["upcoming", "ended"].includes(frontmatter.status)) return frontmatter.status;
  if (!eventDate) return undefined;
  return new Date(`${eventDate}T00:00:00+09:00`) >= new Date() ? "upcoming" : "ended";
};

const normalizeAuthorType = (value) => {
  const normalized = String(value ?? "").toLowerCase();
  if (["internal", "saitama_city", "partner_org", "guest"].includes(normalized)) return normalized;
  if (normalized.includes("city") || normalized.includes("行政") || normalized.includes("さいたま市")) {
    return "saitama_city";
  }
  if (normalized.includes("partner") || normalized.includes("団体")) return "partner_org";
  if (normalized.includes("guest") || normalized.includes("ゲスト")) return "guest";
  return "internal";
};

const normalizeUrl = (value) => {
  if (!value) return undefined;

  try {
    return new URL(String(value)).toString();
  } catch {
    return undefined;
  }
};

const normalizeParticipantCount = (value) => {
  if (value === undefined || value === null || value === "") return undefined;
  const parsed = Number(String(value).replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : undefined;
};

const normalizeOneTag = (tag) => {
  const value = String(tag ?? "").trim();
  const lower = value.toLowerCase();

  if (allowedTags.includes(value)) return value;
  if (tagAliases.has(lower)) return tagAliases.get(lower);

  for (const allowed of allowedTags) {
    if (value.includes(allowed) || allowed.includes(value)) return allowed;
  }

  return undefined;
};

const normalizeTags = (frontmatter, body, title) => {
  const rawTags = [frontmatter.tags, frontmatter.tag, frontmatter.category, frontmatter.type]
    .flat()
    .filter(Boolean);
  const inferredText = `${title} ${body}`;

  for (const allowed of allowedTags) {
    if (inferredText.includes(allowed)) rawTags.push(allowed);
  }

  return [...new Set(rawTags.map(normalizeOneTag).filter(Boolean))];
};

const compactSlug = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const titleKey = (title) =>
  String(title ?? "")
    .normalize("NFKC")
    .replace(/開催レポート|レポート|報告|開催します|開催しました/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();

const collectFrontmatterBody = (frontmatter) =>
  bodyFrontmatterKeys
    .filter((key) => typeof frontmatter[key] === "string" && frontmatter[key].trim())
    .map((key) => frontmatter[key].trim())
    .join("\n\n");

const isReportLike = (filePath, frontmatter) => {
  const text = `${filePath} ${frontmatter.category ?? ""} ${frontmatter.type ?? ""}`;
  return /report|レポート|報告|reportDate/i.test(text) || Boolean(frontmatter.reportDate);
};

const normalizeEntry = (filePath) => {
  const source = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, body } = parseFrontmatter(source);
  const date = toDate(frontmatter.eventDate ?? frontmatter.date ?? frontmatter.reportDate);
  const title = String(frontmatter.title ?? body.match(/^#{1,2}\s+(.+)$/m)?.[1] ?? path.basename(filePath, ".md"));
  const bodyFromFrontmatter = collectFrontmatterBody(frontmatter);
  const mergedBody = [bodyFromFrontmatter, body].filter(Boolean).join("\n\n").trim();
  const tags = normalizeTags(frontmatter, mergedBody, title);

  return {
    sourcePath: filePath,
    title,
    date,
    isReport: isReportLike(filePath, frontmatter),
    frontmatter: {
      title,
      date,
      category: normalizeCategory(frontmatter.category ?? frontmatter.type, filePath, frontmatter),
      tags,
      author_name: frontmatter.author_name ?? frontmatter.author ?? "シビックテックさいたま",
      author_type: normalizeAuthorType(frontmatter.author_type),
      external_url: normalizeUrl(frontmatter.external_url ?? frontmatter.link),
      image: frontmatter.image ?? frontmatter.thumb,
      location: frontmatter.location ?? frontmatter.place,
      status: normalizeStatus(frontmatter.eventDate ?? frontmatter.date, frontmatter),
      participant_count: normalizeParticipantCount(
        frontmatter.participant_count ?? frontmatter.participants,
      ),
    },
    body: mergedBody,
    groupKey: `${date}:${titleKey(title)}`,
    slug: compactSlug(`${date}-${path.basename(filePath, path.extname(filePath))}`),
  };
};

const mergeGroup = (entries) => {
  const announcement = entries.find((entry) => !entry.isReport) ?? entries[0];
  const report = entries.find((entry) => entry !== announcement && entry.isReport);
  const tags = [...new Set(entries.flatMap((entry) => entry.frontmatter.tags ?? []))];
  const reportBody = report?.body ?? (announcement.isReport ? announcement.body : "");
  const announcementBody = announcement.isReport ? "" : announcement.body;
  const bodyParts = [announcementBody];

  if (reportBody.trim()) {
    bodyParts.push(splitMarker, `<span id="report"></span>\n\n${reportBody}`);
  } else if (!announcement.body.includes(splitMarker)) {
    bodyParts.push(splitMarker);
  }

  return {
    slug: announcement.slug,
    frontmatter: {
      ...announcement.frontmatter,
      tags,
      status: entries.some((entry) => entry.isReport) ? "ended" : announcement.frontmatter.status,
    },
    body: bodyParts.filter((part) => part !== undefined).join("\n\n").trim(),
    sources: entries.map((entry) => path.relative(process.cwd(), entry.sourcePath)),
  };
};

const ensureUniqueSlug = (slug, used) => {
  let candidate = slug || "news";
  let counter = 2;

  while (used.has(candidate)) {
    candidate = `${slug}-${counter}`;
    counter += 1;
  }

  used.add(candidate);
  return candidate;
};

const main = () => {
  const entries = walkMarkdownFiles(inputDir).map(normalizeEntry);
  const groups = new Map();

  for (const entry of entries) {
    const group = groups.get(entry.groupKey) ?? [];
    group.push(entry);
    groups.set(entry.groupKey, group);
  }

  const usedSlugs = new Set();
  const outputs = [...groups.values()].map(mergeGroup).map((entry) => ({
    ...entry,
    slug: ensureUniqueSlug(entry.slug, usedSlugs),
  }));

  if (!dryRun) fs.mkdirSync(outputDir, { recursive: true });

  for (const output of outputs) {
    const destination = path.join(outputDir, `${output.slug}.md`);
    const content = `${stringifyFrontmatter(output.frontmatter)}${output.body}\n`;

    if (dryRun) {
      console.log(`[dry-run] ${output.sources.join(", ")} -> ${path.relative(process.cwd(), destination)}`);
    } else {
      fs.writeFileSync(destination, content);
      console.log(`wrote ${path.relative(process.cwd(), destination)}`);
    }
  }

  console.log(`${dryRun ? "Would migrate" : "Migrated"} ${outputs.length} news entries.`);
};

main();
