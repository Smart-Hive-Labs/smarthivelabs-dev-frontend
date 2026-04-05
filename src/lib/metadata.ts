import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt?: string;
};

const siteName = "Smart Hive Labs";

function buildSocialTitle(title: string) {
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageMetadataOptions): Metadata {
  const socialTitle = buildSocialTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt ?? socialTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}