/**@format */

import React from "react";
export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function SalesCards(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-grey-500 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipisis overflow-hidden whitespace-nowrap [w-120px] sn:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  );
}
