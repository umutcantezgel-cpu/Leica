import type {
  NavItem, FooterColumn, HeroSlide, Exhibition, LeicaEvent,
  Tour, FAQ, Shop, Room, MenuDay, ServiceItem, Stat, ExperienceItem,
} from "./types";

// ── Navigation Links ──
export const NAV_LINKS: NavItem[] = [
  {
    label: "Erlebnisse", href: "/erlebnisse",
    children: [
      { label: "Touren", href: "/erlebnisse/touren" },
      { label: "Smartphone Workshop", href: "/erlebnisse/smartphone-workshop" },
      { label: "Gutscheine", href: "/erlebnisse/gutscheine" },
      { label: "Erlebnispakete", href: "/erlebnisse/erlebnispakete" },
    ],
  },
  { label: "Ausstellungen", href: "/ausstellungen" },
  { label: "Veranstaltungen", href: "/veranstaltungen" },
  {
    label: "Besucher", href: "/besucherinfos",
    children: [
      { label: "Casino", href: "/besucherinfos/casino" },
      { label: "Customer Care", href: "/besucherinfos/customer-care" },
    ],
  },
  { label: "Hotel & Gastronomie", href: "/hotel-gastronomie" },
  { label: "Historie", href: "/historie" },
  { label: "Hall of Fame", href: "/hall-of-fame" },
  { label: "Kontakt", href: "/kontakt" },
];

export const MOBILE_MENU_LINKS: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Erlebnisse", href: "/erlebnisse" },
  { label: "Ausstellungen", href: "/ausstellungen" },
  { label: "Veranstaltungen", href: "/veranstaltungen" },
  { label: "Besucher", href: "/besucherinfos" },
  { label: "Hotel & Gastronomie", href: "/hotel-gastronomie" },
  { label: "Shops & Stores", href: "/shops" },
  { label: "Casino", href: "/besucherinfos/casino" },
  { label: "Customer Care & Show-Werkstatt", href: "/besucherinfos/customer-care" },
  { label: "Historie", href: "/historie" },
  { label: "Hall of Fame", href: "/hall-of-fame" },
  { label: "Location buchen", href: "/location-buchen" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "FAQ", href: "/faq" },
];

// ── Footer ──
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Ausstellungen",
    links: [
      { label: "Alle Ausstellungen", href: "/ausstellungen" },
      { label: "She Shoots Leica", href: "/ausstellungen" },
      { label: "Ragnar Axelsson", href: "/ausstellungen" },
      { label: "Leica – Witness to a Century", href: "/ausstellungen" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Besucherinformationen", href: "/besucherinfos" },
      { label: "Casino", href: "/besucherinfos/casino" },
      { label: "Customer Care", href: "/besucherinfos/customer-care" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Häufige Fragen", href: "/faq" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: null },
      { label: "Datenschutz", href: null },
      { label: "AGB", href: null },
      { label: "Cookie-Einstellungen", href: null },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Am Leitz-Park 6, 35578 Wetzlar", href: null },
      { label: "06441-2080-0", href: null },
      { label: "info@leica-welt.com", href: null },
    ],
  },
];

// ── Hero Slides ──
export const HERO_SLIDES: HeroSlide[] = [
  { title: "Willkommen in der\nLeica Welt", subtitle: "Das Erlebnis- und Besucherzentrum von Leica Camera AG. Am Leitz-Park, Wetzlar.", imageLabel: "Leitz-Park Außenansicht", image: "/images/leica_hero_park.jpg" },
  { title: "Ernst Leitz\nMuseum", subtitle: "150 Jahre Optik- und Fotogeschichte. Sehen. Gestalten. Erleben.", imageLabel: "Ernst Leitz Museum Innenraum", image: "/images/leica_hero_museum.jpg" },
  { title: "Die ganze Welt von\nLeica an einem Ort", subtitle: "Museum · Manufaktur · Ausstellungen · Shop · Hotel · Gastronomie", imageLabel: "Leica Welt Panorama", image: "/images/leica_hero_panorama.jpg" },
];

// ── Stats ──
export const HOME_STATS: Stat[] = [
  { value: "1869", label: "Gegründet in Wetzlar" },
  { value: "150+", label: "Jahre Optikgeschichte" },
  { value: "129", label: "Hotelzimmer" },
  { value: "1.500+", label: "Exponate im Museum" },
];

// ── Exhibitions ──
export const EXHIBITIONS: Exhibition[] = [
  { id: "1", title: "She Shoots Leica: Different Women. One Love.", tag: "Laufend", dateRange: "10. März – 03. Mai 2026", location: "Café Leitz", category: "Gruppenausstellung", imageUrl: "/images/leica_she_shoots_leica.jpg" },
  { id: "2", title: "Ragnar Axelsson: Where the World Is Melting", tag: "Laufend", dateRange: "23. Jan. – 29. Mai 2026", location: "Ernst Leitz Museum", category: "Reportagefotografie", imageUrl: "/images/leica_ragnar_axelsson.jpg" },
  { id: "3", title: "Leica – Witness to a Century", tag: "Laufend", dateRange: "29. Juni 2025 – 28. Juni 2026", location: "Ernst Leitz Museum", category: "Dauerausstellung", imageUrl: "/images/leica_witness_century.jpg" },
  { id: "4", title: "Leica Experience Days 2026", tag: "Kommend", dateRange: "08. – 10. Mai 2026", location: "Leica Welt", category: "Event", imageUrl: "/images/leica_experience_days.jpg" },
  { id: "5", title: "Sebastião Salgado: Genesis", tag: "Archiv", dateRange: "2024", location: "Ernst Leitz Museum", category: "Dokumentarfotografie", imageUrl: "/images/leica_hof_salgado.jpg" },
  { id: "6", title: "Magnum Photos: 75 Jahre", tag: "Archiv", dateRange: "2024", location: "Ernst Leitz Museum", category: "Fotojournalismus", imageUrl: "/images/leica_magnum_75.jpg" },
];

// ── Events ──
export const EVENTS: LeicaEvent[] = [
  { id: "1", date: "26. Apr. 2026", title: "Smartphone Workshop: Sehen & Wahrnehmen", category: "Workshop", time: "10:00", price: "45 €" },
  { id: "2", date: "27. Apr. 2026", title: "Tour: Durch die Leica Welt", category: "Führung", time: "11:00", price: "Im Eintrittspreis" },
  { id: "3", date: "28. Apr. 2026", title: "Smartphone Workshop: Stimmung & Bildwirkung", category: "Workshop", time: "13:00", price: "45 €" },
  { id: "4", date: "02. Mai 2026", title: "Mauretanien – mit dem Erzzug in die Sahara", category: "Vortrag", time: "19:00", price: "12 €" },
  { id: "5", date: "08. Mai 2026", title: "Leica Experience Days 2026", category: "Ausstellung", time: "Ganztägig", price: "Frei" },
  { id: "6", date: "12. Mai 2026", title: "UNSEEN – Die Geschichten hinter den Bildern", category: "Vortrag", time: "18:30", price: "14 €" },
  { id: "7", date: "15. Mai 2026", title: "Einstein, Arendt, Mann – und der Fotograf dahinter", category: "Vortrag", time: "18:00", price: "12 €" },
  { id: "8", date: "16. Mai 2026", title: "Magie der Dunkelkammer: Camera Obscura", category: "Workshop", time: "10:00", price: "65 €" },
  { id: "9", date: "19. Mai 2026", title: "Leica.Connect: Das Leica M System entdecken", category: "Workshop", time: "10:00", price: "Frei" },
  { id: "10", date: "28. Jun. 2026", title: "Finissage: Ragnar Axelsson", category: "Vernissage", time: "18:00", price: "Frei" },
];

// ── Home Events (top 3) ──
export const HOME_EVENTS = [
  { date: "08.–10. Mai 2026", title: "Leica Experience Days 2026", type: "Event", time: "Ganztägig" },
  { date: "15. Mai 2026", title: "Einstein, Arendt, Mann – und der Fotograf dahinter", type: "Vortrag", time: "18:00 Uhr" },
  { date: "19. Mai 2026", title: "Leica.Connect: Das Leica M System entdecken", type: "Workshop", time: "10:00 Uhr" },
];

// ── Tours ──
export const TOURS: Tour[] = [
  { nr: "01", title: "Durch die Leica Welt", duration: "60 Min.", description: "Der ideale Einstieg: alle Highlights des Leitz-Parks mit erfahrenem Guide.", price: "Im Eintrittspreis" },
  { nr: "02", title: "Durch das Ernst Leitz Museum", duration: "45 Min.", description: "Entdecken Sie Motive, Bildwirkung und Anamorphosen. Inklusive Steve McCurry Galerie.", price: "Im Eintrittspreis" },
  { nr: "03", title: "Durch den Leitz-Park Wald", duration: "Eigenständig", description: "Ein 3 km langer Naturlehrpfad durch den Wetzlarer Stadtwald — ideal für Familien.", price: "Kostenlos" },
  { nr: "04", title: "Vom Leitz-Park in die Altstadt", duration: "Eigenständig", description: "7,8 km Rundweg von der Leica Welt durch die historische Wetzlarer Altstadt.", price: "Kostenlos" },
  { nr: "05", title: "Leica Naturlehrpfad", duration: "Eigenständig", description: "Erkunden Sie den Naturlehrpfad in Ihrem eigenen Tempo mit der kostenlosen Broschüre.", price: "Kostenlos" },
];

// ── Experiences ──
export const EXPERIENCES: ExperienceItem[] = [
  { title: "Ernst Leitz Museum", subtitle: "Museum", description: "Fotografie Sehen. Gestalten. Erleben.", href: "/ernst-leitz-museum", imageUrl: "/images/leica_museum_exhibition.jpg" },
  { title: "Leica Headquarter", subtitle: "Manufaktur", description: "Handwerk und Präzision hautnah erleben.", href: "/leica-headquarter", imageUrl: "/images/leica_manufaktur.jpg" },
  { title: "Touren", subtitle: "Geführt", description: "Mehr Insights bei unseren geführten Touren.", href: "/erlebnisse/touren", imageUrl: "/images/leica_touren.jpg" },
  { title: "Smartphone Workshop", subtitle: "Workshop", description: "Vom Schnappschuss zum perfekten Bild.", href: "/erlebnisse/smartphone-workshop", imageUrl: "/images/leica_smartphone_workshop.jpg" },
  { title: "Gutscheine & Pakete", subtitle: "Geschenk", description: "Perfekte Geschenke für Fotografiebegeisterte.", href: "/erlebnisse/gutscheine", imageUrl: "/images/leica_gutscheine.jpg" },
  { title: "Erlebnispakete", subtitle: "MAX · ELSIE · OSKAR", description: "Komplett-Erlebnisse für einen oder mehrere Tage.", href: "/erlebnisse/erlebnispakete", imageUrl: "/images/leica_erlebnispakete.jpg" },
];

// ── FAQ ──
export const FAQS: FAQ[] = [
  { category: "Allgemein", question: "Wann ist die Leica Welt geöffnet?", answer: "Mo. – Fr.: 10:00 – 17:00 Uhr. Sa., So. & Feiertage: 10:00 – 18:00 Uhr. Sonderschließungen beachten (Ernst Leitz Museum 23. Mai bis 15:00 Uhr, Leica Headquarter 6. Juni geschlossen)." },
  { category: "Allgemein", question: "Was kostet der Eintritt?", answer: "Erwachsene: 16,00 €. Ermäßigt: 8,00 €. Kinder bis 6: kostenlos. Familienticket: 36,00 €. Gruppen (10+): 12,00 €/P. Jahreskarte: 48,00 €." },
  { category: "Allgemein", question: "Darf ich im Museum fotografieren?", answer: "Fotografieren für private Zwecke ist in den meisten Bereichen erlaubt. In einzelnen Wechselausstellungen kann es Einschränkungen geben." },
  { category: "Anfahrt", question: "Wie komme ich zum Leica Welt?", answer: "Mit dem PKW: A45 Ausfahrt Wetzlar-Süd, Beschilderung Leitz-Park folgen. Kostenlose Parkplätze. Mit Bahn: Buslinie 11 ab Wetzlar ZOB, ca. 15 Min." },
  { category: "Anfahrt", question: "Gibt es Parkmöglichkeiten?", answer: "Kostenlose Parkplätze hinter Museum und Café. 12 Tesla Supercharger (250 kW) und 4 Typ2 Ladepunkte (22/50 kW)." },
  { category: "Touren", question: "Welche Touren gibt es?", answer: "1) Durch die Leica Welt (60 Min.) 2) Durch das Ernst Leitz Museum (45 Min.) 3) Leitz-Park Wald (3 km) 4) Vom Leitz-Park in die Altstadt (7,8 km) 5) Leica Naturlehrpfad. Alle im Eintrittspreis inklusive." },
  { category: "Touren", question: "Kann ich eine Manufakturführung buchen?", answer: "Ja. Standard 60 Min. (20 €), Premium 3 Std. (80 €), Gruppen ab 250 €. Bitte min. 2 Wochen im Voraus buchen." },
  { category: "Gastronomie", question: "Wann hat das Café Leitz geöffnet?", answer: "Di – So: 11:30 – 17:30 Uhr. Mo geschlossen. Sonderschließungen: 9., 13. und 18. Juni 2026." },
  { category: "Gastronomie", question: "Wann hat Oskar's Restaurant geöffnet?", answer: "Mo–Fr: Frühstück 06–10 Uhr, Dinner 17–21:30 Uhr. Sa: Frühstück 07–11:30 Uhr, Dinner 17–21:30 Uhr. So: Frühstück 07–11 Uhr, Brunch 12–15 Uhr." },
  { category: "Barrierefreiheit", question: "Ist die Leica Welt barrierefrei?", answer: "Ja. Rollstuhlgerechte Eingänge, Aufzüge und Toiletten in allen Bereichen. Bei speziellen Anforderungen bitte im Voraus kontaktieren." },
  { category: "Workshops", question: "Welche Workshops werden angeboten?", answer: "Smartphone Workshops, Straßenfotografie, Camera Obscura und Leica.Connect. Alle Termine im Veranstaltungskalender." },
  { category: "Gutscheine", question: "Gibt es Gutscheine und Erlebnispakete?", answer: "Ja: MAX (ab 89 €), ELSIE (ab 249 €), OSKAR (ab 399 €). Im Leica Store oder online erhältlich." },
];

// ── Shops ──
export const SHOPS: Shop[] = [
  { title: "Leica Store Wetzlar", description: "Das vollständige Leica Sortiment: M-System, SL-System, Q-Serie, alle Objektive und Accessoires. Fachkundige Beratung, Pre-Owned Service und Reparaturannahme.", hours: [{ days: "Mo. – Sa.", hours: "10:00 – 18:00 Uhr" }, { days: "Sonntag", hours: "Geschlossen" }], tag: "Kameras & Objektive", href: null },
  { title: "Museum Shop", description: "Leica Fotobücher, limitierte Editionen, Ausstellungskataloge, Kunstdrucke und exklusive Merchandise-Artikel.", hours: [{ days: "Mo. – Fr.", hours: "10:00 – 17:00 Uhr" }, { days: "Sa., So. & Feiertage", hours: "10:00 – 18:00 Uhr" }], tag: "Bücher & Editionen", href: null },
  { title: "Leica Classic Store", description: "Second-Hand und Pre-Owned: Geprüfte gebrauchte Leica Kameras und Objektive, Vintagemodelle und Collector's Items.", hours: [{ days: "Mo. – Sa.", hours: "10:00 – 17:00 Uhr" }, { days: "Sonntag", hours: "Geschlossen" }], tag: "Second-Hand", href: null },
  { title: "Customer Care & Show-Werkstatt", description: "Reparatur, Wartung und die öffentlich zugängliche Gläserne Werkstatt: Beobachten Sie Experten bei der Live-Instandsetzung historischer Leica-Kameras.", hours: [{ days: "Mo. – Fr. (Customer Care)", hours: "08:00 – 17:00 Uhr" }, { days: "Di. – Fr. (Werkstatt)", hours: "10:00 – 15:00 Uhr" }], tag: "Service & Reparatur", href: "/besucherinfos/customer-care" },
];

// ── Rooms ──
export const ROOMS: Room[] = [
  { title: "Ernst Leitz Museum", capacity: "Bis 500 Personen", description: "Das Museum als exklusive Event-Location." },
  { title: "Leica Store", capacity: "Bis 80 Personen", description: "Produktpräsentationen und Empfänge." },
  { title: "Dachterrasse", capacity: "Bis 120 Personen", description: "Panoramablick für Sommerevents." },
  { title: "Café Leitz", capacity: "Bis 60 Personen", description: "Brunch-Events und Meetings." },
  { title: "Leica Galerie", capacity: "Bis 100 Personen", description: "Empfänge und Vernissagen." },
  { title: "Leica Classic Store", capacity: "Bis 40 Personen", description: "Exklusive Sammler-Events." },
];

// ── Casino Menu ──
export const MENU_DAYS: MenuDay[] = [
  { day: "Montag", main: "Schwarzwälder Sauerbraten, Rotkohl, Klöße", vegetarian: "Gemüse-Curry mit Basmatireis", soup: "Tomatensuppe" },
  { day: "Dienstag", main: "Hähnchenschenkel provençal, Ratatouille", vegetarian: "Spinat-Ricotta-Cannelloni", soup: "Linsensuppe" },
  { day: "Mittwoch", main: "Rindergulasch, Spätzle, Blattsalat", vegetarian: "Gemüselasagne", soup: "Kürbiscremesuppe" },
  { day: "Donnerstag", main: "Zanderfilet, Kartoffelstampf, Bohnen", vegetarian: "Gefüllte Paprika", soup: "Hühnerbrühe" },
  { day: "Freitag", main: "Schnitzel Wiener Art, Pommes, Salat", vegetarian: "Pasta Primavera", soup: "Minestrone" },
];

// ── Customer Care Services ──
export const SERVICES: ServiceItem[] = [
  { title: "Mechanische Reparatur", description: "Instandsetzung klassischer Leica M-, R- und Schraubgewinde-Kameras." },
  { title: "Objektivrevision", description: "Reinigung, Justierung und Neuverkittung von Leica-Objektiven aller Epochen." },
  { title: "Elektronische Systeme", description: "Diagnose und Reparatur moderner Leica-Systeme: M, SL, Q und weitere." },
  { title: "Reinigung & Pflege", description: "Sensorreinigung, Sucherscheiben-Reinigung und Generalüberholung." },
  { title: "Justierung & Kalibrierung", description: "Rangefinder-Justierung und Verschluss-Kalibrierung nach Werksstandard." },
  { title: "Historische Kameras", description: "Restaurierung und Konservierung seltener Leica-Kameras für Sammler." },
];

// ── Event Filter Categories ──
export const EVENT_CATEGORIES = ["Alle", "Ausstellung", "Workshop", "Führung", "Vortrag", "Vernissage"];
export const EXHIBITION_FILTERS = ["Alle", "Laufend", "Kommend", "Archiv"];
export const FAQ_CATEGORIES = ["Alle", "Allgemein", "Touren", "Gastronomie", "Barrierefreiheit", "Anfahrt", "Workshops", "Gutscheine"];
