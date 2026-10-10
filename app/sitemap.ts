import type { MetadataRoute } from "next";

const siteUrl = "https://alnakhwahfoodstuff.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only list canonical, publicly accessible pages.
  // Do not invent a lastModified timestamp on every request.
  return [{ url: siteUrl }];
}
