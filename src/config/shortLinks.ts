// Short link mappings for QR code tracking
// Each code maps to a destination and will be tracked as qr_code_scan event

export type Destination = 'smile-en' | 'smile-de' | 'homepage' | 'smart';

export interface ShortLinkConfig {
  code: string;
  destination: Destination;
}

// Destination paths
export const destinationPaths: Record<Destination, string> = {
  'smile-en': '/s/en',
  'smile-de': '/s/de',
  'homepage': '/',
  'smart': '/smart',
};

// All short link codes
export const shortLinks: ShortLinkConfig[] = [
  // === SMILE ENGLISH (10) ===
  { code: 'ck', destination: 'smile-en' },
  { code: 'ed', destination: 'smile-en' },
  { code: 'jm', destination: 'smile-en' },
  { code: 'pu', destination: 'smile-en' },
  { code: 'rz', destination: 'smile-en' },
  { code: 'tw', destination: 'smile-en' },
  { code: 'vn', destination: 'smile-en' },
  { code: 'xb', destination: 'smile-en' },
  { code: 'yf', destination: 'smile-en' },
  { code: 'zq', destination: 'smile-en' },
  
  // === SMILE GERMAN (10) ===
  { code: 'af', destination: 'smile-de' },
  { code: 'gh', destination: 'smile-de' },
  { code: 'bf', destination: 'smile-de' },
  { code: 'dh', destination: 'smile-de' },
  { code: 'ek', destination: 'smile-de' },
  { code: 'gv', destination: 'smile-de' },
  { code: 'hs', destination: 'smile-de' },
  { code: 'ix', destination: 'smile-de' },
  { code: 'jy', destination: 'smile-de' },
  { code: 'kw', destination: 'smile-de' },
  
  // === HOMEPAGE (10) ===
  { code: 'lq', destination: 'homepage' },
  { code: 'mp', destination: 'homepage' },
  { code: 'nz', destination: 'homepage' },
  { code: 'oc', destination: 'homepage' },
  { code: 'pd', destination: 'homepage' },
  { code: 'qe', destination: 'homepage' },
  { code: 'rf', destination: 'homepage' },
  { code: 'sg', destination: 'homepage' },
  { code: 'ti', destination: 'homepage' },
  { code: 'ua', destination: 'homepage' },
  
  // === SMART CAMPAIGN (riddle solvers) ===
  { code: 'code', destination: 'smart' },
  { code: 'true', destination: 'smart' },
  { code: 'win', destination: 'smart' },
  
  // === LEGACY CODES (keep existing /smile/de and /smile/en working) ===
  // These are handled separately in QRCodeRedirect but included here for reference
];

// Quick lookup map: code -> config
export const shortLinkMap = new Map<string, ShortLinkConfig>(
  shortLinks.map(link => [link.code, link])
);

// Get all codes for a specific destination
export const getCodesForDestination = (dest: Destination): string[] => 
  shortLinks.filter(l => l.destination === dest).map(l => l.code);
