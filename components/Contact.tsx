"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const contactInfo = [
  {
    label: "Email",
    value: "dhy2458@gmail.com",
    href: "mailto:dhy2458@gmail.com",
  },
  {
    label: "GitHub",
    value: "Melonisjy",
    href: "https://github.com/Melonisjy",
  },
  {
    label: "Tistory",
    value: "melon.sol",
    href: "https://melon-is-jy.tistory.com/",
  },
  {
    label: "Velog",
    value: "meloncoder",
    href: "https://velog.io/@meloncoder/posts",
  },
];

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations.contact;

  return (
    <Section id="contact" title={t.title[lang]}>
      <div className="border-l-2 border-[#999] dark:border-[#444] pl-4 md:pl-6 transition-colors duration-300">
        <div className="space-y-2">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-[#999] dark:text-[#666] w-16 transition-colors duration-300">
                {info.label}
              </span>
              <a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222] dark:text-[#f5f5f0] hover:text-[#666] dark:hover:text-[#aaa] transition-colors duration-300"
              >
                {info.value} <span className="text-[#999] dark:text-[#666]">↗</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
