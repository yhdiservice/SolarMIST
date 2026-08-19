export type FeatureBlock = {
  heading: string;
  points: { title: string; body: string }[];
};

export type Faq = { question: string; answer: string };

export type Category = {
  slug: string;
  label: string;
  shortLabel: string;
  tagline: string;
  intro: string;
  heroFormHeading: string;
  heroBullets: string[];
  features: FeatureBlock[];
  faqs: Faq[];
};

export const categories: Category[] = [
  {
    slug: "thuisbatterijen",
    label: "Thuisbatterijen",
    shortLabel: "Thuisbatterij",
    tagline: "Sla je eigen stroom op en gebruik hem wanneer je wilt.",
    intro:
      "Met een thuisbatterij van SolarMist gebruik je zelf opgewekte of goedkoop ingekochte stroom op het moment dat jij dat wilt — in plaats van tegen hoge prijzen terug te leveren of duur in te kopen.",
    heroFormHeading: "Bespaar ook zonder salderingsregeling",
    heroBullets: [
      "Gebruik je eigen zonnestroom optimaal",
      "Verlaag je afhankelijkheid van het net",
      "Beperk je terugleverkosten",
    ],
    features: [
      {
        heading: "Verlaag je afhankelijkheid van het energienet",
        points: [
          {
            title: "Gebruik je eigen zonnestroom optimaal",
            body: "Met een thuisbatterij sla je overtollige zonnestroom zelf op in plaats van terug te leveren aan het net. Zo gebruik je 's avonds of op bewolkte dagen je eigen opgewekte energie, in plaats van duurdere stroom in te kopen.",
          },
          {
            title: "Voorkom hoge terugleverkosten",
            body: "Steeds meer energieleveranciers rekenen kosten voor het terugleveren van stroom aan het net. Door zelf opgewekte energie op te slaan in plaats van terug te leveren, voorkom je die kosten.",
          },
        ],
      },
      {
        heading: "Persoonlijk aanspreekpunt, geen callcenter",
        points: [
          {
            title: "Direct contact, geen wachtrijen",
            body: "Als jong bedrijf werken we met korte lijnen: je krijgt persoonlijk advies en blijft in contact met hetzelfde aanspreekpunt, van offerte tot installatie.",
          },
          {
            title: "Transparant over prijs en proces",
            body: "Je weet vooraf precies wat je krijgt en wat het kost — geen verborgen kosten, geen verrassingen achteraf.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Werkt een thuisbatterij ook zonder zonnepanelen?",
        answer:
          "Ja. Je kunt een thuisbatterij ook gebruiken om stroom op te slaan tijdens goedkope uren (bijvoorbeeld bij een dynamisch energiecontract) en te gebruiken wanneer de prijs hoger is. In combinatie met zonnepanelen levert het extra voordeel op.",
      },
      {
        question: "Hoeveel ruimte heeft een thuisbatterij nodig?",
        answer:
          "Dat verschilt per model en capaciteit. De meeste thuisbatterijen zijn niet groter dan een wasmachine en kunnen binnen of buiten geplaatst worden.",
      },
      {
        question: "Heb ik onderhoud nodig aan mijn thuisbatterij?",
        answer:
          "De meeste moderne thuisbatterijen zijn vrijwel onderhoudsvrij; je bewaakt de status eenvoudig via een app.",
      },
      {
        question: "Kan ik mijn thuisbatterij later uitbreiden?",
        answer:
          "Bij veel modulaire systemen kun je in een later stadium extra capaciteit toevoegen. We adviseren je hier graag over, afgestemd op jouw situatie.",
      },
    ],
  },
  {
    slug: "laadpalen",
    label: "Laadpalen",
    shortLabel: "Laadpaal",
    tagline: "Veilig en slim thuis laden, afgestemd op jouw auto.",
    intro:
      "SolarMist installeert laadpalen die veilig, snel en slim laden — desgewenst gekoppeld aan je thuisbatterij of zonnepanelen voor optimaal laadgemak.",
    heroFormHeading: "Laad slim en voordelig op, thuis",
    heroBullets: [
      "Veilig aangesloten volgens de norm",
      "Laad met je eigen zonnestroom",
      "Slim laden tijdens daluren",
    ],
    features: [
      {
        heading: "Efficiënt en voordelig thuis laden",
        points: [
          {
            title: "Gebruik je eigen zonnestroom",
            body: "Door thuis te laden met je eigen zonnestroom lever je minder terug aan het net en gebruik je je opgewekte energie direct voor je auto.",
          },
          {
            title: "Laad tijdens daluren",
            body: "Met een slimme laadpaal kun je je laadmomenten afstemmen op de goedkoopste uren, zodat je bespaart op je energiekosten.",
          },
        ],
      },
      {
        heading: "Veilig en vakkundig geïnstalleerd",
        points: [
          {
            title: "Aangesloten volgens de geldende normen",
            body: "We sluiten je laadpaal aan op een aparte, beveiligde groep in de meterkast, conform de Nederlandse installatienormen.",
          },
          {
            title: "Afgestemd op jouw auto en aansluiting",
            body: "We bepalen samen met jou de juiste laadcapaciteit en positie, passend bij je auto en de elektrische aansluiting van je woning.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Kan elke laadpaal op elke elektrische auto laden?",
        answer:
          "Vrijwel alle laadpalen in Nederland gebruiken de standaard Type 2-stekker, dus in de meeste gevallen wel. We controleren dit altijd voorafgaand aan de installatie.",
      },
      {
        question: "Heb ik een aparte groep in de meterkast nodig?",
        answer:
          "Ja, een laadpaal wordt aangesloten op een eigen, beveiligde groep. Onze installateur beoordeelt of je meterkast dit al ondersteunt of aangepast moet worden.",
      },
      {
        question:
          "Kan ik mijn laadpaal koppelen aan zonnepanelen of een thuisbatterij?",
        answer:
          "Bij veel laadpalen is dat mogelijk, zodat je zoveel mogelijk met je eigen opgewekte stroom oplaadt.",
      },
      {
        question: "Heb ik een vergunning nodig voor een laadpaal?",
        answer:
          "Voor een laadpaal op eigen terrein is meestal geen vergunning nodig; bij plaatsing op openbare grond gelden andere regels via de gemeente.",
      },
    ],
  },
  {
    slug: "airco",
    label: "Airco",
    shortLabel: "Airco",
    tagline: "Comfortabel koelen én verwarmen, energiezuinig geregeld.",
    intro:
      "Een moderne airco van SolarMist zorgt voor verkoeling in de zomer en efficiënte bijverwarming in de tussenseizoenen — vakkundig geïnstalleerd.",
    heroFormHeading: "Comfortabel klimaat, energiezuinig geregeld",
    heroBullets: [
      "Koelen én bijverwarmen",
      "Energiezuinig door moderne techniek",
      "Vakkundig gemonteerd",
    ],
    features: [
      {
        heading: "Comfortabel in elk seizoen",
        points: [
          {
            title: "Koelen én bijverwarmen",
            body: "Een airco van SolarMist koelt je woning tijdens warme dagen en kan in de tussenseizoenen ook efficiënt bijverwarmen.",
          },
          {
            title: "Energiezuinig door moderne techniek",
            body: "Moderne airco-units werken met warmtepomptechnologie en zijn daardoor veel energiezuiniger dan oudere systemen.",
          },
        ],
      },
      {
        heading: "Vakkundige montage",
        points: [
          {
            title: "Buiten- en binnenunit correct geplaatst",
            body: "We bepalen samen met jou de beste locatie voor de buiten- en binnenunit, met oog voor geluid en efficiëntie.",
          },
          {
            title: "Nette en veilige afwerking",
            body: "Leidingen en bekabeling worden netjes weggewerkt, afgestemd op de indeling van je woning.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Kan een airco ook verwarmen?",
        answer:
          "Ja, de meeste moderne airco's werken met warmtepomptechniek en kunnen zowel koelen als verwarmen.",
      },
      {
        question: "Hoeveel lawaai maakt een airco?",
        answer:
          "Moderne binnen- en buitenunits zijn stiller dan oudere modellen; het exacte geluidsniveau verschilt per model en plaatsing.",
      },
      {
        question: "Kan ik een airco combineren met zonnepanelen?",
        answer:
          "Ja, dan gebruik je je eigen opgewekte stroom om je woning te koelen of bij te verwarmen.",
      },
      {
        question: "Heb ik een vergunning nodig voor een buitenunit?",
        answer:
          "In de meeste gevallen niet, maar dit kan afhangen van de gemeente en het type woning; we adviseren je hier graag over.",
      },
    ],
  },
  {
    slug: "warmtepomp",
    label: "Warmtepomp",
    shortLabel: "Warmtepomp",
    tagline: "Duurzaam verwarmen zonder gas, met subsidie.",
    intro:
      "Met een warmtepomp van SolarMist verwarm je je huis duurzaam en toekomstbestendig — met recht op ISDE-subsidie en financieringsmogelijkheden via het Nationaal Warmtefonds.",
    heroFormHeading: "Duurzaam verwarmen, met subsidievoordeel",
    heroBullets: [
      "Minder afhankelijk van gas",
      "In aanmerking voor ISDE-subsidie",
      "Advies op maat voor jouw woning",
    ],
    features: [
      {
        heading: "Duurzaam verwarmen",
        points: [
          {
            title: "Minder afhankelijk van gas",
            body: "Een warmtepomp haalt warmte uit de buitenlucht en gebruikt die om je woning te verwarmen, met minder gasverbruik.",
          },
          {
            title: "In aanmerking voor subsidie",
            body: "Voor de aanschaf van een warmtepomp kom je in veel gevallen in aanmerking voor de ISDE-subsidie. We adviseren je graag over de actuele voorwaarden.",
          },
        ],
      },
      {
        heading: "Advies op maat",
        points: [
          {
            title: "Passend bij jouw woning",
            body: "Niet elke woning is hetzelfde — we kijken naar isolatie, huidige verwarming en verbruik om de juiste warmtepomp te adviseren.",
          },
          {
            title: "Gecombineerd met zonnepanelen",
            body: "In combinatie met zonnepanelen gebruik je je eigen opgewekte stroom om de warmtepomp te laten draaien, wat de terugverdientijd verkort.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Werkt een warmtepomp ook in een oudere woning?",
        answer:
          "Ja, al hangt de meest geschikte oplossing af van de isolatiegraad van je woning. We adviseren je hier eerlijk over.",
      },
      {
        question: "Kan ik mijn cv-ketel volledig vervangen?",
        answer:
          "In veel gevallen wel. Met een hybride opstelling kan de cv-ketel ook als back-up blijven staan tijdens de koudste dagen.",
      },
      {
        question: "Kom ik in aanmerking voor ISDE-subsidie?",
        answer:
          "Dat hangt af van het type warmtepomp en de actuele voorwaarden. We rekenen dit graag voor je door.",
      },
      {
        question: "Maakt een warmtepomp veel geluid?",
        answer:
          "Moderne warmtepompen zijn ontworpen om stil te werken; het exacte geluidsniveau verschilt per model en installatiewijze.",
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
