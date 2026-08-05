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
    planNav: 'Navigation ($19)',
    planCal: 'Precision Calibration ($49)',
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
    planNav: 'Navigation ($19)',
    planCal: 'Precision Calibration ($49)',
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
    planNav: 'Navigation ($19)',
    planCal: 'Precision Calibration ($49)',
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
    planNav: 'Navigation ($19)',
    planCal: 'Precision Calibration ($49)',
  },
};

export function resolveClaimLocale(raw: string | null | undefined): ClaimLocale {
  const key = String(raw || 'es').slice(0, 2).toLowerCase();
  if ((claimLocales as string[]).includes(key)) return key as ClaimLocale;
  return 'es';
}
