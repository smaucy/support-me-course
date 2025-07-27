import { PersonStandingIcon } from "lucide-react";

export default function MenuTitle() {
  return (
    <h4 className="flex items-center gap-2 pb-4">
      <PersonStandingIcon className="text-primary" size={40} />
      <span className="text-2xl font-bold">SupportMe</span>
    </h4>
  );
}
