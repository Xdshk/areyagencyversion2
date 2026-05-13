import type { CSSProperties } from "react";

export type ReadingTimeProps = {
  text: string;
  wordsPerMinute?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  style?: CSSProperties;
};

/** Remove tags and collapse whitespace — enough for excerpts and CMS blurbs. */
export function stripHtmlForReading(raw: string): string {
  if (!raw.trim()) return "";
  return raw
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordsInPlain(plain: string): number {
  if (!plain) return 0;
  return plain.split(/\s/).filter(Boolean).length;
}

/**
 * Estimated read length; intrinsic width (`inline-flex` + max-content).
 */
export default function ReadingTime({
  text,
  wordsPerMinute = 200,
  prefix = "",
  suffix = "",
  className = "",
  style,
}: ReadingTimeProps) {
  const plain = stripHtmlForReading(text);
  const words = wordsInPlain(plain);
  const wpm = Math.max(1, wordsPerMinute);
  const minutes = words <= 0 ? 0 : Math.max(1, Math.ceil(words / wpm));

  const mergedStyle: CSSProperties = {
    width: "max-content",
    maxWidth: "100%",
    ...style,
  };

  return (
    <span role="note" className={`inline-flex w-max max-w-full text-xs leading-snug ${className}`} style={mergedStyle}>
      <span
        aria-label={
          words <= 0
            ? "Нет текста для оценки времени чтения"
            : `Около ${minutes} минут чтения, ${words} слов`
        }
      >
        {words <= 0 ? "—" : `${prefix}${minutes}${suffix}`}
      </span>
    </span>
  );
}
