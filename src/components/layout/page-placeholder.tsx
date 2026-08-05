interface PagePlaceholderProps {
  title: string;
  description: string;
}

function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="container mx-auto flex min-h-[50svh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-heading text-3xl font-bold">{title}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{description}</p>
    </div>
  );
}

export { PagePlaceholder };
