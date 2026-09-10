type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Injects valid JSON-LD for search engines and AI agents. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
