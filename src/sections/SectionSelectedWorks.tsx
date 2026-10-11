import { ArrowUpRight } from "lucide-react";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/constants/projects";
import styles from "./SelectedWorks.module.css";
import { SelectedWorksMotion } from "@/components/sections/project/SelectedWorksMotion";

const geist = Geist({ subsets: ["latin"] });

function ProjectPreview({ project }: { project: Project }) {
  if (
    project.slug === "etix" ||
    project.slug === "repo-alpha-red-group-portal"
  ) {
    const isEtix = project.slug === "etix";
    return (
      <div
        className={`${styles.cover} ${isEtix ? styles.etix : styles.orbyte}`}
      >
        {!isEtix && (
          <div className={styles.peopleGraphic} aria-hidden="true">
            <div className={styles.peopleRow}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.workflowLine} />
            <div className={styles.workflowCard}>
              <span />
              Access granted
              <ArrowUpRight size={16} />
            </div>
            <div className={styles.workflowCard}>
              <span />
              Leave approved
              <ArrowUpRight size={16} />
            </div>
          </div>
        )}
        {isEtix && (
          <div className={styles.ticketGraphic} aria-hidden="true">
            <span>ADMIT ONE</span>
            <i />
            <span>etix</span>
          </div>
        )}
        <span className={styles.coverCompany}>Alpha Red Solutions</span>
        <div className={styles.coverTitle}>
          {isEtix ? "etix" : "Orbyte"}
          <span>.</span>
        </div>
        <div className={styles.coverBottom}>
          <span>
            {isEtix
              ? "Live experiences.\nBuilt for everyone."
              : "People, connected.\nWork, organized."}
          </span>
          {isEtix && <ArrowUpRight aria-hidden="true" size={36} />}
        </div>
        <div className={styles.coverServices}>
          {isEtix
            ? "Tickets / Reservations / Payments"
            : "Employee records / Access control / HR workflows"}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={`/assets/images/banner-${project.slug}.webp`}
      alt={`${project.title} project preview`}
      fill
      sizes="(max-width: 639px) 100vw, 50vw"
      className={styles.projectImage}
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
