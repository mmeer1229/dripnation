import { Link } from "react-router-dom";
import { toast } from "sonner";

import { mainNav, storeInfo } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

function Footer() {
  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast("Newsletter signup isn't connected yet — check back soon.");
    event.currentTarget.reset();
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto grid gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <span className="font-heading text-lg font-bold">DRIP NATION</span>
          <p className="text-sm text-muted-foreground">{storeInfo.address}</p>
          <p className="text-sm text-muted-foreground">{storeInfo.hours}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Shop</h3>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{storeInfo.phone}</li>
            <li>{storeInfo.email}</li>
          </ul>
          <ul className="flex gap-4 pt-1">
            {storeInfo.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
          <h3 className="text-sm font-semibold">Get the drip first</h3>
          <p className="text-sm text-muted-foreground">
            New drops, restocks, and Mystery Box openings.
          </p>
          <div className="flex gap-2">
            <Input type="email" required placeholder="you@email.com" aria-label="Email address" />
            <Button type="submit">Join</Button>
          </div>
        </form>
      </div>

      <Separator />

      <div className="container mx-auto flex flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Drip Nation Box. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { Footer };
