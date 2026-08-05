import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface StackImage {
  src: string;
  alt: string;
}

interface ImageStackProps {
  images: StackImage[];
  className?: string;
}

const DRAG_THRESHOLD = 80;

// Fanned card stack you drag (or swipe, on touch) to cycle through. Only the
// top few cards render at once so it stays cheap on phones.
function ImageStack({ images, className }: ImageStackProps) {
  const [order, setOrder] = useState(() => images.map((_, i) => i));

  function cycle() {
    setOrder((current) => [...current.slice(1), current[0]]);
  }

  const visible = order.slice(0, 4);

  return (
    <div className={cn("relative", className)}>
      {visible
        .slice()
        .reverse()
        .map((imageIndex, stackPositionFromBack) => {
          const stackPosition = visible.length - 1 - stackPositionFromBack;
          const isTop = stackPosition === 0;
          const image = images[imageIndex];

          return (
            <motion.div
              key={imageIndex}
              className="absolute inset-0"
              style={{ zIndex: 10 - stackPosition }}
              initial={false}
              animate={{
                scale: 1 - stackPosition * 0.05,
                y: stackPosition * 14,
                rotate: stackPosition === 0 ? 0 : (imageIndex % 2 === 0 ? -1 : 1) * (stackPosition + 1),
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_event, info) => {
                if (Math.abs(info.offset.x) > DRAG_THRESHOLD) cycle();
              }}
              whileDrag={{ cursor: "grabbing" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className={cn(
                  "h-full w-full rounded-3xl border object-cover shadow-lg select-none",
                  isTop && "cursor-grab active:cursor-grabbing",
                )}
              />
            </motion.div>
          );
        })}
    </div>
  );
}

export { ImageStack };
export type { StackImage };
