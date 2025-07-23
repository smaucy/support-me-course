import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Support Me
      </h1>
      <p className="text-muted-foreground">
        The best dashboard to manage customer support
      </p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <small className="text-muted-foreground">or</small>
        <Button variant={"outline"} asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}
