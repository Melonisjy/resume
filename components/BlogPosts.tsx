"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useLanguage();
  const t = translations.blog;

  useEffect(() => {
    fetch("/api/blog-posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Section id="blog" title={t.title[lang]}>
        <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
          <p className="text-[#666] dark:text-[#aaa] text-sm italic">
            {t.loading[lang]}
          </p>
        </div>
      </Section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <Section id="blog" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#666] dark:text-[#aaa] text-sm mb-4 italic transition-colors duration-300"
        >
          {t.recentLabel[lang]}
        </motion.p>

        <div className="space-y-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <a
                href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row md:items-center md:justify-between gap-1"
              >
                <span className="text-[#222] dark:text-[#f5f5f0] group-hover:text-[#666] dark:group-hover:text-[#aaa] transition-colors duration-300">
                  {post.title}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#999] dark:text-[#666] font-mono transition-colors duration-300">
                    {post.category}
                  </span>
                  <span className="text-sm text-[#999] dark:text-[#666] font-mono tabular-nums transition-colors duration-300">
                    {post.date}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/blog"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block mt-6 text-sm text-[#999] dark:text-[#666] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
        >
          {t.moreLink[lang]}
        </motion.a>
      </div>
    </Section>
  );
}
