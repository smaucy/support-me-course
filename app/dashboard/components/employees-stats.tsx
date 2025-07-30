import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";

export default function EmployeesStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Total employees</CardTitle>
          <CardContent className="flex items-center justify-between p-0">
            <div className="flex gap-2 items-center justify-between">
              <UserIcon className="w-10 h-10" />
              <span className="text-5xl font-bold">100</span>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View all</Link>
              </Button>
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
