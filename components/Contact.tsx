"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const contactInfo = [
  {
    label: "Email",
    value: "dhy2458@gmail.com",
    href: "mailto:dhy2458@gmail.com",
  },
  { label: "Phone", value: "010-9010-7221", href: "tel:010-9010-7221" },
  { label: "GitHub", value: "Melonisjy", href: "https://github.com/Melonisjy" },
  {
    label: "Velog",
    value: "meloncoder",
    href: "https://velog.io/@meloncoder/posts",
  },
  { label: "Medium", value: "melonisjy", href: "https://medium.com/@dhy2458" },
  {
    label: "Tistory",
    value: "melon.sol",
    href: "https://melon-is-jy.tistory.com/",
  },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.label}
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group rounded-sm border border-[#999] bg-[#fdfcf8] p-4 text-center transition-all hover:border-[#222] hover:shadow-md"
          >
            <div className="mb-1 text-sm font-semibold text-[#999]">
              {info.label}
            </div>
            <div className="text-[#222] transition-colors group-hover:text-[#000]">
              {info.value}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
