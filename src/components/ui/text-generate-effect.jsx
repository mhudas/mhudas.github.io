"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.4,
    highlightWords = [],
    loopDelay = 9000,
    loop = false,
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once: false, margin: "-50px" });
    const [isAnimating, setIsAnimating] = useState(false);

    // Memoize words array to prevent unnecessary re-renders
    const wordsArray = useMemo(() => words.split(" "), [words]);

    const runAnimation = useCallback(async () => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Fade in animation - optimized with shorter stagger
        await animate(
            "span.word-span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.08), // Slightly faster stagger
                ease: "easeOut",
            }
        );

        if (loop) {
            await new Promise((resolve) => setTimeout(resolve, loopDelay));

            // Fade out animation - faster for smoother loop
            await animate(
                "span.word-span",
                {
                    opacity: 0,
                    filter: filter ? "blur(8px)" : "none",
                },
                {
                    duration: duration * 0.4,
                    delay: stagger(0.03),
                    ease: "easeIn",
                }
            );

            await new Promise((resolve) => setTimeout(resolve, 300));
            setIsAnimating(false);
            runAnimation();
        } else {
            setIsAnimating(false);
        }
    }, [animate, duration, filter, loop, loopDelay, isAnimating]);

    useEffect(() => {
        if (isInView && !isAnimating) {
            runAnimation();
        }
    }, [isInView]);

    // Memoize highlight check for performance
    const isWordHighlighted = useCallback((word) => {
        return highlightWords.some((hw) =>
            word.toLowerCase().includes(hw.toLowerCase())
        );
    }, [highlightWords]);

    return (
        <div className={cn("font-bold", className)}>
            <div className="leading-snug tracking-wide">
                <motion.div ref={scope} className="gpu-accelerate">
                    {wordsArray.map((word, idx) => (
                        <motion.span
                            key={`${word}-${idx}`}
                            className="word-span opacity-0"
                            style={{
                                filter: filter ? "blur(8px)" : "none",
                                willChange: "opacity, filter",
                            }}
                        >
                            <span className={cn(isWordHighlighted(word) && "text-accent underline decoration-2 underline-offset-4")}>
                                {word}
                            </span>{" "}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TextGenerateEffect;
