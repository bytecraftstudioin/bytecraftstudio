import { resources } from "@/data/resources";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { articleContent } from "@/data/articles/index";
import { notFound } from "next/navigation";
import ArticleHeader from "@/components/resources/ArticleHeader";
import TableOfContents from "@/components/resources/TableOfContents";
import ArticleCTA from "@/components/resources/ArticleCTA";
import RelatedArticles from "@/components/resources/RelatedArticles";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = resources.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Bytecraft Studio",
    };
  }

  return {
    title: `${article.title} | Bytecraft Studio`,
    description: article.description,

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://bytecraftstudio.com/resources/${article.slug}`,
      siteName: "Bytecraft Studio",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = resources.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const content =
  articleContent[
    slug as keyof typeof articleContent
  ];

  return (
  <main className="bg-[#0B0F19] text-white min-h-screen">

    <section className="max-w-3xl mx-auto px-6 py-24">

      <ArticleHeader
        category={article.category}
        title={article.title}
        description={article.description}
      />

      <TableOfContents />

      {/* Temporary Article Content */}

      <article
className="
prose
prose-invert
max-w-none

prose-headings:text-white
prose-headings:font-black

prose-h2:text-4xl
prose-h2:mt-20

prose-h3:text-3xl

prose-p:text-gray-300
prose-p:leading-8

prose-a:text-cyan-400
prose-a:no-underline
hover:prose-a:text-cyan-300

prose-strong:text-white

prose-li:text-gray-300

prose-blockquote:border-cyan-400

prose-code:text-cyan-300
"
>
  <ReactMarkdown>
  {content}
</ReactMarkdown>
  
</article>

      <ArticleCTA />

      <RelatedArticles
        currentSlug={article.slug}
      />

    </section>

  </main>
);
}