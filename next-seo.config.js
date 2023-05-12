/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "L RMN OG Generator",
  description: "OG Image Generator (using Vercel OG)",
  canonical: "https://og.is-a.fun",
  openGraph: {
    url: "https://og.is-a.fun",
    title: "L RMN OG Generator",
    description: "OG Image Generator (using Vercel OG)",
    type: "website",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1091192083852828744/1106513258451587072/og_1.png",
        alt: "og.is-a.fun og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "LRMN-og",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};

export default defaultSEOConfig;
