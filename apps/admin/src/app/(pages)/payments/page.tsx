import React from "react";
import { getPaymentsData } from "./data/paymentsData";
import { columns } from "./components/column";
import DataTable from "./components/dataTable";

const PaymentsPage = async () => {
  const paymentsData = await getPaymentsData();

  return (
    <div>
      <DataTable columns={columns} data={paymentsData} />
    </div>
  );
};

export default PaymentsPage;
