/**@format */
"use client";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

export default function Userspage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />

      <DataTable columns={columns} data={data} />
    </div>
  );
}

export type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "LastOrder",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

export const data: Payment[] = [
  {
    name: "tanaka",
    email: "m@example.com",
    lastOrder: "2024-01-01",
    method: "swipe",
  },
  {
    name: "tinashe",
    email: "m@example.com",
    lastOrder: "2024-01-01",
    method: "swipe",
  },
  {
    name: "takudzwa",
    email: "m@example.com",
    lastOrder: "2024-01-01",
    method: "swipe",
  },

  // ...
];
