
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <div className="space-y-2 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Frontend Foundation
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          DevGalery
        </h1>

        <p className="max-w-md text-muted-foreground">
          A home for developers to showcase their best projects.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Button>Get Started</Button>

        <Button variant="outline">
          Explore Projects
        </Button>
      </div>
    </main>
  );
}
