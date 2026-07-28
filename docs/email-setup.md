# Official Email Setup - Novahodos

These are the official company addresses to create after the domain is purchased and verified.

## Recommended domain

Use the final public company domain, for example:

```text
novahodos.com
```

## Primary mailboxes

Create these as real inboxes or aliases depending on the email provider:

```text
noelmontealegre@novahodos.com
hello@novahodos.com
help@novahodos.com
contact@novahodos.com
privacy@novahodos.com
legal@novahodos.com
security@novahodos.com
```

## Suggested use

| Address | Purpose |
| --- | --- |
| noelmontealegre@novahodos.com | Founder communication, investors, serious strategic contacts. |
| hello@novahodos.com | Warm public inbox for general visitors. |
| help@novahodos.com | User support and product help. |
| contact@novahodos.com | Institutional and website contact. |
| privacy@novahodos.com | Privacy, data requests, deletion/export requests. |
| legal@novahodos.com | Terms, consent, business/legal communication. |
| security@novahodos.com | Vulnerability reports and account/security incidents. |

## What not to create yet

Avoid these addresses before regulatory posture is clearer:

```text
clinical@novahodos.com
diagnosis@novahodos.com
medical@novahodos.com
labs@novahodos.com
```

They may imply a stronger clinical/medical service than the beta should claim.

## Provider options

Recommended order:

1. Google Workspace - simplest professional setup.
2. Microsoft 365 - good if the company prefers Outlook/Office.
3. Zoho Mail - lower-cost professional email.
4. Cloudflare Email Routing - acceptable for forwarding only, not ideal as the full business inbox.

## DNS records checklist

The selected provider will generate the exact records, but the domain usually needs:

```text
MX      mail delivery
SPF     sender authorization
DKIM    cryptographic sender signature
DMARC   anti-spoofing policy
```

Do not send launch emails until SPF, DKIM, and DMARC are passing.

## Public website use

The website should expose only:

```text
contact@novahodos.com
help@novahodos.com
privacy@novahodos.com
security@novahodos.com
```

Keep `founder@` available for selected pages or direct outreach, not every footer link.

## AMI protection rule

No email auto-replies or public pages should mention internal AMI Engine architecture, backend URLs, endpoints, tokens, logs, backups, private dashboards, patient data, or engine names.


