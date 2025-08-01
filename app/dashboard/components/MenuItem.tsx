"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { DrawerContext } from "@/components/ui/drawer";

type MenuItemProps = {
  children: React.ReactNode;
  href: string;
};

export default function MenuItem({ children, href }: MenuItemProps) {
  const { onClose } = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block text-sm hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground p-2 hover:text-foreground",
          isActive &&
            "bg-primary hover:bg-primary text-primary-foreground dark:hover:bg-primary hover:text-primary-foreground"
        )}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}
