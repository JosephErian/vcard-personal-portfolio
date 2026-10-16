'use strict';

/**
 * EN/DE language switch.
 *
 * The English text in index.html is the source. DE maps each English text
 * (whitespace-normalized) to its German version. Texts without an entry,
 * such as technology names or the testimonial quote, stay in English.
 */

const DE = {
  // sidebar
  "Software Developer": "Softwareentwickler",
  "Show Contacts": "Kontakte anzeigen",
  "Experience": "Erfahrung",
  "4 years, IT & Software Development": "4 Jahre, IT & Softwareentwicklung",
  "Email": "E-Mail",
  "Phone": "Telefon",
  "Location": "Standort",
  "Laatzen, Hannover, Germany": "Laatzen, Hannover, Deutschland",

  // navigation
  "About": "Über mich",
  "Resume": "Lebenslauf",
  "Portfolio": "Portfolio",
  "Contact": "Kontakt",

  // about
  "About me": "Über mich",
  "I'm a Full-Stack Developer with 4 years of experience in IT and software development, architecting and delivering end-to-end web, mobile, and desktop solutions. I work across the stack with React.js, Next.js, Node.js, .NET, and cloud infrastructure, owning products from architecture design through to production deployment.":
    "Ich bin Full-Stack-Entwickler mit 4 Jahren Erfahrung in IT und Softwareentwicklung und konzipiere und realisiere Web-, Mobil- und Desktop-Lösungen von Anfang bis Ende. Ich arbeite im gesamten Stack mit React.js, Next.js, Node.js, .NET und Cloud-Infrastruktur und verantworte Produkte vom Architekturentwurf bis zum Produktivbetrieb.",
  "I thrive in collaborative environments and enjoy solving hard problems, whether that's building a responsive web app, a cross-platform mobile app with React Native, or a RESTful API backed by a well-designed database. Currently based in Laatzen, Hannover, Germany.":
    "Ich arbeite gern im Team und löse gern anspruchsvolle Probleme – ob responsive Webanwendung, plattformübergreifende Mobile-App mit React Native oder RESTful-API mit durchdachter Datenbank. Derzeit wohne ich in Laatzen bei Hannover.",
  "What i'm doing": "Was ich mache",
  "Web Development": "Webentwicklung",
  "Building responsive, full-stack web apps with React, Next.js, Node.js, and .NET.":
    "Responsive Full-Stack-Webanwendungen mit React, Next.js, Node.js und .NET.",
  "Mobile Apps": "Mobile Apps",
  "Cross-platform mobile apps with React Native and Expo, for iOS and Android.":
    "Plattformübergreifende Mobile-Apps mit React Native und Expo für iOS und Android.",
  "Desktop Apps": "Desktop-Anwendungen",
  "Desktop applications built with .NET WPF, including CRUD-heavy line-of-business tools.":
    "Desktop-Anwendungen mit .NET WPF, darunter datenintensive Geschäftsanwendungen.",
  "APIs & Backend": "APIs & Backend",
  "RESTful and GraphQL APIs with secure auth, backed by PostgreSQL, MongoDB, or MSSQL.":
    "RESTful- und GraphQL-APIs mit sicherer Authentifizierung, auf Basis von PostgreSQL, MongoDB oder MSSQL.",

  // testimonials (the quote itself stays in the client's original words)
  "Testimonials": "Kundenstimmen",
  "General Manager, Riverbird GmbH · 2 contracts completed on Upwork":
    "Geschäftsführer, Riverbird GmbH · 2 abgeschlossene Aufträge auf Upwork",
  "★★★★★ 5.0 — Aug 2024 – May 2026": "★★★★★ 5.0 — Aug. 2024 – Mai 2026",
  "View on Upwork →": "Auf Upwork ansehen →",

  // resume
  "Download CV": "Lebenslauf herunterladen",
  "Education": "Ausbildung",
  "Bachelor of Science in Computer Science": "Bachelor of Science in Informatik",
  "Beni Suef University, Egypt.": "Universität Beni Suef, Ägypten.",
  "Certificate: AWS Solutions Architect Associate": "Zertifikat: AWS Solutions Architect Associate",
  "Udemy – Course Certificate": "Udemy – Kurszertifikat",
  "Certificate: Node.js Developer": "Zertifikat: Node.js Developer",

  "Upwork – Nile Tech (Freelance) — Jun 2023 — Present": "Upwork – Nile Tech (freiberuflich) — Jun. 2023 — heute",
  "Delivered 5 production applications end-to-end for international clients, spanning web, mobile, desktop, and backend APIs.":
    "Realisierte 5 Produktionsanwendungen für internationale Kunden – Web, Mobil, Desktop und Backend-APIs.",
  "Built cross-platform mobile apps with React Native for iOS and Android, including a security-focused app with two-factor authentication (2FA).":
    "Entwickelte plattformübergreifende Mobile-Apps mit React Native für iOS und Android, darunter eine sicherheitsorientierte App mit Zwei-Faktor-Authentifizierung (2FA).",
  "Developed responsive web applications with React and Next.js, and secure RESTful APIs with .NET, including authentication and database integration.":
    "Entwickelte responsive Webanwendungen mit React und Next.js sowie sichere RESTful-APIs mit .NET inklusive Authentifizierung und Datenbankanbindung.",
  "Created a desktop warehouse management system with .NET WPF.":
    "Erstellte ein Desktop-Lagerverwaltungssystem mit .NET WPF.",
  "Set up Azure DevOps CI/CD pipelines that automate build, test, and deployment, and worked in agile sprints with clear client communication.":
    "Richtete Azure DevOps CI/CD-Pipelines für automatisierten Build, Test und Deployment ein und arbeitete in agilen Sprints mit klarer Kundenkommunikation.",

  "Riverbird GmbH, Germany (Remote, Freelance) — Feb 2024 — Jun 2026":
    "Riverbird GmbH, Deutschland (Remote, freiberuflich) — Feb. 2024 — Jun. 2026",
  "Led end-to-end development of 5 production applications in the Riverbird RMM ecosystem for IT monitoring, inventory management, and patch management across web, desktop, and mobile.":
    "Leitete die End-to-End-Entwicklung von 5 Produktionsanwendungen im Riverbird-RMM-Ökosystem für IT-Monitoring, Inventarisierung und Patch-Management auf Web, Desktop und Mobil.",
  "Built the RiverSuite mobile app with React Native for iOS and Android, owning the full lifecycle from architecture to production release.":
    "Entwickelte die RiverSuite-App mit React Native für iOS und Android und verantwortete den gesamten Lebenszyklus von der Architektur bis zur Veröffentlichung.",
  "Contributed responsive UI components to the Riverbird web app and integrated frontend apps with backend REST APIs, optimizing data flow and performance.":
    "Erstellte responsive UI-Komponenten für die Riverbird-Webanwendung und integrierte Frontends mit REST-APIs; optimierte Datenfluss und Performance.",
  "Set up and maintained Azure DevOps CI/CD pipelines, automating build, test, and deployment and significantly reducing release times.":
    "Richtete Azure DevOps CI/CD-Pipelines ein und betreute sie; automatisierte Build, Test und Deployment und verkürzte die Release-Zeiten erheblich.",
  "Ran performance analyses to identify the most-used services and bottlenecks, and drove data-based optimizations.":
    "Führte Performance-Analysen durch, identifizierte meistgenutzte Services und Engpässe und leitete datenbasierte Optimierungen ab.",
  "Resolved complex bugs and delivered improvements that increased application stability and development efficiency.":
    "Behob komplexe Fehler und lieferte Verbesserungen, die Anwendungsstabilität und Entwicklungseffizienz steigerten.",
  "Worked in an agile Scrum setup with two-week sprints.": "Arbeitete im agilen Scrum-Umfeld mit zweiwöchigen Sprints.",

  "Falcon Secure GmbH, Germany (Remote, Freelance) — Feb 2024 — Jun 2026":
    "Falcon Secure GmbH, Deutschland (Remote, freiberuflich) — Feb. 2024 — Jun. 2026",
  "Built the FalconSecure mobile app with React Native and TypeScript, designing and maintaining features according to business requirements.":
    "Entwickelte die FalconSecure-App mit React Native und TypeScript und setzte Features nach fachlichen Anforderungen um.",
  "Collaborated with cross-functional teams to gather requirements and deliver high-quality solutions.":
    "Erhob Anforderungen gemeinsam mit funktionsübergreifenden Teams und lieferte hochwertige Lösungen.",
  "Debugged, troubleshot, and optimized application performance.": "Analysierte und behob Fehler und optimierte die Anwendungsperformance.",
  "Contributed to code reviews, ensuring adherence to best practices and industry standards.":
    "Wirkte an Code-Reviews mit und sorgte für die Einhaltung von Best Practices und Standards.",

  "Freelance IT Administrator": "Freiberuflicher IT-Administrator",
  "Self-employed, Beni Suef, Egypt (around 40 clients, including PHC) — Mar 2023 — Jun 2024":
    "Selbstständig, Beni Suef, Ägypten (rund 40 Kunden, darunter PHC) — März 2023 — Jun. 2024",
  "Supported around 40 small and medium-sized businesses in Beni Suef as an external IT administrator, including PHC with 120+ users.":
    "Betreute rund 40 kleine und mittelständische Unternehmen in Beni Suef als externer IT-Administrator, darunter PHC mit über 120 Nutzern.",
  "Administered Windows servers, Active Directory and virtualized server environments; managed user accounts, groups, permissions and Group Policy.":
    "Administrierte Windows-Server, Active Directory und virtualisierte Serverumgebungen; verwaltete Benutzerkonten, Gruppen, Berechtigungen und Gruppenrichtlinien.",
  "Set up and monitored data backups and restored data and systems when needed.":
    "Richtete Datensicherungen ein, überwachte sie und stellte bei Bedarf Daten und Systeme wieder her.",
  "Planned and configured networks with switches, VLANs and WLAN, plus site-to-site VPN connections between locations.":
    "Plante und konfigurierte Netzwerke mit Switches, VLANs und WLAN sowie Site-to-Site-VPN-Verbindungen zwischen Standorten.",
  "Secured client systems through firewall configuration and antivirus/endpoint protection.":
    "Sicherte Kundensysteme durch Firewall-Konfiguration und Antivirus-/Endpoint-Schutz ab.",
  "Provided IT support, handled onboarding and offboarding, and maintained IT documentation.":
    "Leistete IT-Support, führte On- und Offboarding durch und pflegte die IT-Dokumentation.",

  "IT Administrator (Full-time)": "IT-Administrator (Vollzeit)",
  "Pharmacists House for Pharmaceutical Trading (PHC), Egypt — Sep 2022 — Feb 2023":
    "Pharmacists House for Pharmaceutical Trading (PHC), Ägypten — Sep. 2022 — Feb. 2023",
  "Maintained IT infrastructure across main and secondary branches for 120+ users.":
    "Betreute die IT-Infrastruktur der Zentrale und der Niederlassungen mit über 120 Nutzern.",
  "Installed and configured Active Directory/DNS, biometric fingerprint systems, CCTV, and FortiGate firewalls.":
    "Installierte und konfigurierte Active Directory/DNS, biometrische Fingerabdrucksysteme, Videoüberwachung (CCTV) und FortiGate-Firewalls.",
  "Designed and implemented a hybrid IT infrastructure integrating AWS (EC2, VPC, VPN) with the on-premises environment for scalability and business continuity.":
    "Konzipierte und implementierte eine hybride IT-Infrastruktur durch Integration von AWS (EC2, VPC, VPN) mit der On-Premises-Umgebung für Skalierbarkeit und Betriebskontinuität.",
  "Managed the SQL Server databases of the PharmaChain ERP system and supported the company's three business applications, including maintenance, updates, and user access.":
    "Verwaltete die SQL-Server-Datenbanken des ERP-Systems PharmaChain und betreute die drei Fachanwendungen des Unternehmens, einschließlich Wartung, Updates und Benutzerzugriffen.",
  "Automated employee workflow processes, reducing manual effort and improving operational efficiency.":
    "Automatisierte Mitarbeiter-Workflows, reduzierte manuellen Aufwand und steigerte die Betriebseffizienz.",
  "Supported users by phone and on-site, troubleshooting hardware, software, and network issues.":
    "Unterstützte Anwender telefonisch und vor Ort bei Hardware-, Software- und Netzwerkproblemen.",

  "Data Entry Clerk": "Bürokraft (Datenerfassung)",
  "TITO Business Center, Egypt — Oct 2016 — May 2021": "TITO Business Center, Ägypten — Okt. 2016 — Mai 2021",
  "Helped customers with online applications and forms, plus printing, scanning, and copying.":
    "Unterstützte Kunden bei Online-Anträgen und Formularen sowie beim Drucken, Scannen und Kopieren.",
  "Repaired and maintained hardware and software for the center's computers and customers' devices.":
    "Reparierte und wartete Hard- und Software der Center-Computer und Kundengeräte.",
  "Sold computers and accessories.": "Verkaufte Computer und Zubehör.",

  "My skills": "Meine Kenntnisse",
  "Databases": "Datenbanken",

  // portfolio
  "All": "Alle",
  "Social Networking": "Soziale Netzwerke",
  "Select industry": "Branche wählen",
  "RiverSuite RMM — remote monitoring & management platform for MSPs and IT service providers. Automated asset inventory, live monitoring, patch management, and multi-tenant client separation in one dashboard.":
    "RiverSuite RMM – Plattform für Fernüberwachung und -verwaltung für MSPs und IT-Dienstleister. Automatische Inventarisierung, Live-Monitoring, Patch-Management und mandantenfähige Kundentrennung in einem Dashboard.",
  "Desktop client for RiverSuite RMM. Continuously documents IT assets across a client's infrastructure with minimal setup, replacing manual documentation with automated, always-current inventory records.":
    "Desktop-Client für RiverSuite RMM. Dokumentiert IT-Assets in der Infrastruktur eines Kunden fortlaufend und mit minimalem Einrichtungsaufwand – automatische, stets aktuelle Inventardaten statt manueller Dokumentation.",
  "On-the-go companion for RiverSuite RMM. Lets IT technicians check client environments, monitoring alerts, and inventory status from a phone, secured with two-factor authentication.":
    "Mobile Begleit-App für RiverSuite RMM. IT-Techniker prüfen Kundenumgebungen, Monitoring-Warnungen und Inventarstatus vom Smartphone aus, abgesichert mit Zwei-Faktor-Authentifizierung.",
  "Mobile app for the Falcon Secure IT security platform. Automated penetration tests, CVE scanning, and Active Directory security checks for MSPs, with MFA rollout built in — view and act on vulnerability findings from anywhere.":
    "Mobile App für die IT-Sicherheitsplattform Falcon Secure. Automatisierte Penetrationstests, CVE-Scans und Active-Directory-Sicherheitsprüfungen für MSPs mit integriertem MFA-Rollout – Schwachstellen von überall einsehen und bearbeiten.",
  "Backend REST API powering the RiverSuite RMM web, desktop, and mobile clients — handling inventory data, monitoring events, and multi-tenant client separation.":
    "Backend-REST-API für die Web-, Desktop- und Mobile-Clients von RiverSuite RMM – verarbeitet Inventardaten, Monitoring-Ereignisse und mandantenfähige Kundentrennung.",
  "Desktop — Electron, React, Prisma, bilingual AR/EN": "Desktop — Electron, React, Prisma, zweisprachig AR/EN",
  "Offline-first point-of-sale system for a computer accessories retail store. Sales & printable receipts, inventory and supplier tracking, customer history, sales dashboards, one-click backup/restore, and a fully bilingual Arabic/English RTL interface — all running locally with no server required.":
    "Offline-fähiges Kassensystem für ein Geschäft für Computerzubehör. Verkauf mit druckbaren Belegen, Lager- und Lieferantenverwaltung, Kundenhistorie, Umsatz-Dashboards, Backup/Wiederherstellung per Klick und eine vollständig zweisprachige Arabisch/Englisch-Oberfläche (RTL) – alles lokal, ohne Server.",
  "Web — Next.js warehouse management": "Web — Next.js Lagerverwaltung",
  "Multi-warehouse management system with zone/location tracking, inbound and outbound order flows, barcode-scan picking waves, cycle counts, low-stock reorder alerts, role-based permissions, and a full audit log.":
    "Lagerverwaltungssystem für mehrere Standorte mit Zonen- und Lagerplatzverwaltung, Wareneingang und -ausgang, Kommissionierung per Barcode-Scan, permanenter Inventur, Nachbestellwarnungen, rollenbasierten Berechtigungen und vollständigem Audit-Log.",
  "Desktop/Mobile — offline clinic management suite": "Desktop/Mobil — offline Praxisverwaltung",
  "Offline, LAN-based facility management system for a physical therapy clinic. Real-time patient lobby and room assignment over WebSockets, a drag-and-drop room map, diagnosis and exercise plans, and role-based access for doctors, receptionists, and assistants — no internet connection needed.":
    "Offline, LAN-basiertes Verwaltungssystem für eine Physiotherapiepraxis. Echtzeit-Wartezimmer und Raumzuweisung über WebSockets, Raumplan per Drag-and-drop, Diagnose- und Übungspläne sowie rollenbasierter Zugriff für Ärzte, Empfang und Assistenz – ganz ohne Internetverbindung.",
  "Mobile — Expo Router, in progress": "Mobil — Expo Router, in Entwicklung",
  "Management app for tutoring/education centers. Tracks student groups, class schedules, parent contacts, session reservations, payments, and test results in one place.":
    "Verwaltungs-App für Nachhilfe- und Bildungszentren. Schülergruppen, Stundenpläne, Elternkontakte, Terminbuchungen, Zahlungen und Testergebnisse an einem Ort.",
  "Mobile — React Native, Convex, in progress": "Mobil — React Native, Convex, in Entwicklung",
  "Real-time connection app for couples. Partner pairing, a \"pulse\" heartbeat tap with push notifications, daily deep/spicy question cards, voice/photo love letters, and real-time co-op games like shared drawing and Connect Four.":
    "Echtzeit-App für Paare. Partner-Kopplung, ein „Pulse“-Herzschlag-Tap mit Push-Benachrichtigungen, tägliche Fragekarten, Liebesbriefe als Sprach- oder Fotonachricht und gemeinsame Echtzeitspiele wie Zeichnen und Vier gewinnt.",
  "Mobile — React Native, 2FA": "Mobil — React Native, 2FA",
  "Mobile — React Native": "Mobil — React Native",

  // contact
  "Contact Form": "Kontaktformular",
  "Purpose of contact": "Anliegen",
  "Asking for a demo": "Demo anfragen",
  "Consulting": "Beratung",
  "Hire for a project": "Für ein Projekt beauftragen",
  "Choose application": "Anwendung wählen",
  "Send Message": "Nachricht senden",
  "Full name": "Vollständiger Name",
  "Email address": "E-Mail-Adresse",
  "Your Message": "Ihre Nachricht",
  "Download CV in English": "Lebenslauf auf Englisch herunterladen",
  "XING profile": "XING-Profil",
  "Upwork profile": "Upwork-Profil",
  "web development icon": "Symbol Webentwicklung",
  "mobile app icon": "Symbol Mobile App",
  "desktop icon": "Symbol Desktop",
  "API icon": "Symbol API",

  // document
  "Joseph Erian - Software Developer": "Joseph Erian - Softwareentwickler",
};

(function () {
  const STORAGE_KEY = "lang";
  const ATTRS = ["placeholder", "aria-label", "title", "alt"];
  const norm = (s) => s.replace(/\s+/g, " ").trim();

  // Remember the English original of every text node and attribute we touch.
  const originalText = new Map();
  const originalAttr = new Map();

  function textNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  }

  function translate(lang) {
    textNodes().forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const en = originalText.get(node);
      const de = DE[norm(en)];
      // keep the surrounding whitespace so inline spacing doesn't change
      const [, lead, trail] = en.match(/^(\s*)[\s\S]*?(\s*)$/);
      node.nodeValue = lang === "de" && de ? lead + de + trail : en;
    });

    document.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(",")).forEach((el) => {
      ATTRS.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        if (!originalAttr.has(el)) originalAttr.set(el, {});
        const saved = originalAttr.get(el);
        if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
        const de = DE[norm(saved[attr])];
        el.setAttribute(attr, lang === "de" && de ? de : saved[attr]);
      });
    });

    if (!translate.title) translate.title = document.title;
    document.title = lang === "de" ? DE[translate.title] || translate.title : translate.title;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  }

  function savedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setLang(lang) {
    translate(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage unavailable: the choice just isn't remembered */
    }
  }

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  const browserIsGerman = (navigator.languages || [navigator.language || ""]).some((l) => /^de\b/i.test(l));
  const initial = savedLang() || (browserIsGerman ? "de" : "en");
  if (initial === "de") translate("de");

  window.portfolioI18n = { setLang, DE };
})();
