"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
}

export default function BlogPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

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
            <Section id="blog" title="Blog">
                <p className="text-[#666] dark:text-[#aaa]">불러오는 중...</p>
            </Section>
        );
    }

    if (posts.length === 0) {
        return null;
    }

    return (
        <Section id="blog" title="Blog">
            <div className="space-y-4">
                {posts.map((post, index) => (
                    <motion.a
                        key={post.link}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="block border-l-2 border-[#999] dark:border-[#444] pl-4 py-3 hover:border-[#222] dark:hover:border-[#f5f5f0] transition-colors duration-300"
                    >
                        <h3 className="font-heading text-lg font-medium text-[#222] dark:text-[#f5f5f0] hover:underline transition-colors duration-300">
                            {post.title}
                        </h3>
                        <span className="text-sm text-[#999] dark:text-[#666] transition-colors duration-300">
                            {new Date(post.pubDate).toLocaleDateString("ko-KR")}
                        </span>
                    </motion.a>
                ))}
            </div>
            <motion.a
                href="https://velog.io/@meloncoder/posts"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block mt-6 text-sm text-[#666] dark:text-[#aaa] hover:text-[#222] dark:hover:text-[#f5f5f0] transition-colors duration-300"
            >
                → 더 많은 글 보기
            </motion.a>
        </Section>
    );
}
