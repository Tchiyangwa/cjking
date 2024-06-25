/**@format */
"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

export default function Orderspage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />

      <DataTable columns={columns} data={data} />
    </div>
  );
}

export type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Orders",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-1 rounded-lg", {
            "bg-red-500": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: "LastOrder",
  },
  {
    accessorKey: "method",
    header: "p",
  },
];

export const data: Payment[] = [
  {
    order: "0001",
    status: "Pending",
    lastOrder: "2024-01-01",
    method: "swipe",
  },
  {
    order: "0001",
    status: "Processing",
    lastOrder: "2024-01-01",
    method: "swipe",
  },
  {
    order: "0001",
    status: "Completed",
    lastOrder: "2024-01-01",
    method: "swipe",
  },

  // ...
];
