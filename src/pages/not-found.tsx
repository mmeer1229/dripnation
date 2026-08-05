import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="container mx-auto flex min-h-[60svh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-4xl font-bold">404</h1>
      <p className="mt-3 text-muted-foreground">This page doesn't exist.</p>
      <Button asChild className="mt-6">
        <Link to="/">Back home</Link>
      </Button>
    </div>
  );
}

export { NotFoundPage };
