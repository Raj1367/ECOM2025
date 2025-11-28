import AppBarChart from "@/components/appBarchart";
import { Button } from "../components/ui/button";
import AppAreaChart from "@/components/appAreaChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/cardList";
import TodoList from "@/components/todoList";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg  shadow-sm">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg border shadow-sm">
        <TodoList/>
      </div>
      <div className="bg-primary-foreground rounded-lg  shadow-sm">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-primary-foreground  rounded-lg col-span-2">
        <AppAreaChart />
      </div>
      
    </div>
  );
};

export default page;
