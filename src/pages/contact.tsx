import { storeInfo } from "@/config/site";

function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-heading text-3xl font-bold">Visit the shop</h1>
      <dl className="mt-8 space-y-4">
        <div>
          <dt className="text-sm font-semibold text-muted-foreground">Address</dt>
          <dd className="mt-1">{storeInfo.address}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted-foreground">Hours</dt>
          <dd className="mt-1">{storeInfo.hours}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted-foreground">Phone</dt>
          <dd className="mt-1">{storeInfo.phone}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-muted-foreground">Email</dt>
          <dd className="mt-1">{storeInfo.email}</dd>
        </div>
      </dl>
    </div>
  );
}

export { ContactPage };
