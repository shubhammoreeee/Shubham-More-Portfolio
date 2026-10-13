// Heading lines that slide up out of an overflow-hidden mask.
// App wires every .reveal-lines to a ScrollTrigger.
export default function Lines({ lines, as: Tag = "h2", className = "" }) {
  return (
    <Tag className={`reveal-lines ${className}`} aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span className="line" key={line} aria-hidden="true">
          <span className="line__inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
