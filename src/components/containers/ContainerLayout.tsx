import clsx from "clsx";
import { TopNavbar } from "../navigations/TopNavbar";

export const ContainerLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("w-full relative", className)}>
      <TopNavbar />

      {/* Main  */}
      <main className="w-full">{children}</main>

      {/* <MobileNavbar /> */}

      {/* Footer */}
      {/* <footer></footer> */}
    </div>
  );
};
