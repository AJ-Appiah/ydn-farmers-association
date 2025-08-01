import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({
  value = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const numericValue =
    typeof value === "string" ? parseFloat(value) || 0 : value;

  const { number } = useSpring({
    from: { number: 39 },
    to: { number: isVisible ? numericValue : 0 },
    config: { duration: 3000 },
    reset: !isVisible,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <animated.span ref={ref} className="text-5xl font-bold text-white">
      {number.to((n) => {
        if (typeof value === "string" && value.includes("%")) {
          return `${prefix}${Math.floor(n)}${suffix || "%"}`;
        }
        return `${prefix}${Math.floor(n).toLocaleString()}${suffix}`;
      })}
    </animated.span>
  );
};

export default AnimatedCounter;
