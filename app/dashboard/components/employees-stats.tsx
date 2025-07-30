import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

export default function EmployeesStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Total employees</CardTitle>
          <CardContent className="flex items-center justify-between">
            <div className="flex gap-2 justify-center items-center">
              <UserIcon />
              <span className="text-5xl font-bold">100</span>
            </div>
            <div>
              <Button size="sm">View</Button>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Employees present</CardTitle>
          <CardDescription>
            Total number of employees present in the company.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="border-pink-500">
        <CardHeader>
          <CardTitle className="text-sm">Employees of the month</CardTitle>
          <CardDescription>
            Total number of employees in the company.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
