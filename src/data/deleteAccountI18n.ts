export type DeleteAccountLang = 'en' | 'es' | 'pt' | 'fr' | 'it';

export type DeleteAccountCopy = {
  title: string;
  description: string;
  kicker: string;
  heading: string;
  intro: string;
  deletedTitle: string;
  deleted: string[];
  keptTitle: string;
  kept: string[];
  warning: string;
  emailLabel: string;
  passwordLabel: string;
  passwordHint: string;
  submit: string;
  busy: string;
  confirm: string;
  doneTitle: string;
  doneBody: string;
  subscriptionWarning: string;
  errorAuth: string;
  errorNetwork: string;
  lostTitle: string;
  lostBody: string;
  supportEmail: string;
};

const SUPPORT = 'support@novahodos.com';

export const deleteAccountCopy: Record<DeleteAccountLang, DeleteAccountCopy> = {
  en: {
    title: 'Delete AMI account',
    description: 'Delete your AMI account and health data without installing the app.',
    kicker: 'AMI account',
    heading: 'Delete your account and your data',
    intro:
      'From here you can delete your AMI account and the health data linked to it. You do not need the app installed.',
    deletedTitle: 'What is deleted',
    deleted: [
      'Your email and your password.',
      'All your clinical data: profile, fasting sessions, labs, and daily signals.',
      'Your open sessions and your active plan.',
      'The copy stored on this device (if any).',
    ],
    keptTitle: 'What is kept, and why',
    kept: [
      'Payment invoices, because tax law requires us to keep them. They cannot be used to sign in again.',
      'De-identified clinical data for research only. The link to you is removed permanently.',
    ],
    warning:
      'Deletion is immediate and cannot be undone. If you have an active subscription, it is cancelled at the same moment.',
    emailLabel: 'Account email',
    passwordLabel: 'Password',
    passwordHint: 'We ask for your password so nobody else can delete your data.',
    submit: 'Delete my account and my data',
    busy: 'Deleting…',
    confirm: 'Confirm delete your account and all your health data? This cannot be undone.',
    doneTitle: 'Account deleted',
    doneBody: 'Your account and your health data have been deleted. Nothing of yours remains in AMI.',
    subscriptionWarning: `Your account was deleted, but we could not confirm billing cancellation. Write to ${SUPPORT}.`,
    errorAuth: 'The email or password does not match. Check them and try again.',
    errorNetwork: 'Could not reach AMI. Check your connection and try again.',
    lostTitle: 'If you lost access',
    lostBody: `If you do not remember your password, write to ${SUPPORT} from your account email and we will delete it within 30 days.`,
    supportEmail: SUPPORT,
  },
  es: {
    title: 'Eliminar cuenta AMI',
    description: 'Elimina tu cuenta AMI y datos de salud sin instalar la app.',
    kicker: 'Cuenta AMI',
    heading: 'Eliminar tu cuenta y tus datos',
    intro:
      'Desde aquí puedes eliminar tu cuenta de AMI y los datos de salud asociados. No necesitas tener la aplicación instalada.',
    deletedTitle: 'Qué se elimina',
    deleted: [
      'Tu correo y tu contraseña.',
      'Todos tus datos clínicos: perfil, ayunos, análisis y señales diarias.',
      'Tus sesiones abiertas y tu plan activo.',
      'La copia guardada en este dispositivo (si hay).',
    ],
    keptTitle: 'Qué se conserva y por qué',
    kept: [
      'Tus facturas de pago, porque la ley fiscal obliga a conservarlas. No sirven para volver a entrar.',
      'Datos clínicos sin identificar, solo para investigación. El enlace contigo se elimina de forma permanente.',
    ],
    warning:
      'La eliminación es inmediata y no se puede deshacer. Si tienes una suscripción activa, se cancela en ese mismo momento.',
    emailLabel: 'Correo de tu cuenta',
    passwordLabel: 'Contraseña',
    passwordHint: 'Pedimos tu contraseña para que nadie más pueda eliminar tus datos.',
    submit: 'Eliminar mi cuenta y mis datos',
    busy: 'Eliminando…',
    confirm: '¿Confirmas eliminar tu cuenta y todos tus datos de salud? Esta acción no se puede deshacer.',
    doneTitle: 'Cuenta eliminada',
    doneBody: 'Tu cuenta y tus datos de salud se han eliminado. No queda nada tuyo en AMI.',
    subscriptionWarning: `Tu cuenta se eliminó, pero no pudimos confirmar la cancelación del cobro. Escribe a ${SUPPORT}.`,
    errorAuth: 'El correo o la contraseña no coinciden. Revísalos e inténtalo otra vez.',
    errorNetwork: 'No se pudo conectar con AMI. Revisa tu conexión e inténtalo otra vez.',
    lostTitle: 'Si perdiste el acceso',
    lostBody: `Si no recuerdas tu contraseña, escribe a ${SUPPORT} desde el correo de tu cuenta y la eliminaremos en un plazo máximo de 30 días.`,
    supportEmail: SUPPORT,
  },
  pt: {
    title: 'Excluir conta AMI',
    description: 'Exclua sua conta AMI e dados de saúde sem instalar o app.',
    kicker: 'Conta AMI',
    heading: 'Excluir sua conta e seus dados',
    intro:
      'Aqui você pode excluir sua conta AMI e os dados de saúde associados. Não precisa ter o aplicativo instalado.',
    deletedTitle: 'O que é excluído',
    deleted: [
      'Seu e-mail e sua senha.',
      'Todos os seus dados clínicos: perfil, jejuns, exames e sinais diários.',
      'Suas sessões abertas e seu plano ativo.',
      'A cópia neste dispositivo (se houver).',
    ],
    keptTitle: 'O que é mantido e por quê',
    kept: [
      'Faturas de pagamento, porque a lei fiscal exige. Não servem para entrar de novo.',
      'Dados clínicos desidentificados só para pesquisa. O vínculo com você é removido permanentemente.',
    ],
    warning:
      'A exclusão é imediata e irreversível. Se houver assinatura ativa, ela é cancelada no mesmo momento.',
    emailLabel: 'E-mail da conta',
    passwordLabel: 'Senha',
    passwordHint: 'Pedimos a senha para que ninguém mais possa excluir seus dados.',
    submit: 'Excluir minha conta e meus dados',
    busy: 'Excluindo…',
    confirm: 'Confirma excluir sua conta e todos os dados de saúde? Isso não pode ser desfeito.',
    doneTitle: 'Conta excluída',
    doneBody: 'Sua conta e seus dados de saúde foram excluídos. Nada seu resta na AMI.',
    subscriptionWarning: `A conta foi excluída, mas não confirmamos o cancelamento da cobrança. Escreva para ${SUPPORT}.`,
    errorAuth: 'E-mail ou senha não conferem. Verifique e tente de novo.',
    errorNetwork: 'Não foi possível conectar à AMI. Verifique a conexão e tente de novo.',
    lostTitle: 'Se você perdeu o acesso',
    lostBody: `Se não lembra a senha, escreva para ${SUPPORT} pelo e-mail da conta e excluiremos em até 30 dias.`,
    supportEmail: SUPPORT,
  },
  fr: {
    title: 'Supprimer le compte AMI',
    description: 'Supprimez votre compte AMI et vos données de santé sans installer l’appli.',
    kicker: 'Compte AMI',
    heading: 'Supprimer votre compte et vos données',
    intro:
      'Ici vous pouvez supprimer votre compte AMI et les données de santé associées. Vous n’avez pas besoin d’installer l’application.',
    deletedTitle: 'Ce qui est supprimé',
    deleted: [
      'Votre e-mail et votre mot de passe.',
      'Toutes vos données cliniques : profil, jeûnes, analyses et signaux quotidiens.',
      'Vos sessions ouvertes et votre forfait actif.',
      'La copie sur cet appareil (le cas échéant).',
    ],
    keptTitle: 'Ce qui est conservé, et pourquoi',
    kept: [
      'Factures de paiement, obligation fiscale. Elles ne permettent pas de se reconnecter.',
      'Données cliniques anonymisées pour la recherche uniquement. Le lien avec vous est effacé définitivement.',
    ],
    warning:
      'La suppression est immédiate et irréversible. Un abonnement actif est résilié au même moment.',
    emailLabel: 'E-mail du compte',
    passwordLabel: 'Mot de passe',
    passwordHint: 'Nous demandons le mot de passe pour qu’aucune autre personne ne puisse supprimer vos données.',
    submit: 'Supprimer mon compte et mes données',
    busy: 'Suppression…',
    confirm: 'Confirmer la suppression du compte et de toutes les données de santé ? Irréversible.',
    doneTitle: 'Compte supprimé',
    doneBody: 'Votre compte et vos données de santé ont été supprimés. Rien de vous ne reste dans AMI.',
    subscriptionWarning: `Compte supprimé, mais l’annulation du paiement n’a pas été confirmée. Écrire à ${SUPPORT}.`,
    errorAuth: 'E-mail ou mot de passe incorrect. Vérifiez et réessayez.',
    errorNetwork: 'Impossible de joindre AMI. Vérifiez la connexion et réessayez.',
    lostTitle: 'Si vous avez perdu l’accès',
    lostBody: `Si vous avez oublié le mot de passe, écrivez à ${SUPPORT} depuis l’e-mail du compte ; suppression sous 30 jours.`,
    supportEmail: SUPPORT,
  },
  it: {
    title: 'Elimina account AMI',
    description: 'Elimina il tuo account AMI e i dati di salute senza installare l’app.',
    kicker: 'Account AMI',
    heading: 'Elimina il tuo account e i tuoi dati',
    intro:
      'Da qui puoi eliminare il tuo account AMI e i dati di salute collegati. Non serve avere l’applicazione installata.',
    deletedTitle: 'Cosa viene eliminato',
    deleted: [
      'Email e password.',
      'Tutti i dati clinici: profilo, digiuni, esami e segnali giornalieri.',
      'Sessioni aperte e piano attivo.',
      'La copia su questo dispositivo (se presente).',
    ],
    keptTitle: 'Cosa resta e perché',
    kept: [
      'Fatture di pagamento, obbligo fiscale. Non servono per accedere di nuovo.',
      'Dati clinici de-identificati solo per ricerca. Il legame con te viene rimosso in modo permanente.',
    ],
    warning:
      'L’eliminazione è immediata e irreversibile. Se hai un abbonamento attivo, viene disdetto nello stesso momento.',
    emailLabel: 'Email dell’account',
    passwordLabel: 'Password',
    passwordHint: 'Chiediamo la password perché nessun altro possa eliminare i tuoi dati.',
    submit: 'Elimina il mio account e i miei dati',
    busy: 'Eliminazione…',
    confirm: 'Confermi di eliminare l’account e tutti i dati di salute? Azione irreversibile.',
    doneTitle: 'Account eliminato',
    doneBody: 'Il tuo account e i dati di salute sono stati eliminati. Nulla di tuo resta in AMI.',
    subscriptionWarning: `Account eliminato, ma non abbiamo confermato la cancellazione del pagamento. Scrivi a ${SUPPORT}.`,
    errorAuth: 'Email o password non corrispondono. Controlla e riprova.',
    errorNetwork: 'Impossibile raggiungere AMI. Controlla la connessione e riprova.',
    lostTitle: 'Se hai perso l’accesso',
    lostBody: `Se non ricordi la password, scrivi a ${SUPPORT} dall’email dell’account; eliminazione entro 30 giorni.`,
    supportEmail: SUPPORT,
  },
};
