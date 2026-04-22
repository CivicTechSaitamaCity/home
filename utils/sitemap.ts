import { promises as fs } from 'fs';
import path from 'path';

interface RouteEntry {
  url: string;
  lastmod?: string;
  priority?: number;
}

export async function generateSitemap(baseUrl: string, outputPath: string) {
  const routes: RouteEntry[] = [];

  try {
    // Static pages
    const staticPages = [
      { url: '', priority: 1.0 },
      { url: 'events', priority: 0.8 },
      { url: 'news', priority: 0.8 },
      { url: 'report', priority: 0.8 },
    ];

    routes.push(...staticPages);

    // Dynamic content routes from content directory (only with reportDate)
    const contentDir = path.join(process.cwd(), 'content/data');
    const dynamicRoutes = await generateDynamicRoutes(contentDir, 'data');
    routes.push(...dynamicRoutes);

    // HTML files from public directory
    const publicDir = path.join(process.cwd(), 'public');
    const publicRoutes = await generatePublicRoutes(publicDir);
    routes.push(...publicRoutes);

  } catch (error) {
    console.error('Error generating sitemap routes:', error);
  }

  // Generate XML
  const sitemap = generateSitemapXml(baseUrl, routes);

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${outputDir}:`, error);
  }

  // Write to file
  await fs.writeFile(outputPath, sitemap, 'utf-8');
  console.log(`✓ Sitemap generated: ${outputPath}`);

  // Also generate robots.txt
  await generateRobots(baseUrl, outputPath.replace('sitemap.xml', 'robots.txt'));
}

async function generateDynamicRoutes(dir: string, prefix: string): Promise<RouteEntry[]> {
  const routes: RouteEntry[] = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Recursively process subdirectories
        const subRoutes = await generateDynamicRoutes(
          path.join(dir, entry.name),
          `${prefix}/${entry.name}`
        );
        routes.push(...subRoutes);
      } else if (entry.name.endsWith('.md')) {
        // Check if markdown has reportDate
        try {
          const filePath = path.join(dir, entry.name);
          const content = await fs.readFile(filePath, 'utf-8');

          // Check if reportDate exists in frontmatter
          if (hasReportDate(content)) {
            const slug = entry.name.replace('.md', '');
            const url = `${prefix}/${slug}`;
            routes.push({
              url: url.replace(/^\//, ''),
              priority: 0.7,
            });
          }
        } catch (error) {
          console.error(`Error reading file ${entry.name}:`, error);
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return routes;
}

function hasReportDate(content: string): boolean {
  // Parse frontmatter to check if reportDate exists
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return false;

  const frontmatter = frontmatterMatch[1];
  return /reportDate:\s*\d{4}-\d{2}-\d{2}/.test(frontmatter);
}

async function generatePublicRoutes(dir: string): Promise<RouteEntry[]> {
  const routes: RouteEntry[] = [];
  const excludePaths = ['CNAME', '.DS_Store', 'dlfiles', 'images'];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      // Skip excluded paths
      if (excludePaths.includes(entry.name)) continue;

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        const subRoutes = await generatePublicRoutes(path.join(dir, entry.name));
        routes.push(...subRoutes);
      } else if (entry.name.endsWith('.html') && entry.name !== 'index.html') {
        // Convert HTML file to URL path
        const filePath = path.join(dir, entry.name);
        const relativePath = path.relative(path.join(process.cwd(), 'public'), filePath);
        const urlPath = relativePath
          .replace(/\\/g, '/') // Convert backslashes to forward slashes
          .replace(/index\.html$/, '')
          .replace(/\.html$/, '')
          .replace(/\/$/, '');

        if (urlPath && !urlPath.startsWith('_')) {
          routes.push({
            url: urlPath,
            priority: 0.6,
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error reading public directory ${dir}:`, error);
  }

  return routes;
}

function generateSitemapXml(baseUrl: string, routes: RouteEntry[]): string {
  const baseUrlNormalized = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  const urlEntries = routes
    .map(route => {
      const path = route.url ? `/${route.url}` : '';
      const fullUrl = `${baseUrlNormalized}${path}`;
      const priority = route.priority || 0.8;

      return `  <url>
    <loc>${escapeXml(fullUrl)}</loc>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

async function generateRobots(baseUrl: string, outputPath: string): Promise<void> {
  const content = `# Generated robots.txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /*.json$

Sitemap: ${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}sitemap.xml
`;

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${outputDir}:`, error);
  }

  await fs.writeFile(outputPath, content, 'utf-8');
  console.log(`✓ Robots.txt generated: ${outputPath}`);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
