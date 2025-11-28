import React from "react";

import { columns } from "./components/column";
import DataTable from "./components/dataTable";
import { getProductsData } from "./data/productsData";

const PaymentsPage = async () => {
  const productsData = await getProductsData();

  return (
    <div>
      <DataTable columns={columns} data={productsData} />
    </div>
  );
};

export default PaymentsPage;