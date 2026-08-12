import { cn } from "../../lib/cn";

type Square = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  rotate: number;
};

const TIMELINE_SQUARES: Square[] = [
  { left: 8, top: 6, size: 46, opacity: 0.04, rotate: 43 },
  { left: 88, top: 10, size: 52, opacity: 0.04, rotate: 45 },
  { left: 68, top: 15, size: 72, opacity: 0.04, rotate: 45 },
  { left: 22, top: 18, size: 58, opacity: 0.04, rotate: 47 },
  { left: 94, top: 26, size: 42, opacity: 0.04, rotate: 42 },
  { left: 4, top: 32, size: 40, opacity: 0.04, rotate: 45 },
  { left: 82, top: 40, size: 58, opacity: 0.04, rotate: 48 },
  { left: 15, top: 48, size: 52, opacity: 0.04, rotate: 44 },
  { left: 92, top: 56, size: 46, opacity: 0.04, rotate: 45 },
  { left: 6, top: 68, size: 48, opacity: 0.04, rotate: 46 },
  { left: 86, top: 72, size: 50, opacity: 0.04, rotate: 44 },
  { left: 20, top: 82, size: 42, opacity: 0.04, rotate: 45 },
  { left: 94, top: 88, size: 40, opacity: 0.04, rotate: 46 },
  { left: 55, top: 94, size: 48, opacity: 0.04, rotate: 45 },
];

// Sparser set for a single-viewport section — fewer squares, kept clear of
// the fixed navbar up top and the scroll indicator at bottom-center.
const HERO_SQUARES: Square[] = [
  { left: 6, top: 18, size: 42, opacity: 0.04, rotate: 45 },
  { left: 4, top: 46, size: 36, opacity: 0.04, rotate: 46 },
  { left: 10, top: 74, size: 48, opacity: 0.04, rotate: 45 },
  { left: 24, top: 90, size: 38, opacity: 0.04, rotate: 45 },
];

// Hugs the far edges — Vision's rows span almost the full container width,
// so squares stay clear of the left/right text columns.
const VISION_SQUARES: Square[] = [
  { left: 15, top: 6, size: 40, opacity: 0.04, rotate: 45 },
  { left: 90, top: 10, size: 50, opacity: 0.04, rotate: 44 },
  { left: 2, top: 28, size: 46, opacity: 0.04, rotate: 46 },
  { left: 93, top: 34, size: 38, opacity: 0.04, rotate: 43 },
  { left: 14, top: 50, size: 54, opacity: 0.04, rotate: 45 },
  { left: 95, top: 58, size: 42, opacity: 0.04, rotate: 47 },
  { left: 3, top: 72, size: 38, opacity: 0.04, rotate: 44 },
  { left: 86, top: 82, size: 48, opacity: 0.04, rotate: 45 },
  { left: 15, top: 87, size: 40, opacity: 0.04, rotate: 46 },
];

const VARIANTS = {
  timeline: TIMELINE_SQUARES,
  hero: HERO_SQUARES,
  vision: VISION_SQUARES,
} as const;

export type BackgroundSquaresProps = {
  variant?: keyof typeof VARIANTS;
  className?: string;
};

export function BackgroundSquares({
  variant = "timeline",
  className,
}: BackgroundSquaresProps) {
  const squares = VARIANTS[variant];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {squares.map((square, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${square.left}%`,
            top: `${square.top}%`,
            width: `${square.size}px`,
            height: `${square.size}px`,
            backgroundColor: `rgba(32,94,64,${square.opacity})`,
            transform: `rotate(${square.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
