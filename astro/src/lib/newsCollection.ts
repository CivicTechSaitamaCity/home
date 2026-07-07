import { getCollection, type CollectionEntry } from "astro:content";

export const PAGE_SIZE = 10;

export type NewsEntry = CollectionEntry<"news">;

export const toEntrySlug = (entry: NewsEntry) => entry.id.replace(/\.mdx?$/, "");

export const toEntryHref = (entry: NewsEntry) =>
  entry.data.external_url ?? `/news/${toEntrySlug(entry)}`;

export const isExternalEntry = (entry: NewsEntry) => Boolean(entry.data.external_url);

export const toDateValue = (date: Date) => date.toISOString().slice(0, 10);

export const sortByDateDesc = (entries: NewsEntry[]) =>
  [...entries].sort((left, right) => right.data.date.getTime() - left.data.date.getTime());

export const getSortedNewsEntries = async () => sortByDateDesc(await getCollection("news"));

export const getSortedEventEntries = async () =>
  sortByDateDesc((await getCollection("news")).filter((entry) => entry.data.category === "event"));

export const getPageItems = <T>(items: T[], page: number, pageSize = PAGE_SIZE) =>
  items.slice((page - 1) * pageSize, page * pageSize);

export const getTotalPages = (items: unknown[], pageSize = PAGE_SIZE) =>
  Math.max(1, Math.ceil(items.length / pageSize));
