# AMI — Auditoría integral

**Solo lectura · 5 ago 2026**  
Web · Play · Engine · App móvil · Stripe · RevenueCat · Railway/Vercel  
Sin cambios en código.

---

## Veredicto

El ecosistema **ya es vendible técnicamente**, pero todavía **sin tracción**:

| Métrica | Valor |
|--------|------|
| Estado comercial | Vendible |
| Instalaciones Play | 0 |
| Suscripciones activas | 0 |
| Usuarios RevenueCat (28d) | 19 |

El embudo de venta está cableado y en producción. El riesgo principal no es que no se pueda cobrar: es inconsistencia de claim/canales, SQLite en Railway, y higiene de repos/sitio (imágenes, claim en ES, website sin remote).

---

## 1. Mapa del ecosistema

| Capa | Componente | URL / ID | Salud |
|------|------------|----------|-------|
| Marca | Sitio Astro | novahodos.com → /es/ami | HTTP 200 |
| Producto web | ami_app (Vite/React) | ami-app-tan.vercel.app | HTTP 200 |
| Backend | FastAPI 4.0.1-stripe | amiengine-production.up.railway.app | health ok · SQLite |
| Play Store | AMI Metabolismo Inteligente | com.novahodos.ami | Producción · 0 users |
| Cobro web | Stripe NOVAHODOS LLC | acct_1Tx7gp5HZMJZlAZw | $19 / $49 · trial 14d |
| Cobro Play | RevenueCat AMI | proj95168d13 · appe52e37961e | Webhook → Railway |
| Direct APK | AMI Direct 1.0.8 | com.novahodos.ami.direct | Stripe (sin Play Billing) |

Fuentes: probes live, Play Console, Stripe MCP, RevenueCat MCP, repos locales ami_engine + novahodos_website · 5 ago 2026

---

## 2. Canales de venta (consistencia)

### Web → Stripe (primario)
Pricing → `public-checkout-session` → Checkout ($0 hoy) → `novahodos.com/claim`  
Planes: `navigation_19_monthly` / `calibration_49_monthly`

### Play → RevenueCat (paralelo)
`ami_navegacion_mensual` / `ami_calibracion_mensual` · 1 oferta c/u  
Entitlements: `navegacion`, `calibracion` · grace P7D en RC

### Payment Links (atención)
6 links activos (legacy + nuevos). Claim redirect a `ami-app-tan…/claim`, no al sitio.  
**Riesgo:** dos destinos de claim (web vs app).

---

## 3. Google Play Console

| Ítem | Hallazgo |
|------|----------|
| Estado app | Producción |
| Políticas | Sin problemas |
| Última publicación | 4 ago 2026 |
| Cola de revisión | Vacía |
| Cuenta | Novahodos · org · verificación Android OK |
| Ficha viva | Título ES: AMI Metabolismo Inteligente · precio Play 0 (subs in-app) |
| Suscripciones | AMI Navegación + AMI Precision Calibration · actualizadas 2 ago |
| Publicación administrada | Desactivada → cambios aprobados salen solos |
| Pendiente | Notificaciones no leídas en Console (revisar campana) |
| Tracción | 0 usuarios con app instalada |

---

## 4. AMI Engine + App móvil (solo audit)

**Fuente canónica:** `C:\Users\noelm\Downloads\ami_engine` (+ submodule `frontend/ami_app`).  
El clone `ami-engine` es **stale**; no usarlo.

### Fortalezas
- Contrato 3 canales documentado (`BILLING_CHANNELS.md`) con autoridad de entitlements en servidor.
- Package IDs alineados con Play: `com.novahodos.ami` / `.direct`.
- Health live: `freeze_mode` true, Stripe configured, identity ready.
- Webhook RC apunta a Railway production y está activo.

### Debilidades
- Persistencia SQLite en volumen Railway (no Postgres) — límite de durabilidad/escala.
- Solo Android (Capacitor); no hay árbol iOS.
- Sin GitHub Actions en backend root (sí deploy Vercel en ami_app).
- Clones/worktrees/backups múltiples + residuales (tmp, PEMs) elevan riesgo operativo.

---

## 5. Sitio de ventas (¿apto para vender?)

**Sí, con reservas.**

| Señal | Estado |
|-------|--------|
| CTA claro 14 días | OK |
| Stripe live | OK |
| EN/ES pricing alineado | OK |
| Claim solo ES | Atención |
| Imágenes Experience faltantes | Atención |
| Root fuerza ES | Atención |
| Website sin git remote | Crítico |

### Notas
- **Conversión:** Funnel principal sano: AMI → Pricing → Stripe → /claim. Trial 14d en payment links + API checkout.
- **Confusión:** Play + APK Direct coexisten; el server bloquea double-claim.
- **Confianza:** Legal aún marcado como en evolución; emails `help@` vs `support@` desalineados.
- **Assets:** Experience pide `/product/*` pero no hay imágenes en `public/`; APK Direct 1.0.8 sí está.
- **Deploy:** Vercel ok; website local sin origin remoto — riesgo de loss de fuente de verdad.

---

## 6. Matriz de consistencia

| Señal | Web | Stripe | Play/RC | App/Engine | Match |
|-------|-----|--------|---------|------------|-------|
| Nav $19 | Yes | price …67wYTdsI | ami_navegacion_mensual | navigation_19_monthly | OK |
| Cal $49 | Yes | price …YVSi3fOS | ami_calibracion_mensual | calibration_49_monthly | OK |
| Trial 14d | Marketing + Checkout | En payment_link / session | Offer freetrial14 (docs) | Documentado | OK* |
| Claim URL | novahodos.com/claim | Public checkout | N/A | Links → ami-app-tan/claim | **Drift** |
| Package | com.novahodos.ami | N/A | Same | Same | OK |
| Clientes pagando | — | 0 subs / 0 customers | 0 active subs | — | Pre-revenue |

\* RC API muestra `trial_duration` null en el producto; el trial Play vive en la oferta (docs + Console “1 oferta”). Verificar oferta `freetrial14` en cada base plan.

---

## 7. Cuándo pagas tú (infra + stores)

| Proveedor | Qué cobras | Cuándo | Cómo te avisan |
|-----------|------------|--------|----------------|
| Google Play | Registro $25 one-time (ya pagado típ.) | Sin renovación anual de cuenta | Email Google + notificaciones Play Console |
| Google Play (cuotas) | Comisión ~15–30% sobre ventas in-app | Con cada cobro de usuario; payouts periódicos | Informes Play + email cuenta de pagos comerciante |
| Stripe | Fees de processing (~2.9%+$0.30 típ. US card) | Por transacción exitosa; payouts a banco según schedule | Email recibos/payouts + Dashboard Stripe |
| RevenueCat | Plan de plataforma (no se pudo leer factura por scope) | Según plan RC | Email + dashboard RevenueCat billing |
| Railway | Suscripción plan + uso compute/volumen | Fin de ciclo; a veces mid-cycle si uso alto | Email billing workspace; alertas 75/90/100% si hay spend limit |
| Vercel | Plan (Hobby/Pro) + usage si supera cuota | Mensual | Email Vercel + dashboard billing |
| GitHub | Gratis en standard; Actions/storage si exceden | Mensual si hay overage o plan Team/Pro | Email GitHub Billing |
| Usuario AMI ($19/$49) | Te pagan ellos tras trial 14d | Día 15 del ciclo de esa suscripción | Stripe email al cliente; tú ves Dashboard / webhooks |

**Hoy:** balance Stripe $0, 0 customers, 0 subscriptions. No hay cobros de clientes pendientes. Tus únicos cargos posibles ahora son infra (Railway/Vercel/RC) y comisiones futuras cuando alguien convierta. Revisa Spend Limit en Railway y el email de billing del workspace.

---

## 8. Hallazgos por severidad

| Sev | Hallazgo | Impacto |
|-----|----------|---------|
| Alta | Claim split: sitio vs ami-app-tan (payment links) | Usuarios post-pago aterrizan en sitios distintos |
| Alta | Website sin remote git | Sin fuente de verdad remota del canal de ventas |
| Media | SQLite identity en Railway | Backup/escala; riesgo de pérdida vs Postgres |
| Media | Imágenes Experience ausentes | Debilita página de confianza pre-compra |
| Media | 6 payment links activos (legado) | Links viejos pueden tener tax/métodos distintos |
| Media | Checkout sessions abiertas sin completar | Tráfico de prueba; sin conversiones aún |
| Baja | Claim UI solo español | Fricción EN post-Stripe |
| Baja | RC API sin trial_duration en producto | Operadores pueden creer que no hay trial Play |
| OK | Políticas Play limpias + package/IDs alineados | Listo para distribución |

---

## 9. Prioridades (recomendadas, sin ejecutar)

1. Unificar success/claim URL (`novahodos.com/claim`) y archivar payment links legacy.
2. Empujar website a un remote GitHub; tratar `ami_engine` como canónico único.
3. Confirmar oferta Play `freetrial14` activa en ambos productos y alinear copy.
4. Añadir spend limit + billing email en Railway; revisar facturas Vercel/RC en sus dashboards.
5. Restaurar assets de Experience o quitar el bloque roto.
6. Planear migración Postgres cuando haya primeros paid users.

---

## Límites de esta auditoría

- No se modificó código.
- No se accedió a Railway billing UI ni a la factura RevenueCat (`account:billing:read` denegado).
- GitHub CLI no está instalado en esta máquina; remotes se leyeron vía exploración de repos.
- Notificaciones no leídas de Play Console no se abrieron individualmente.

---

*Documento generado desde la auditoría del 5 ago 2026 · solo lectura*
