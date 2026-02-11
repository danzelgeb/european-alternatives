import type { Reservation } from '../types';

export const reservationsById: Record<string, Reservation[]> = {
  'black-forest-labs': [
    {
      id: 'flux-dev-non-commercial-restriction',
      text: 'FLUX.1 [dev] weights are non-commercial; commercial use requires separate licensing.',
      textDe: 'FLUX.1-[dev]-Gewichte sind nicht kommerziell nutzbar; fuer kommerzielle Nutzung ist eine separate Lizenz noetig.',
      severity: 'major',
      sourceUrl: 'https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/LICENSE.md',
    },
  ],
  bitwarden: [
    {
      id: 'us-jurisdiction',
      text: 'Terms include California governing law and US legal venue.',
      textDe: 'Die Nutzungsbedingungen nennen kalifornisches Recht und einen US-Gerichtsstand.',
      severity: 'moderate',
      sourceUrl: 'https://bitwarden.com/help/terms/',
    },
    {
      id: 'sdk-license-incident-2024',
      text: 'Desktop licensing controversy in October 2024; clients were later adjusted after community pushback.',
      textDe: 'Lizenzkontroverse beim Desktop-Client im Oktober 2024; spaeter wurden die Clients nach Community-Kritik angepasst.',
      severity: 'minor',
      date: '2024-10-01',
      sourceUrl: 'https://github.com/bitwarden/clients/issues/11611',
    },
  ],
  deepl: [
    {
      id: 'free-tier-training-usage',
      text: 'Free-tier input may be used to improve models, while Pro/API customer content is excluded from training.',
      textDe: 'Eingaben aus dem Free-Tier koennen zur Modellverbesserung genutzt werden, waehrend Pro/API-Kundendaten vom Training ausgenommen sind.',
      severity: 'moderate',
      sourceUrl: 'https://www.deepl.com/en/pro-data-security/',
    },
  ],
  filen: [
    {
      id: 'no-independent-security-audit-yet',
      text: 'No published independent security audit has been completed yet.',
      textDe: 'Ein unabhaengiger Sicherheits-Audit wurde noch nicht abgeschlossen.',
      severity: 'moderate',
      sourceUrl: 'https://github.com/FilenCloudDienste/filen-roadmap/issues/104',
    },
  ],
  mastodon: [
    {
      id: 'dm-not-end-to-end-encrypted',
      text: 'Private mentions are not end-to-end encrypted and can be accessed by involved server admins.',
      textDe: 'Private Erwaehnungen sind nicht Ende-zu-Ende-verschluesselt und koennen von beteiligten Server-Admins eingesehen werden.',
      severity: 'moderate',
      sourceUrl: 'https://docs.joinmastodon.org/user/posting/#private',
    },
  ],
  mistral: [
    {
      id: 'microsoft-investment-2024',
      text: 'Microsoft invested in Mistral in 2024, raising dependency concerns for some users.',
      textDe: 'Microsoft investierte 2024 in Mistral, was bei einigen Nutzern Abhaengigkeitsbedenken ausloeste.',
      severity: 'moderate',
      date: '2024-02-01',
      sourceUrl: 'https://www.reuters.com/world/europe/french-ai-startup-mistral-signs-distribution-deal-with-microsoft-2024-02-26/',
    },
    {
      id: 'hybrid-model-licensing',
      text: 'Only selected models are open-weight; flagship models remain proprietary API offerings.',
      textDe: 'Nur ein Teil der Modelle ist als Open Weight verfuegbar; leistungsstaerkere Flaggschiff-Modelle bleiben proprietaere API-Angebote.',
      severity: 'moderate',
      sourceUrl: 'https://docs.mistral.ai/getting-started/models/',
    },
  ],
  nextcloud: [
    {
      id: 'e2ee-folder-scope',
      text: 'End-to-end encryption is folder-scoped and opt-in; default server-side encryption remains admin-accessible.',
      textDe: 'Ende-zu-Ende-Verschluesselung ist ordnerbasiert und optional; die Standard-Serververschluesselung bleibt fuer Admins zugaenglich.',
      severity: 'moderate',
      sourceUrl: 'https://nextcloud.com/endtoend/',
    },
  ],
  nordvpn: [
    {
      id: 'dual-jurisdiction-structure',
      text: 'Legal jurisdiction and operational headquarters are split (Panama legal structure, Vilnius operations).',
      textDe: 'Rechtlicher Sitz und operativer Hauptsitz sind getrennt (Panama als Rechtsstruktur, Vilnius als Betriebszentrum).',
      severity: 'moderate',
      sourceUrl: 'https://nordsecurity.com/press-area/our-story',
    },
    {
      id: 'delayed-breach-disclosure-2018',
      text: 'A 2018 server incident was disclosed late in 2019, damaging trust despite later remediation.',
      textDe: 'Beim Servervorfall 2018 erfolgten Erkennung und Offenlegung verzoegert, was Vertrauen kostete.',
      severity: 'major',
      date: '2018-03-01',
      sourceUrl: 'https://www.bbc.com/news/technology-50150981',
    },
  ],
  'proton-drive': [
    {
      id: 'backend-not-fully-open-source',
      text: 'Client applications are open source, but backend server code remains largely proprietary.',
      textDe: 'Client-Anwendungen sind quelloffen, der Backend-Servercode bleibt jedoch weitgehend proprietaer.',
      severity: 'minor',
      sourceUrl: 'https://proton.me/blog/open-source',
    },
  ],
  'proton-mail': [
    {
      id: 'ip-logging-court-order-2021',
      text: 'In 2021, Proton logged IP metadata for a user after a Swiss court order.',
      textDe: '2021 protokollierte Proton IP-Metadaten eines Nutzers nach einer Schweizer Gerichtsanordnung.',
      severity: 'moderate',
      date: '2021-09-01',
      sourceUrl: 'https://proton.me/blog/climate-activist-arrest',
    },
    {
      id: 'backend-not-fully-open-source',
      text: 'Client applications are open source, but backend server code remains largely proprietary.',
      textDe: 'Client-Anwendungen sind quelloffen, der Backend-Servercode bleibt jedoch weitgehend proprietaer.',
      severity: 'minor',
      sourceUrl: 'https://proton.me/blog/open-source',
    },
  ],
  'proton-pass': [
    {
      id: 'backend-not-fully-open-source',
      text: 'Client applications are open source, but backend server code remains largely proprietary.',
      textDe: 'Client-Anwendungen sind quelloffen, der Backend-Servercode bleibt jedoch weitgehend proprietaer.',
      severity: 'minor',
      sourceUrl: 'https://proton.me/blog/open-source',
    },
  ],
  'proton-vpn': [
    {
      id: 'backend-not-fully-open-source',
      text: 'Client applications are open source, but backend server code remains largely proprietary.',
      textDe: 'Client-Anwendungen sind quelloffen, der Backend-Servercode bleibt jedoch weitgehend proprietaer.',
      severity: 'minor',
      sourceUrl: 'https://proton.me/blog/open-source',
    },
  ],
  shopware: [
    {
      id: 'contributor-license-agreement',
      text: 'Contributors sign a CLA granting shopware AG broad rights over contributed code.',
      textDe: 'Beitraeger unterzeichnen eine CLA, die shopware AG weitreichende Rechte am beigetragenen Code einraeumt.',
      severity: 'minor',
      sourceUrl: 'https://developer.shopware.com/docs/resources/references/cla.html',
    },
  ],
  'stability-ai': [
    {
      id: 'active-copyright-litigation',
      text: 'Major copyright and training-data lawsuits are still unresolved.',
      textDe: 'Aktive Urheberrechtsklagen sind in mehreren Jurisdiktionen noch nicht abgeschlossen.',
      severity: 'major',
      sourceUrl: 'https://apnews.com/article/stability-ai-lawsuit-midjourney-deviantart-artists-6217bcd9f7f6f095ac3c7bcd9deabfce',
    },
    {
      id: 'community-license-not-osi',
      text: 'Community license terms include usage restrictions, so model licensing is not fully open-source equivalent.',
      textDe: 'Die Community-Lizenz enthaelt Nutzungseinschraenkungen und ist damit nicht vollstaendig mit Open-Source-Lizenzen gleichzusetzen.',
      severity: 'moderate',
      sourceUrl: 'https://stability.ai/community-license-agreement',
    },
    {
      id: 'governance-instability-history',
      text: 'Leadership turbulence, including the CEO transition in March 2024, increased governance risk.',
      textDe: 'Historische Turbulenzen bei Fuehrung und Governance haben das Vertrauen belastet.',
      severity: 'moderate',
      date: '2024-03-22',
      sourceUrl: 'https://www.reuters.com/world/uk/ai-start-up-stability-ai-ceo-mostaque-steps-down-information-reports-2024-03-22/',
    },
  ],
  startpage: [
    {
      id: 'system1-majority-stake',
      text: 'A majority stake was acquired by US ad-tech company System1 in 2019.',
      textDe: 'Ein Mehrheitsanteil wurde 2019 vom US-Ad-Tech-Unternehmen System1 uebernommen.',
      severity: 'moderate',
      date: '2019-10-01',
      sourceUrl: 'https://support.startpage.com/hc/en-us/articles/4455577632788-How-has-Startpage-responded-to-the-privacy-community-s-concerns-about-System1',
    },
  ],
  threema: [
    {
      id: 'self-compiled-client-restrictions',
      text: 'Self-compiled client variants are not automatically eligible for standard service access and may require allowlisting.',
      textDe: 'Selbst kompilierte Client-Varianten sind nicht automatisch fuer den regulaeren Dienstzugang freigeschaltet und koennen eine Allowlist erfordern.',
      severity: 'moderate',
      sourceUrl: 'https://threema.ch/en/open-source',
    },
  ],
  tuta: [
    {
      id: 'backend-not-open-source',
      text: 'Tuta clients are open source, but backend server components are not publicly auditable.',
      textDe: 'Tuta-Clients sind quelloffen, Backend-Serverkomponenten jedoch nicht oeffentlich pruefbar.',
      severity: 'moderate',
      sourceUrl: 'https://github.com/tutao/tutanota',
    },
  ],
};
