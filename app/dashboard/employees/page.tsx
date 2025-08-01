import { setTimeout } from "timers/promises";
import { employees } from "./employees";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

export default async function EmployeesPage() {
  await setTimeout(1000);

  return (        <Card>
    <CardHeader>
        <CardTitle>Employees</CardTitle>
    </CardHeader>
    <CardContent>
      <DataTable columns={columns} data={employees} />
    </CardContent>
</Card>
);
}
