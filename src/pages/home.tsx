import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Tiers } from "@/components/home/tiers";
import { HighlightStack } from "@/components/home/highlight-stack";
import { Faq } from "@/components/home/faq";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Tiers />
      <HighlightStack />
      <Faq />
    </>
  );
}

export { HomePage };
