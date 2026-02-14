import { Project, projects } from "@/constants/projects";
import { useCursor } from "@/hooks/useCursor";
import { FlowingMenuItem } from "./FlowingMenuItem";

export const FlowingMenu = ({ slug }: { slug: string }) => {
  const anotherProjects = projects.filter((v: Project) => v.slug !== slug);
  const { setVariant } = useCursor();

  return (
    <div className="w-full h-full bg-neutral-950 overflow-hidden">
      <nav
        className="flex flex-col h-full"
        onMouseEnter={() => setVariant("project")}
        onMouseLeave={() => setVariant("default")}
      >
        {anotherProjects.map((item, idx) => (
          <FlowingMenuItem
            key={idx}
            link={item.internalLink}
            text={item.title}
            image={item.image}
          />
        ))}
      </nav>
    </div>
  );
};
