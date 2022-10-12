import { PolyButton } from "../components/PolyButton";

export function Home() {
  return (
    <main className="flex max-w-[1200px] m-auto py-6 bg-yellow-400">
      <section className="flex items-center max-w-md justify-between m-auto gap-4">
        <PolyButton>Default</PolyButton>
        <PolyButton asChild>
            <div>
                as DIV
            </div>
        </PolyButton>
        <PolyButton asChild>
            <a href="#">
                as Anchor
            </a>
        </PolyButton>
      </section>
    </main>
  );
}
