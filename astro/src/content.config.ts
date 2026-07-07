import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

export const allowedTags = [
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
] as const;

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(["event", "news", "media", "column", "partner_event"]),
    tags: z.array(z.enum(allowedTags)).optional(),
    author_name: z.string().default("シビックテックさいたま"),
    author_type: z
      .enum(["internal", "saitama_city", "partner_org", "guest"])
      .default("internal"),
    external_url: z.url().optional(),
    image: z.string().optional(),
    location: z.string().optional(),
    status: z.enum(["upcoming", "ended"]).optional(),
    participant_count: z.number().optional(),
  }),
});

export const collections = { news };
