"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

type LightDarkToggleProps = {
  className?: string;
};

export function LightDarkToggle({ className }: LightDarkToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        className={className}
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        <Button variant="outline" size="icon">
          <SunIcon className="block dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span className="hidden dark:inline">Enable light mode</span>
        <span className="inline dark:hidden">Enable dark mode</span>
      </TooltipContent>
    </Tooltip>
  );
}
