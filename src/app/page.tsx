import PageTitle from "../components/PageTitle";
import Card, {CardContent, CardProps} from "../components/ui/Card"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import RecentSales from "@/components/RecentSales";
import BarChart from "@/components/ui/BarChart";
import { SalesProps } from "@/components/RecentSales";
const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];
const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    amount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00"
  }
];
export default function Home() {
  return (
  <div className="flex flex-col gap-5 w-full">
    <PageTitle title="Dashboard" />
    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
    {cardData.map((d, i)=>(
      <Card key={i} amount={d.amount} discription={d.discription} icon={d.icon} label={d.label}/>
    ))}
    </section>
    <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
      <CardContent>
        <p className="p-4 font-semibold">Overview</p>
        <BarChart />
      </CardContent>
        <CardContent className="flex justify-between gap-4">
           <section>
            <p className="p-4 font-semibold">Recent Sales</p>
            <p className="text-sm text-gray-400">you made 650 sales this month</p>
              </section>
                      {uesrSalesData.map((d, i) => (
            <RecentSales
              key={i}
              email={d.email}
              name={d.name}
              amount={d.amount}
            />
          ))}
        </CardContent>
    </section>
   
  </div>
  );
}
