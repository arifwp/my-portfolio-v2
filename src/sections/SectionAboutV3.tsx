import { ButtonAnimatedHover } from "@/components/buttons/ButtonAnimatedHover";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const SectionAboutV3 = () => {
  return (
    <section
      id="about"
      className="w-full max-w-4xl mx-auto h-[calc(100vh-72px)] p-12 gap-12 flex flex-col items-center justify-center scroll-mt-18"
    >
      <h2 className="text-2xl lg:text-4xl font-semibold text-center">
        {
          "I’m Arif, a Software Engineer building SaaS, booking platforms, and payment workflows."
        }
      </h2>

      <p className="text-lg lg:text-2xl text-center">
        I’m based in Boyolali, Indonesia, with 3+ years of experience. I
        specialize in React, TanStack Start, Next.js, and TypeScript, with
        full-stack experience in Laravel, Node.js, Express.js, PostgreSQL, and
        MySQL.
      </p>

      <Link href={"/about-me"}>
        <ButtonAnimatedHover
          title="More About Me"
          iconEnd={<ArrowRight size={24} />}
          className="py-3.5 lg:py-5 lg:text-2xl"
        />
      </Link>
    </section>
  );
};
