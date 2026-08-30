import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, getPost } from "@/lib/blog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs text-char-500">
        {new Date(post.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
        {" · "}
        {post.readTime}
      </p>
      <h1 className="font-display font-700 text-3xl md:text-4xl text-char-900 mt-2">
        {post.title}
      </h1>
      <div className="mt-8 space-y-5 text-char-700 leading-relaxed">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-12 border-t border-char-100 pt-8 text-center">
        <p className="text-char-700 mb-4">Not sure where your roof stands?</p>
        <Link
          href="/contact"
          className="inline-block bg-moss-600 hover:bg-moss-700 text-white font-medium px-6 py-3 rounded-sm"
        >
          Get my free roof check
        </Link>
      </div>
    </article>
  );
}
