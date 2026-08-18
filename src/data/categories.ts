export type Category = {
  slug: string;
  label: string;
  shortLabel: string;
  tagline: string;
  intro: string;
};

export const categories: Category[] = [
  {
    slug: "thuisbatterijen",
    label: "Thuisbatterijen",
    shortLabel: "Thuisbatterij",
    tagline: "Sla je eigen stroom op en gebruik hem wanneer je wilt.",
    intro:
      "Met een thuisbatterij van SolarMist gebruik je zelf opgewekte of goedkoop ingekochte stroom op het moment dat jij dat wilt — in plaats van tegen hoge prijzen terug te leveren of duur in te kopen.",
  },
  {
    slug: "laadpalen",
    label: "Laadpalen",
    shortLabel: "Laadpaal",
    tagline: "Veilig en slim thuis laden, afgestemd op jouw auto.",
    intro:
      "SolarMist installeert laadpalen die veilig, snel en slim laden — desgewenst gekoppeld aan je thuisbatterij of zonnepanelen voor optimaal laadgemak.",
  },
  {
    slug: "airco",
    label: "Airco",
    shortLabel: "Airco",
    tagline: "Comfortabel koelen én verwarmen, energiezuinig geregeld.",
    intro:
      "Een moderne airco van SolarMist zorgt voor verkoeling in de zomer en efficiënte bijverwarming in de tussenseizoenen — vakkundig geïnstalleerd.",
  },
  {
    slug: "warmtepomp",
    label: "Warmtepomp",
    shortLabel: "Warmtepomp",
    tagline: "Duurzaam verwarmen zonder gas, met subsidie.",
    intro:
      "Met een warmtepomp van SolarMist verwarm je je huis duurzaam en toekomstbestendig — met recht op ISDE-subsidie en financieringsmogelijkheden via het Nationaal Warmtefonds.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
