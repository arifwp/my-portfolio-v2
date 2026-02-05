import { Project } from "@/constants/projects";
import Image from "next/image";

export const ProjectItem = ({ data }: { data: Project }) => {
  return (
    <div className="relative w-full h-[calc(100vh-72px)] mx-auto flex items-center justify-center overflow-hidden">
      {/* LEFT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative w-105 h-105">
          <Image
            src={data.mockupDesktopImage}
            alt={`Image project ${data.title}`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-120 gap-4 flex flex-col shrink-0 items-center justify-center z-10">
        <h3 className="text-4xl font-bold">{data.title}</h3>

        <p className="text-base">{data.description}</p>
      </div>

      <div className="relative w-70 h-70">
        <Image
          src={data.mockupPhoneImage}
          alt={`Image project ${data.title}`}
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};
