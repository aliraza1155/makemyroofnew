export type City = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  phone: string;
  heroNote: string; // one locally-flavored line, replace with real local proof before launch
};

// Sourced from the "My top markets for roof rejuvenation" priority list.
// Rank 1 (TX), 2 (NC), 3 (GA), 4 (OH), 5 (TN).
export const CITIES: City[] = [
  { slug: "dallas-fort-worth-tx", name: "Dallas–Fort Worth", state: "Texas", stateAbbr: "TX", phone: "(210) 555-7663", heroNote: "Serving DFW homeowners since day one." },
  { slug: "san-antonio-tx", name: "San Antonio", state: "Texas", stateAbbr: "TX", phone: "(210) 555-7663", heroNote: "San Antonio's roof restoration specialists." },
  { slug: "austin-tx", name: "Austin", state: "Texas", stateAbbr: "TX", phone: "(210) 555-7663", heroNote: "Protecting Austin roofs from hail and heat alike." },
  { slug: "houston-tx", name: "Houston", state: "Texas", stateAbbr: "TX", phone: "(210) 555-7663", heroNote: "Built for Houston's humidity and storm season." },
  { slug: "charlotte-nc", name: "Charlotte", state: "North Carolina", stateAbbr: "NC", phone: "(210) 555-7663", heroNote: "Charlotte's trusted roof rejuvenation team." },
  { slug: "raleigh-nc", name: "Raleigh", state: "North Carolina", stateAbbr: "NC", phone: "(210) 555-7663", heroNote: "Raleigh homeowners save thousands with restoration." },
  { slug: "greensboro-winston-salem-nc", name: "Greensboro/Winston-Salem", state: "North Carolina", stateAbbr: "NC", phone: "(210) 555-7663", heroNote: "Serving the Triad since we opened our doors." },
  { slug: "atlanta-suburbs-ga", name: "Atlanta Suburbs", state: "Georgia", stateAbbr: "GA", phone: "(210) 555-7663", heroNote: "Metro Atlanta's roof restoration alternative." },
  { slug: "augusta-ga", name: "Augusta", state: "Georgia", stateAbbr: "GA", phone: "(210) 555-7663", heroNote: "Augusta roofs, restored not replaced." },
  { slug: "columbus-ga", name: "Columbus", state: "Georgia", stateAbbr: "GA", phone: "(210) 555-7663", heroNote: "Columbus, GA's local roof rejuvenation experts." },
  { slug: "columbus-oh", name: "Columbus", state: "Ohio", stateAbbr: "OH", phone: "(210) 555-7663", heroNote: "Columbus, OH — where roof restoration started." },
  { slug: "cincinnati-oh", name: "Cincinnati", state: "Ohio", stateAbbr: "OH", phone: "(210) 555-7663", heroNote: "Cincinnati homeowners choose restoration first." },
  { slug: "cleveland-suburbs-oh", name: "Cleveland Suburbs", state: "Ohio", stateAbbr: "OH", phone: "(210) 555-7663", heroNote: "Built for Cleveland's freeze-thaw winters." },
  { slug: "dayton-oh", name: "Dayton", state: "Ohio", stateAbbr: "OH", phone: "(210) 555-7663", heroNote: "Dayton's roof restoration specialists." },
  { slug: "nashville-tn", name: "Nashville", state: "Tennessee", stateAbbr: "TN", phone: "(210) 555-7663", heroNote: "Nashville roofs, rejuvenated in a day." },
  { slug: "knoxville-tn", name: "Knoxville", state: "Tennessee", stateAbbr: "TN", phone: "(210) 555-7663", heroNote: "Knoxville's alternative to a full tear-off." },
  { slug: "chattanooga-tn", name: "Chattanooga", state: "Tennessee", stateAbbr: "TN", phone: "(210) 555-7663", heroNote: "Chattanooga homeowners save up to 80%." },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
