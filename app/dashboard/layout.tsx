"use client"

import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/MainMenu";
import MenuTitle from "./components/MenuTitle";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "./hooks/use-media-query";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <div className="md:grid md:grid-cols-[250px_1fr] max-h-screen">
      <div className="hidden md:flex md:flex-col bg-black md:bg-muted overflow-auto p-4 h-screen">
        <MenuTitle />
        <MainMenu />
      </div>
      {!isDesktop && (
      <div className="flex md:hidden sticky top-0 left-0 bg-background border-b border-border p-4">
        <Drawer 
          direction="left" 
          open={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}>
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="hidden">Menu</DrawerTitle>
            <MainMenu />
          </DrawerContent>
          <DrawerDescription>this is a description</DrawerDescription>
        </Drawer>
        <MenuTitle />
      </div>
      )}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Tom</h1>
        {children}
      </div>
    </div>
  );
}
