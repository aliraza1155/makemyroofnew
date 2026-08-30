export default function Confirmation({ slot }: { slot: string }) {
  return (
    <div className="text-center py-6">
      <div className="mx-auto w-14 h-14 rounded-full bg-moss-100 flex items-center justify-center text-moss-700 text-2xl">
        ✓
      </div>
      <h2 className="font-display font-700 text-2xl text-char-900 mt-4">
        You&apos;re booked
      </h2>
      <p className="text-char-500 mt-2">
        {slot}. We&apos;ve sent a confirmation to your email and phone — a local technician will
        text you shortly to confirm the address.
      </p>
      <a
        href="tel:2105557663"
        className="inline-block mt-6 text-moss-700 font-medium underline"
      >
        Need to reschedule? Call (210) 555-ROOF
      </a>
    </div>
  );
}
