import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bytecraftstudio.com",
      priority: 1,
    },
  ];
}
