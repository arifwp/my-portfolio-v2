import clsx from "clsx";
import { TopNavbar } from "../navigations/TopNavbar";
import { MobileNavbar } from "../navigations/MobileNavbar";

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

      <MobileNavbar />

      {/* <MobileNavbar /> */}

      {/* Footer */}
      {/* <footer></footer> */}
    </div>
  );
};
