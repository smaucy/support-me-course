import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
  AlertTriangleIcon,
  PartyPopperIcon,
  LaptopIcon,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WorkLocationTrends from "./work-location-trends";

export default function EmployeesStats() {
  const totalEmployees = 100;
  const presentEmployees = 85;
  const presentPercentage = (presentEmployees / totalEmployees) * 100;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="gap-1">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between grow">
            <div className="flex gap-2 items-center justify-between">
              <UserIcon className="w-10 h-10" />
              <span className="text-5xl font-bold">{totalEmployees}</span>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="pt-2">&nbsp;</CardFooter>
        </Card>
        <Card className="gap-1">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm">Employees present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 items-center">
              {presentPercentage > 75 ? (
                <UserCheck2Icon className="w-10 h-10" />
              ) : (
                <UserRoundXIcon className="w-10 h-10" />
              )}

              <span className="text-5xl font-bold">{presentEmployees}</span>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            {presentPercentage > 75 ? (
              <span className="text-xs text-green-500 flex items-center gap-1">
                <BadgeCheck />
                {presentPercentage}% of employee are present
              </span>
            ) : (
              <span className="text-xs text-red-500 flex items-center gap-1">
                <AlertTriangleIcon />
                Only {presentPercentage}% of employee are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border-pink-500 gap-1">
          <CardHeader className="pb-0">
            <CardTitle className="text-sm">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="my-auto">
            <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage src="/images/cm.jpg" alt="Collin Murray" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-2xl ml-2 tracking-wider">
                Collin Murray!
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex items-center gap-2 text-xs text-muted pt-2">
            <PartyPopperIcon className="text-pink-500" />
            <span className="text-pink-500">Congratulations, Collin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
