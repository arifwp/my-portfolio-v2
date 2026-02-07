"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Menu {
  id: number;
  name: string;
  href: string;
}

export const menuItems: Menu[] = [
  {
    id: 1,
    name: "About",
    href: `${process.env.NEXT_PUBLIC_FRONTEND_URL}#about`,
  },
  {
    id: 2,
    name: "Projects",
    href: `${process.env.NEXT_PUBLIC_FRONTEND_URL}#projects`,
  },
  {
    id: 3,
    name: "Contact",
    href: `${process.env.NEXT_PUBLIC_FRONTEND_URL}#contact`,
  },
];

export const TopNavbar = () => {
  return (
    <nav className="sticky top-0 w-full px-6 lg:px-12 h-18 bg-white flex flex-row items-center justify-between z-999">
      <Link href={"/"} className="text-2xl font-bold leading-none">
        PORTFOLIO
      </Link>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
        className="gap-4 flex-row hidden sm:flex"
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { y: -100, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link href={item.href} className="text-sm lg:text-lg">
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};
