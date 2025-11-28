import React from "react";
import { columns } from "./components/column";
import DataTable from "./components/dataTable";
import { getUsersData } from "./data/usersData";

const PaymentsPage = async () => {
  const userData = await getUsersData();

  return (
    <div>
      <DataTable columns={columns} data={userData} />
    </div>
  );
};

export default PaymentsPage;
