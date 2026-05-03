import { defineConfig } from "astro/config";

const rewriteLegacyImagePaths = () => {
  const visit = (node, callback) => {
    callback(node);

    if (Array.isArray(node.children)) {
      node.children.forEach((child) => visit(child, callback));
    }
  };

  return (tree) => {
    visit(tree, (node) => {
      if (node?.type === "image" && typeof node.url === "string" && node.url.startsWith("images/")) {
        node.url = `/${node.url}`;
      }
    });
  };
};

export default defineConfig({
  site: "https://www.civictechsaitama.com",
  output: "static",
  outDir: "../dist",
  publicDir: "../public",
  markdown: {
    remarkPlugins: [rewriteLegacyImagePaths],
  },
  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
});
