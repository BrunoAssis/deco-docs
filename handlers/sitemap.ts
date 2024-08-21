import type { Handler } from "deco/blocks/handler.ts";
import type { Resolvable } from "deco/engine/core/resolver.ts";
import { isResolvable } from "deco/engine/core/resolver.ts";
import { Route } from "apps/website/flags/audience.ts";
import tableOfContents from "site/docs/toc.ts";

const isPage = (handler: Resolvable<Handler>) =>
  isResolvable(handler) && handler.__resolveType.endsWith("handlers/fresh.ts");

const isAbsolute = (href: string) =>
  !href.includes(":") && !href.includes("*") && !href.startsWith("/_live");

const buildSiteMap = (urls: string[]) => {
  const entries: string[] = [];
  for (const url of urls) {
    entries.push(`
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().substring(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`);
  }
  return entries.join("\n");
};

const sanitize = (url: string) => (url.startsWith("/") ? url : `/${url}`);

const getDocPages = () => {
  const pages = [];
  for (const entry of tableOfContents) {
    if (entry.slug) {
      pages.push(entry.slug);
    }

    if (entry.children) {
      for (const child of entry.children) {
        if (child.slug) {
          pages.push(child.slug);
        }
      }
    }
  }

  return pages;
};

const siteMapFromRoutes = (
  publicUrl: string,
  routes: Route[],
  excludePaths?: string[],
): string => {
  const urls: string[] = [];
  const excludePathsSet = new Set(excludePaths);
  for (const route of routes) {
    if (
      !excludePathsSet.has(route.pathTemplate) &&
      isAbsolute(route.pathTemplate) &&
      isPage(route.handler.value)
    ) {
      urls.push(`${publicUrl}${sanitize(route.pathTemplate)}`);
    }
  }

  const docPages = getDocPages();
  for (const page of docPages) {
    urls.push(`${publicUrl}/docs/en/${page}`);
    urls.push(`${publicUrl}/docs/pt/${page}`);
  }

  return buildSiteMap(urls);
};

interface Props {
  excludePaths?: string[];
}

/**
 * @title Sitemap Custom deco.cx
 * @description Return deco's sitemap.xml
 */
export default function SiteMap({ excludePaths = [] }: Props) {
  return function (req: Request, connInfo: Deno.ServeHandlerInfo) {
    const reqUrl = new URL(req.url);
    const ctx = connInfo as Deno.ServeHandlerInfo & {
      params: Record<string, string>;
      state: {
        routes: Route[];
      };
    };
    return new Response(
      `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteMapFromRoutes(reqUrl.origin, ctx.state.routes ?? [], excludePaths)}
</urlset>`,
      { headers: { "content-type": "text/xml", status: "200" } },
    );
  };
}
