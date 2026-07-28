# NOVAHODOS Website

Corporate website for NOVAHODOS.

```text
NOVAHODOS = umbrella company
AMI = first product
```

Control phrase:

```text
NOVAHODOS builds adaptive systems.
AMI is the first.
```

## Separation rule

This project is intentionally separated from `ami_engine`.

Do not import AMI Engine code, dashboard components, backend endpoints, internal engine names, private screenshots, tokens, logs, backups, or patient data.

The website explains. The application demonstrates.

## Public routes

```text
/
/ami
/ami/how-it-works
/ami/science
/ami/experience
/pricing
/faq
/contact
/legal
/privacy
/privacy#delete-account
/es/* (Spanish mirrors)
```

## Languages

Public copy is prepared in English and Spanish.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Deployment

Prepared for Vercel as a static Astro site (`projectName: novahodos_website`).

```bash
cd C:\Users\noelm\Downloads\novahodos_website
npm run build
npx vercel login
npx vercel deploy --prebuilt --prod --yes
```

After deploy, verify:

```bash
curl.exe -sI https://novahodos.com/privacy
curl.exe -s https://novahodos.com/privacy | findstr delete-account
curl.exe -sI https://novahodos.com/es/privacy
```

## Official emails

```text
noelmontealegre@novahodos.com
hello@novahodos.com
contact@novahodos.com
help@novahodos.com
privacy@novahodos.com
legal@novahodos.com
security@novahodos.com
```

