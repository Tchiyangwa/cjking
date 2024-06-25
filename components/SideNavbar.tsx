// @ts-nocheck

/**@format */
"use client";
import { useState } from "react";
import React from "react";
import { Nav } from "./ui/Nav";

type Props = {};
import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  CircleChevronRight,
} from "lucide-react";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useWindowWidth } from "@react-hook/window-size";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon?: LucideIcon;
    variant: "default" | "ghost";
    href: string;
  }[];
}

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className=" relative min-w-[80px] border-r px-3 pb-10 pt-24 bg-blue-100 ">
      <div className="absolute right-[-10px] top-7">
        <button onClick={toggleSidebar} variant="secondary">
          <CircleChevronRight />
        </button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
