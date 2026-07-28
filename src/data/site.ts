export type Locale = 'en' | 'es';

export const site = {
  name: 'NOVAHODOS',
  product: 'AMI',
  productFullName: 'AMI - Adaptive Metabolic Intelligence',
  url: 'https://novahodos.com',
  description: 'AMI applies precision engineering to support healthier metabolic habits and clearer metabolic trajectory.',
  primaryCta: 'Start 14-day free trial',
  secondaryCta: 'How AMI Works',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.novahodos.ami',
  email: {
    founder: 'noelmontealegre@novahodos.com',
    hello: 'hello@novahodos.com',
    help: 'help@novahodos.com',
    contact: 'contact@novahodos.com',
    privacy: 'privacy@novahodos.com',
    legal: 'legal@novahodos.com',
    security: 'security@novahodos.com'
  }
};

export const copy = {
  en: {
    nav: {
      ami: 'AMI', how: 'How It Works', science: 'Science', experience: 'Experience', pricing: 'Pricing', cta: 'Start 14-day free trial'
    },
    footer: {
      note: 'NOVAHODOS builds adaptive systems. AMI applies precision engineering to support healthier metabolic habits and clearer metabolic trajectory.',
      legal: 'Legal', privacy: 'Privacy', terms: 'Terms', disclaimer: 'Health Disclaimer', consent: 'Data Consent', contact: 'Contact', faq: 'FAQ', pricing: 'Pricing'
    }
  },
  es: {
    nav: {
      ami: 'AMI', how: 'Cómo funciona', science: 'Ciencia', experience: 'Experiencia', pricing: 'Precios', cta: 'Iniciar 14 días gratis'
    },
    footer: {
      note: 'NOVAHODOS construye sistemas adaptativos. AMI aplica ingeniería de precisión para apoyar hábitos metabólicos más saludables y una trayectoria metabólica más clara.',
      legal: 'Legal', privacy: 'Privacidad', terms: 'Términos', disclaimer: 'Aviso de salud', consent: 'Consentimiento de datos', contact: 'Contacto', faq: 'FAQ', pricing: 'Precios'
    }
  }
} satisfies Record<Locale, { nav: Record<string, string>; footer: Record<string, string> }>;

export const navItems: Array<{ key: keyof typeof copy.en.nav; href: string }> = [
  { key: 'ami', href: '/ami' },
  { key: 'how', href: '/ami/how-it-works' },
  { key: 'science', href: '/ami/science' },
  { key: 'experience', href: '/ami/experience' },
  { key: 'pricing', href: '/pricing' }
];

export const footerItems: Array<{ key: keyof typeof copy.en.footer; href: string }> = [
  { key: 'legal', href: '/legal' },
  { key: 'privacy', href: '/privacy' },
  { key: 'terms', href: '/legal#terms' },
  { key: 'disclaimer', href: '/legal#use-boundaries' },
  { key: 'consent', href: '/legal#data-consent' },
  { key: 'pricing', href: '/pricing' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' }
];
