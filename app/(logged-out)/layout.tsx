import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import type { ReactNode } from "react";

type LoggedOutLayoutProps = {
  children: ReactNode;
};

export default function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-screen p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed right-4 top-[calc(50%-12px)]" />
    </>
  );
}
