"use client";

import * as React from "react";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

function PasswordInput(
  { ...props }: React.ComponentProps<"input">,
  ref: React.Ref<HTMLInputElement>
) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        ref={ref}
        type={showPassword ? "text" : "password"}
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <span
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer select-none"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </span>
    </div>
  );
}

export { PasswordInput };
