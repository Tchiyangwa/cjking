import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/card";
import Image from "next/image";
import { Users, CreditCard, Activity, DollarSign } from "lucide-react";
import Barchart from "@/components/barchart";
import { SalesProps } from "@/components/SalesCard";
import SalesCards from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.8",
    discription: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+1800.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12.234",
    discription: "+15% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+20.1% from last hour",
    icon: Activity,
  },
];

const userSalesData: SalesProps[] = [
  {
    name: "Tanaka Chiyangwa",
    email: "tchiyangwa@hiph.ac.zw",
    saleAmount: "+$1,500,00",
  },
  {
    name: "Tino joe",
    email: "tjoe@hiph.ac.zw",
    saleAmount: "+$1,000,00",
  },
  {
    name: "Eloi lee",
    email: "elee@hiph.ac.zw",
    saleAmount: "+$1,020,00",
  },
  {
    name: "Terry Gwatipedza",
    email: "tgwatipedza@hiph.ac.zw",
    saleAmount: "+$1,240,00",
  },
  {
    name: "Martin Chaitezvi",
    email: "mchaitezvi@hiph.ac.zw",
    saleAmount: "+$1,240,00",
  },
  {
    name: "Sasha June",
    email: "sjune@hiph.ac.zw",
    saleAmount: "+$1,240,00",
  },
  {
    name: "Shantel Chiyangwa",
    email: "schiyangwa@hiph.ac.zw",
    saleAmount: "+$1,240,00",
  },
  {
    name: "Trevor Tapfumanei",
    email: "ttapfumanei@hiph.ac.zw",
    saleAmount: "+$1,240,00",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-4 xl:grid-col-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.discription}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <Barchart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p className="text-bold"> Recent Sales</p>
            <p className="text-sm-bold text-black">
              You made 265 sales this month
            </p>
          </section>
          <section>
            {userSalesData.map((d, i) => (
              <SalesCards
                key={i}
                email={d.email}
                name={d.name}
                saleAmount={d.saleAmount}
              />
            ))}
          </section>
        </CardContent>
      </section>
    </div>
  );
}
