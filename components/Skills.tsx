"use client";

import Section from "./Section";
import { motion } from "framer-motion";

const skills = [
  { category: "Language", items: ["Javascript", "Typescript"] },
  { category: "Framework", items: ["React"] },
  { category: "Style", items: ["CSS", "Tailwind CSS", "Sass/Scss"] },
  { category: "Collaboration", items: ["Notion", "Github", "Github Desktop"] },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-l-2 border-[#999] dark:border-[#444] pl-4 transition-colors duration-300"
          >
            <h3 className="mb-3 font-heading text-xl font-semibold text-[#222] dark:text-[#f5f5f0] transition-colors duration-300">
              {skill.category}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="text-[#666] dark:text-[#aaa] transition-colors duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
