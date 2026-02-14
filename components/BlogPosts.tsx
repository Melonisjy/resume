"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-8 scroll-mt-20 md:mb-12"
    >
      {/* Title + CTA */}
      <div className="flex items-baseline justify-between mb-3 md:mb-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading text-2xl font-semibold text-[#222] dark:text-[#f5f5f0] md:text-4xl transition-colors duration-300"
        >
          {t.title[lang]}
        </motion.h2>
        <motion.a
          href="/blog"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-3 py-1.5 text-xs border border-[#222] dark:border-[#f5f5f0] text-[#222] dark:text-[#f5f5f0] hover:bg-[#222] hover:text-[#f5f5f0] dark:hover:bg-[#f5f5f0] dark:hover:text-[#222] transition-all duration-300"
        >
          {t.moreLink[lang]}
        </motion.a>
      </div>

      {/* Card */}
      <div className="border-t border-[#999] dark:border-[#444] pt-3 md:pt-4 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-[#ddd] dark:border-[#333] p-5 md:p-7 transition-colors duration-300"
        >
          {/* Tagline + Tech Stack */}
          <p className="text-[#222] dark:text-[#f5f5f0] text-base mb-1 transition-colors duration-300">
            {t.tagline[lang]}
          </p>
          <p className="text-xs text-[#999] dark:text-[#666] font-mono mb-5 transition-colors duration-300">
            {t.techStack}
          </p>

          {/* Recent Posts */}
          {loading ? (
            <p className="text-[#666] dark:text-[#aaa] text-sm italic transition-colors duration-300">
              {t.loading[lang]}
            </p>
          ) : posts.length > 0 ? (
            <>
              <p className="text-[#666] dark:text-[#aaa] text-xs mb-3 italic transition-colors duration-300">
                {t.recentLabel[lang]}
              </p>
              <div className="space-y-2">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={`/blog/${post.slug}`}
                      className="group flex items-center gap-2 text-sm"
                    >
                      <span className="text-[#999] dark:text-[#666] transition-colors duration-300">
                        ·
                      </span>
                      <span className="text-[#222] dark:text-[#f5f5f0] group-hover:text-[#666] dark:group-hover:text-[#aaa] transition-colors duration-300">
                        {post.title}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </>
          ) : null}
        </motion.div>
      </div>
    </motion.section>
  );
}
