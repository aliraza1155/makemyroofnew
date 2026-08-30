import { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "Guides on roof restoration, shingle lifespan, and maintenance for homeowners.",
};

export default function BlogListPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-display font-700 text-4xl text-char-900 text-center">
        Learning hub
      </h1>
      <p className="text-char-500 text-center mt-3">
        Straight answers about roof restoration, shingle lifespan, and maintenance.
      </p>

      <div className="mt-12 divide-y divide-char-100 border-y border-char-100">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block py-6 group"
          >
            <p className="text-xs text-char-500">
              {new Date(post.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
              {" · "}
              {post.readTime}
            </p>
            <h2 className="font-display font-700 text-xl text-char-900 mt-1 group-hover:text-moss-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-char-500 text-sm mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
