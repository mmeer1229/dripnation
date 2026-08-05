import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

interface ImageTile {
  src: string;
  alt: string;
  label?: string;
  href?: string;
}

interface ImageTilesProps {
  items: ImageTile[];
  className?: string;
}

// Staggered row of images that expands the hovered tile and eases the
// others aside (desktop only — on touch devices there's no hover, so it
// falls back to a horizontally-scrollable staggered strip, which is its own
// reasonable presentation rather than a broken hover effect).
function ImageTiles({ items, className }: ImageTilesProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:snap-none sm:overflow-visible sm:pb-0",
        className,
      )}
    >
      {items.map((item, index) => {
        const offset = (index % 2 === 0 ? -1 : 1) * (10 + (index % 3) * 6);
        const isHovered = hovered === index;

        const content = (
          <motion.div
            layout
            className="relative aspect-[3/4] min-w-[46vw] shrink-0 snap-start overflow-hidden rounded-3xl border shadow-sm sm:min-w-0"
            style={{ flexGrow: isHovered ? 2.4 : 1 }}
            animate={{ y: offset }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onHoverStart={() => setHovered(index)}
            onHoverEnd={() => setHovered((current) => (current === index ? null : current))}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
            {item.label && (
              <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                {item.label}
              </span>
            )}
          </motion.div>
        );

        return item.href ? (
          <Link key={item.href} to={item.href} className="contents">
            {content}
          </Link>
        ) : (
          <div key={item.alt}>{content}</div>
        );
      })}
    </div>
  );
}

export { ImageTiles };
export type { ImageTile };
