import { DOMAIN_NAME } from "@/constants/user";
import type { MetadataRoute } from "next";

const HTTPS_DOMAIN = `https://${DOMAIN_NAME}`;
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: HTTPS_DOMAIN,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      images: [`${HTTPS_DOMAIN}/images/prasadbro.webp`],
    },
  ];
}
