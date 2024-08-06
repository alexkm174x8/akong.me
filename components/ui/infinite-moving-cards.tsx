"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 py-4 w-max flex-nowrap gap-3",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-fit max-w-full relative rounded-2xl"
            style={{
                background:'transparent',
                backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <div className="relative z-20 flex flex-row items-center gap-3">
              <img src="/vsc.png" alt="profile" className="w-10"/>
              <img src="/html.png" alt="profile" className="w-10"/>
              <img src="/css.png" alt="profile" className="w-10"/>
              <img src="/js.png" alt="profile" className="w-10"/>
              <img src="/php.png" alt="profile" className="w-10"/>
              <img src="/python.png" alt="profile" className="w-10"/>
              <img src="/tailwind.png" alt="profile" className="w-10"/>
              <img src="/react.png" alt="profile" className="w-10"/>
              <img src="/node.png" alt="profile" className="w-10"/>
              <img src="/next.png" alt="profile" className="w-10"/>
              <img src="/mysql.png" alt="profile" className="w-10"/>
              <img src="/git.png" alt="profile" className="w-10"/>
              <img src="/c++.png" alt="profile" className="w-10"/>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
