import { cn } from "@/lib/shadcn-utils";

export default function SiteLogo(
  { className }: { className?: string }
) {
  return (
    <div className={cn(
      {className},
      "relative bg-sky-600 h-10 w-10 rounded-md -z-10",
    )}>
      <h1 className="text-lg font-bold p-0 m-0 absolute top-[1rem] left-[1rem]">TS</h1>
    </div>
  )
}
