export type Locale = 'en' | 'es' | 'pt' | 'fr' | 'it';

export const site = {
  name: 'NOVAHODOS',
  product: 'AMI',
  productFullName: 'AMI - Adaptive Metabolic Intelligence',
  url: 'https://novahodos.com',
  description: 'AMI applies precision engineering to support healthier metabolic habits and clearer metabolic trajectory.',
  primaryCta: 'Start 14-day free trial',
  secondaryCta: 'How AMI Works',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.novahodos.ami',
  androidApkUrl: '/downloads/AMI-Android-Direct-1.0.8.apk',
  checkoutUrl: '/pricing',
  billingApiUrl: 'https://amiengine-production.up.railway.app',
  webAppUrl: 'https://ami-app-tan.vercel.app',
  plans: {
    navigation: {
      id: 'navigation',
      priceMonthly: 19,
      planKey: 'navigation_19_monthly',
    },
    calibration: {
      id: 'calibration',
      priceMonthly: 49,
      planKey: 'calibration_49_monthly',
    },
  },
  email: {
    founder: 'noelmontealegre@novahodos.com',
    hello: 'hello@novahodos.com',
    help: 'help@novahodos.com',
    support: 'support@novahodos.com',
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
  },
  pt: {
    nav: {
      ami: 'AMI', how: 'Como funciona', science: 'Ciência', experience: 'Experiência', pricing: 'Preços', cta: 'Iniciar 14 dias grátis'
    },
    footer: {
      note: 'NOVAHODOS constrói sistemas adaptativos. AMI aplica engenharia de precisão para apoiar hábitos metabólicos mais saudáveis e uma trajetória metabólica mais clara.',
      legal: 'Legal', privacy: 'Privacidade', terms: 'Termos', disclaimer: 'Aviso de saúde', consent: 'Consentimento de dados', contact: 'Contacto', faq: 'FAQ', pricing: 'Preços'
    }
  },
  fr: {
    nav: {
      ami: 'AMI', how: 'Comment ça marche', science: 'Science', experience: 'Expérience', pricing: 'Tarifs', cta: 'Essai gratuit 14 jours'
    },
    footer: {
      note: 'NOVAHODOS construit des systèmes adaptatifs. AMI applique une ingénierie de précision pour soutenir des habitudes métaboliques plus saines et une trajectoire plus claire.',
      legal: 'Légal', privacy: 'Confidentialité', terms: 'Conditions', disclaimer: 'Avertissement santé', consent: 'Consentement données', contact: 'Contact', faq: 'FAQ', pricing: 'Tarifs'
    }
  },
  it: {
    nav: {
      ami: 'AMI', how: 'Come funziona', science: 'Scienza', experience: 'Esperienza', pricing: 'Prezzi', cta: 'Prova gratuita 14 giorni'
    },
    footer: {
      note: 'NOVAHODOS costruisce sistemi adattivi. AMI applica ingegneria di precisione per supportare abitudini metaboliche più sane e una traiettoria più chiara.',
      legal: 'Legale', privacy: 'Privacy', terms: 'Termini', disclaimer: 'Avviso salute', consent: 'Consenso dati', contact: 'Contatto', faq: 'FAQ', pricing: 'Prezzi'
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
  { key: 'disclaimer', href: '/legal#health-disclaimer' },
  { key: 'consent', href: '/legal#data-consent' },
  { key: 'pricing', href: '/pricing' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' }
];
