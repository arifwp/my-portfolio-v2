import { ArrowUpRight } from "lucide-react";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/constants/projects";
import styles from "./SelectedWorks.module.css";
import { SelectedWorksMotion } from "@/components/sections/project/SelectedWorksMotion";

const geist = Geist({ subsets: ["latin"] });

function ProjectPreview({ project }: { project: Project }) {
  return (
    <Image
      src={project.image}
      alt={`${project.title} project preview`}
      fill
      sizes="(max-width: 639px) 100vw, 50vw"
      className={
        project.slug === "etix" || project.slug === "repo-alpha-red-group-portal"
          ? `${styles.projectImage} ${styles.projectScreenshot}`
          : styles.projectImage
      }
    />
  );
}

export const SectionSelectedWorks = () => {
  return (
    <SelectedWorksMotion className={`${geist.className} ${styles.section}`}>
      <div className="mx-auto max-w-360">
        <header
          className={`${styles.header} mb-8 flex flex-col items-start justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end sm:gap-8`}
        >
          <h2 id="selected-works-title" className="max-w-6xl">
            Selected works<span>.</span>
          </h2>
          <p data-work-intro>
            {"Web platforms, built for real work."
              .split(" ")
              .map((word, index) => (
                <span key={index} data-work-word>
                  {word}{" "}
                </span>
              ))}
          </p>
        </header>
        <div className="grid grid-cols-1 grid-flow-dense gap-x-6 gap-y-9 sm:grid-cols-12 sm:gap-y-12">
          {projects.map((project) => (
            <Link
              href={`/project/${project.slug}`}
              key={project.id}
              aria-labelledby={`work-${project.slug}`}
              className={`${styles.card} min-w-0 rounded-md sm:col-span-6`}
            >
              <div className={styles.previewFrame}>
                <div className={styles.preview} data-work-preview>
                  <ProjectPreview project={project} />
                </div>
              </div>
              <div className={styles.caption}>
                <div>
                  <h3 id={`work-${project.slug}`}>{project.title}</h3>
                  <p>{project.overview}</p>
                  <span className={styles.meta}>
                    {project.role} <span aria-hidden="true">/</span>{" "}
                    {project.company}
                  </span>
                </div>
                <span className={styles.arrow}>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SelectedWorksMotion>
  );
};
