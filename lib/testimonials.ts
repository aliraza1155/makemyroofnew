// SAMPLE TESTIMONIALS — replace with real, verifiable customer reviews before launch.
// These are realistic examples to show how the page will look.

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    city: "Dallas, TX",
    rating: 5,
    quote:
      "After a hailstorm, I thought my roof was done for. The restoration team not only repaired the damage but also applied a protective coating. My roof looks better than it did when I bought the house, and I didn't have to deal with a full replacement mess.",
  },
  {
    name: "James Walker",
    city: "Charlotte, NC",
    rating: 5,
    quote:
      "I got a quote for a new roof at $15,000, but the restoration cost less than half that. The crew was efficient, and the result is fantastic. I'm glad I chose restoration over replacement.",
  },
  {
    name: "Linda Carter",
    city: "Nashville, TN",
    rating: 5,
    quote:
      "The team showed up on time, finished in two days, and left my yard spotless. They even explained every step of the process. Professional from start to finish.",
  },
];