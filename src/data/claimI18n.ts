export type ClaimLocale = 'es' | 'en' | 'pt' | 'fr' | 'it';

export const claimLocales: ClaimLocale[] = ['es', 'en', 'pt', 'fr', 'it'];

export type ClaimCopy = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lede: string;
  emailLabel: string;
  planLabel: string;
  passwordLabel: string;
  confirmLabel: string;
  submit: string;
  busy: string;
  successEyebrow: string;
  successHeading: string;
  successBody: string;
  downloadApk: string;
  openWeb: string;
  installNote: string;
  missingSession: string;
  verifyFail: string;
  mismatch: string;
  activateFail: string;
  emailExists: string;
  playConflict: string;
  loginLockout: string;
  planNav: string;
  planCal: string;
};

export const claimCopy: Record<ClaimLocale, ClaimCopy> = {
  es: {
    title: 'Activa y descarga AMI',
    description: 'Activa tu acceso después del checkout y descarga AMI.',
    eyebrow: 'Pago confirmado · AMI',
    heading: 'Activa y descarga AMI.',
    lede: 'Crea tu contraseña con el correo usado en Stripe. Tu plan quedará listo en web y Android.',
    emailLabel: 'Correo del pago',
    planLabel: 'Plan',
    passwordLabel: 'Crea tu contraseña',
    confirmLabel: 'Confirma tu contraseña',
    submit: 'Activar acceso',
    busy: 'Activando…',
    successEyebrow: 'Acceso activado',
    successHeading: 'AMI está lista.',
    successBody: 'Descarga el APK oficial de NOVAHODOS e inicia sesión con el mismo correo y contraseña.',
    downloadApk: 'Descargar AMI para Android (APK)',
    openWeb: 'Abrir AMI web',
    installNote: 'Android puede pedir permiso para instalar aplicaciones desde el navegador. El APK está firmado por NOVAHODOS LLC.',
    missingSession: 'Falta la sesión de Stripe. Vuelve desde el pago.',
    verifyFail: 'No se pudo verificar el pago.',
    mismatch: 'Las contraseñas no coinciden.',
    activateFail: 'No se pudo activar AMI.',
    emailExists: 'Este correo ya tiene una cuenta AMI. Escribe la contraseña de esa cuenta para activar tu plan.',
    playConflict: 'Esta cuenta ya tiene una suscripción activa en Google Play. No se puede activar otro plan con Stripe.',
    loginLockout: 'Demasiados intentos con contraseña incorrecta. Espera unos minutos e inténtalo de nuevo.',
    planNav: 'Navegación ($19)',
    planCal: 'Calibración de Precisión ($49)',
  },
  en: {
    title: 'Activate and download AMI',
    description: 'Activate your access after checkout and download AMI.',
    eyebrow: 'Payment confirmed · AMI',
    heading: 'Activate and download AMI.',
    lede: 'Create your password with the email used in Stripe. Your plan will be ready on web and Android.',
    emailLabel: 'Payment email',
    planLabel: 'Plan',
    passwordLabel: 'Create your password',
    confirmLabel: 'Confirm your password',
    submit: 'Activate access',
    busy: 'Activating…',
    successEyebrow: 'Access activated',
    successHeading: 'AMI is ready.',
    successBody: 'Download the official NOVAHODOS APK and sign in with the same email and password.',
    downloadApk: 'Download AMI for Android (APK)',
    openWeb: 'Open AMI web',
    installNote: 'Android may ask for permission to install apps from the browser. The APK is signed by NOVAHODOS LLC.',
    missingSession: 'Missing Stripe session. Return from checkout.',
    verifyFail: 'Could not verify payment.',
    mismatch: 'Passwords do not match.',
    activateFail: 'Could not activate AMI.',
    emailExists: 'This email already has an AMI account. Enter that account\u2019s password to activate your plan.',
    playConflict: 'This account already has an active Google Play subscription. Another Stripe plan cannot be activated.',
    loginLockout: 'Too many incorrect password attempts. Wait a few minutes and try again.',
    planNav: 'Navigation ($19)',
    planCal: 'Precision Calibration ($49)',
  },
  pt: {
    title: 'Ative e baixe o AMI',
    description: 'Ative seu acesso após o checkout e baixe o AMI.',
    eyebrow: 'Pagamento confirmado · AMI',
    heading: 'Ative e baixe o AMI.',
    lede: 'Crie sua senha com o e-mail usado no Stripe. Seu plano ficará pronto na web e no Android.',
    emailLabel: 'E-mail do pagamento',
    planLabel: 'Plano',
    passwordLabel: 'Crie sua senha',
    confirmLabel: 'Confirme sua senha',
    submit: 'Ativar acesso',
    busy: 'Ativando…',
    successEyebrow: 'Acesso ativado',
    successHeading: 'AMI está pronta.',
    successBody: 'Baixe o APK oficial da NOVAHODOS e entre com o mesmo e-mail e senha.',
    downloadApk: 'Baixar AMI para Android (APK)',
    openWeb: 'Abrir AMI web',
    installNote: 'O Android pode pedir permissão para instalar apps pelo navegador. O APK é assinado por NOVAHODOS LLC.',
    missingSession: 'Falta a sessão do Stripe. Volte do pagamento.',
    verifyFail: 'Não foi possível verificar o pagamento.',
    mismatch: 'As senhas não coincidem.',
    activateFail: 'Não foi possível ativar o AMI.',
    emailExists: 'Este e-mail já tem uma conta AMI. Digite a senha dessa conta para ativar seu plano.',
    playConflict: 'Esta conta já tem uma assinatura ativa no Google Play. Não é possível ativar outro plano com Stripe.',
    loginLockout: 'Muitas tentativas com senha incorreta. Espere alguns minutos e tente de novo.',
    planNav: 'Navegação ($19)',
    planCal: 'Calibração de Precisão ($49)',
  },
  fr: {
    title: 'Activez et téléchargez AMI',
    description: 'Activez votre accès après le paiement et téléchargez AMI.',
    eyebrow: 'Paiement confirmé · AMI',
    heading: 'Activez et téléchargez AMI.',
    lede: 'Créez votre mot de passe avec l’e-mail utilisé sur Stripe. Votre offre sera prête sur le web et Android.',
    emailLabel: 'E-mail du paiement',
    planLabel: 'Offre',
    passwordLabel: 'Créez votre mot de passe',
    confirmLabel: 'Confirmez votre mot de passe',
    submit: 'Activer l’accès',
    busy: 'Activation…',
    successEyebrow: 'Accès activé',
    successHeading: 'AMI est prête.',
    successBody: 'Téléchargez l’APK officiel NOVAHODOS et connectez-vous avec le même e-mail et mot de passe.',
    downloadApk: 'Télécharger AMI pour Android (APK)',
    openWeb: 'Ouvrir AMI web',
    installNote: 'Android peut demander l’autorisation d’installer des applications depuis le navigateur. L’APK est signé par NOVAHODOS LLC.',
    missingSession: 'Session Stripe manquante. Revenez depuis le paiement.',
    verifyFail: 'Impossible de vérifier le paiement.',
    mismatch: 'Les mots de passe ne correspondent pas.',
    activateFail: 'Impossible d’activer AMI.',
    emailExists: 'Cet e-mail a déjà un compte AMI. Saisissez le mot de passe de ce compte pour activer votre offre.',
    playConflict: 'Ce compte a déjà un abonnement Google Play actif. Un autre forfait Stripe ne peut pas être activé.',
    loginLockout: 'Trop de tentatives avec un mauvais mot de passe. Attendez quelques minutes et réessayez.',
    planNav: 'Navigation ($19)',
    planCal: 'Calibration de précision ($49)',
  },
  it: {
    title: 'Attiva e scarica AMI',
    description: 'Attiva l’accesso dopo il checkout e scarica AMI.',
    eyebrow: 'Pagamento confermato · AMI',
    heading: 'Attiva e scarica AMI.',
    lede: 'Crea la password con l’email usata su Stripe. Il piano sarà pronto su web e Android.',
    emailLabel: 'Email del pagamento',
    planLabel: 'Piano',
    passwordLabel: 'Crea la password',
    confirmLabel: 'Conferma la password',
    submit: 'Attiva accesso',
    busy: 'Attivazione…',
    successEyebrow: 'Accesso attivato',
    successHeading: 'AMI è pronta.',
    successBody: 'Scarica l’APK ufficiale NOVAHODOS e accedi con la stessa email e password.',
    downloadApk: 'Scarica AMI per Android (APK)',
    openWeb: 'Apri AMI web',
    installNote: 'Android può chiedere il permesso di installare app dal browser. L’APK è firmato da NOVAHODOS LLC.',
    missingSession: 'Manca la sessione Stripe. Torna dal pagamento.',
    verifyFail: 'Impossibile verificare il pagamento.',
    mismatch: 'Le password non coincidono.',
    activateFail: 'Impossibile attivare AMI.',
    emailExists: 'Questa email ha già un account AMI. Inserisci la password di quell\u2019account per attivare il piano.',
    playConflict: 'Questo account ha già un abbonamento attivo su Google Play. Non si può attivare un altro piano con Stripe.',
    loginLockout: 'Troppi tentativi con password errata. Attendi qualche minuto e riprova.',
    planNav: 'Navigazione ($19)',
    planCal: 'Calibrazione di precisione ($49)',
  },
};

export function resolveClaimLocale(raw: string | null | undefined): ClaimLocale {
  const key = String(raw || '').slice(0, 2).toLowerCase();
  if ((claimLocales as string[]).includes(key)) return key as ClaimLocale;
  return 'es';
}

/** Prefer explicit ?lang=, then Accept-Language, then English (ES only when explicit/browser says so). */
export function resolveClaimLocaleFromRequest(
  preferred: string | null | undefined,
  acceptLanguage: string | null | undefined,
): ClaimLocale {
  const explicit = String(preferred || '').trim();
  if (explicit) return resolveClaimLocale(explicit);

  const header = String(acceptLanguage || '');
  for (const part of header.split(',')) {
    const tag = part.trim().split(';')[0]?.trim().toLowerCase() || '';
    const primary = tag.slice(0, 2);
    if ((claimLocales as string[]).includes(primary)) return primary as ClaimLocale;
  }
  return 'en';
}
