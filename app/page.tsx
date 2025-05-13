import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-6xl font-bold underline underline-offset-[12px]">My NextJs Flyio PNPM</h1>
      <Button size={"lg"} className="mt-6 px-12 py-4">Deploy Me</Button>
    </div>
  );
}
