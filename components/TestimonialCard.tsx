type Props = {
  name: string;
  city: string;
  rating: number; // 1-5
  quote: string;
};

export default function TestimonialCard({ name, city, rating, quote }: Props) {
  return (
    <div className="border border-char-100 rounded-sm p-6 bg-white">
      <div className="flex gap-0.5 text-oil-500" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} aria-hidden="true">
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      <p className="mt-3 text-char-700 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm font-medium text-char-900">{name}</p>
      <p className="text-xs text-char-500">{city}</p>
    </div>
  );
}
