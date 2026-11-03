import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  Github,
  Menu,
  Plus,
  Shield,
  Timer,
  X,
  Zap,
} from "lucide-react";
import { CloudflareDashboard } from "@/components/dashboard/Dashboard";

const WORDS = ["free.", "$0.", "zip.", "nada."];

const MARQUEE = [
  ["$0", " hosting fees after the move"],
  [null, "Private GitHub repository"],
  ["Cloudflare Pages", " free tier"],
  [null, "Full bot & security rules"],
  [null, "Always Online active"],
  [null, "No more Squarespace or Wix bills"],
  [null, "You keep full ownership"],
  [null, "Fast global CDN"],
  ["One-time", " project, then it is yours"],
  [null, "Fortune 500 uses this network"],
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Can I still edit the site later?",
    a: "Yes. Updating text, images, and pages is straightforward. You (or anyone you trust) can edit the files directly, or simply ask an AI to make the changes and push them live. Updating content is usually easier than working inside the clunky editors of Squarespace or Wix. Changing the overall look is a bit more involved than dragging boxes around in a website builder, but still very doable. Many clients just message us or use AI when they want design tweaks. This is the small trade-off for no longer paying $20–$45 every month — you gain full ownership and zero ongoing fees while still being able to update the site whenever you need.",
  },
  {
    q: "Will this hurt my Google ranking?",
    a: "Usually the opposite happens. Moving to Cloudflare Pages almost always makes the site load significantly faster. Google has openly stated that site speed is a ranking factor, so a faster site tends to help visibility rather than hurt it. We also keep all your existing content and set up proper redirects, so you don’t lose any current rankings in the process. Most sites either stay the same or improve after the move.",
  },
  {
    q: "Will my site go offline during the move?",
    a: "No. We build and fully test the new version on a private preview link that Cloudflare Pages automatically provides. Your current site stays live the entire time. Once everything looks good and you’ve approved it, we switch the domain over — usually with zero downtime. Visitors never see a broken or offline site.",
  },
  {
    q: "What if my site relies on a form to capture leads?",
    a: "No problem at all — this is very common. We replace the old form with a new one that still sends every submission straight to your email (and optionally into a simple dashboard). You keep receiving leads exactly as you do now. The form continues to work the same way from the visitor’s perspective, just without the monthly hosting cost attached.",
  },
  {
    q: "Who is this service actually for?",
    a: "It works best for ordinary small-business and local-service sites: trades, professional services, simple company sites, and brochure-style websites that mainly explain what you do and let people get in touch. If you want to stop paying monthly hosting or builder fees, you’re happy with a modern static or lightly interactive site, and you prefer to own the code and the Cloudflare account, it’s a strong fit. It is not designed for heavy custom applications, large multi-location platforms, membership sites with complex user accounts, or anything that truly needs a full server-side CMS and database.",
  },
  {
    q: "What’s the real risk of moving?",
    a: "The practical risks are low for the type of sites we work with. We build and test everything on a preview domain first, so nothing goes live until you approve it. Your original site stays online the whole time. You keep full ownership of the GitHub repository and Cloudflare account from day one. The main trade-off is that editing the overall design is a bit less “drag-and-drop” than a traditional website builder — but content updates remain simple, and most clients find the savings and ownership worth it.",
  },
  {
    q: "Do I still own everything after the project?",
    a: "Yes — completely. The private GitHub repository, the Cloudflare account, and your domain all stay in your name. We only work as invited collaborators during the project. Once we hand everything over, you can manage the site yourself, invite someone else, or come back to us later if you want help with updates. There is no lock-in and no ongoing dependency on us.",
  },
  {
    q: "What is GitHub and why is it used?",
    a: "GitHub is simply a secure place to store the files that make up your website. In this setup we create a private repository under your own account, which means you fully own the code. Cloudflare Pages then automatically builds and serves the site from that repository. You never have to interact with GitHub if you don’t want to — it just acts as the reliable, private home for your site’s files so you’re never locked into a website builder or hosting company.",
  },
  {
    q: "What exactly are Cloudflare Pages?",
    a: "Cloudflare Pages is a modern hosting platform built specifically for fast, static (or lightly dynamic) websites. Instead of running on a traditional shared server that you pay for every month, your site is stored as files and delivered through Cloudflare’s global network. This is what allows the hosting itself to be free while still being extremely fast and reliable. You keep full ownership of the site through a private GitHub repository, and Cloudflare simply serves it to visitors worldwide.",
  },
  {
    q: "Who actually trusts Cloudflare?",
    a: "Roughly 45% of Fortune 500 companies rely on Cloudflare’s network. It is one of the largest and most trusted content delivery and security platforms on the internet. When we move your site, we configure the same free security layer that sits in front of those large companies — including bot protection, rate limiting, custom security rules, and Always Online. Your site benefits from enterprise-grade filtering and performance without any monthly cost.",
  },
  {
    q: "What’s the likelihood Cloudflare ends their free plan?",
    a: "Low. Cloudflare has publicly and repeatedly committed to keeping a strong free tier. Their CEO has stated versions of “as long as I’m CEO” when asked about it. The free plan is part of their core business strategy — it helps them fill network capacity, gather security data, and attract future paying customers. For simple static sites (exactly what we build), the free plan is especially generous, with unlimited bandwidth for static files. Like any platform, limits can gradually change over time, but the free tier for this use case has remained very usable for years and shows no signs of disappearing.",
  },
];

function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16 4.2 25.2 8v8.4c0 5.1-3.7 9.2-9.2 11.6C10.5 25.6 6.8 21.5 6.8 16.4V8Z" />
      <path d="M10.2 22.6 22.4 9.2" fill="none" stroke="#f15a22" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function SpinWord() {
  const [i, setI] = useState(0);
  const [on, setOn] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setOn(false);
      window.setTimeout(() => {
        setI((v) => (v + 1) % WORDS.length);
        setOn(true);
      }, 200);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);
  return <span className={on ? "spin-word on italic text-orange" : "spin-word italic text-orange"}>{WORDS[i]}</span>;
}

const SETUP = [
  {
    icon: Shield,
    title: "Custom security rules",
    body: "Blocks for sensitive paths, common exploit scans, bad user-agents, and high-risk sources.",
  },
  {
    icon: Timer,
    title: "Rate limiting & forms",
    body: "Stops rapid-fire requests against contact forms and key pages so bots cannot overwhelm them.",
  },
  {
    icon: Bot,
    title: "Bot & AI controls",
    body: "Bot Fight Mode plus policies that allow useful search crawlers while restricting aggressive training bots.",
  },
  {
    icon: Zap,
    title: "Always Online",
    body: "Cloudflare can still show a cached version of the site if the origin has a temporary problem.",
  },
  {
    icon: Github,
    title: "GitHub + Pages",
    body: "Clean repository, automated deploys from the main branch, and a production URL on Cloudflare Pages.",
  },
  {
    icon: BadgeCheck,
    title: "You own everything",
    body: "Cloudflare account, GitHub repo, and domain stay in your name. We only work as invited collaborators.",
  },
];

export function Landing() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3 text-ink">
            <span className="grid size-9 place-items-center rounded-xl bg-ink text-paper">
              <Mark className="size-6" />
            </span>
            <span className="leading-tight">
              <strong className="block text-base font-semibold tracking-tight">HostCut</strong>
              <span className="block text-xs text-muted">Free hosting + protection</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <a href="#dashboard" className="hover:text-ink">Dashboard</a>
            <a href="#problem" className="hover:text-ink">The problem</a>
            <a href="#offers" className="hover:text-ink">Services</a>
            <a href="#process" className="hover:text-ink">Process</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <a
            href="#offers"
            className="hidden h-11 items-center rounded-full bg-orange px-4 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96] md:inline-flex"
          >
            See the options
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-line bg-paper px-5 py-3 md:hidden">
            {[
              ["#dashboard", "Dashboard"],
              ["#problem", "The problem"],
              ["#offers", "Services"],
              ["#setup", "What you get"],
              ["#process", "Process"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="block rounded-xl px-3 py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pt-14 pb-8 md:pt-20">
          <p className="text-xs font-semibold tracking-widest text-orange uppercase">Stop paying for hosting</p>
          <h1 className="display-xl mt-4 max-w-5xl">
            Stop paying rent
            <br />
            <span className="italic text-orange">on your website.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            We move your small-business site onto free Cloudflare Pages, keep the code in a private GitHub repo you own, and turn on real bot and security protection. Or we leave your host alone and only add the shield.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#offers"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-orange px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96]"
            >
              See the two options
              <ArrowRight size={16} />
            </a>
            <a
              href="#dashboard"
              className="inline-flex h-12 items-center rounded-full border border-line bg-card px-5 text-sm font-semibold transition-transform duration-150 ease-out hover:border-ink/30 active:scale-[0.96]"
            >
              Open the live dashboard
            </a>
          </div>
        </section>

        <section id="dashboard" className="mx-auto max-w-6xl px-4 pb-6 md:px-5">
          <div className="rounded-3xl bg-ink p-3 md:p-4">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-3 px-2 pt-2 text-paper">
              <div>
                <p className="text-xs font-semibold tracking-widest text-orange uppercase">Example zone · simulated</p>
                <p className="mt-1 font-serif text-2xl md:text-3xl">What the analytics look like after the move.</p>
              </div>
              <p className="max-w-sm text-sm text-paper/70">
                Switch tabs, filters, zones, and the time range. Counts drift so it feels like a live account — with the kind of numbers worth keeping.
              </p>
            </div>
            <CloudflareDashboard />
            <ul className="mt-3 grid gap-2 px-1 pb-1 text-sm text-paper/80 md:grid-cols-3">
              <li className="flex items-start gap-3 rounded-2xl bg-paper/10 px-4 py-3">
                <Github size={18} className="mt-0.5 shrink-0 text-orange" />
                <span><strong className="text-paper">GitHub</strong> — the source stays private, in your account.</span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-paper/10 px-4 py-3">
                <CloudMark />
                <span><strong className="text-paper">Cloudflare Pages</strong> — free hosting on a global CDN.</span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-paper/10 px-4 py-3">
                <Shield size={18} className="mt-0.5 shrink-0 text-orange" />
                <span><strong className="text-paper">Free-plan shield</strong> — bots, rules, and Always Online.</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="marquee py-4" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy}>
                {MARQUEE.map(([bold, rest], i) => (
                  <span key={`${copy}-${i}`}>
                    {bold ? <b>{bold}</b> : null}
                    {rest}
                    <span className="mx-6 text-orange">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="problem" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="text-xs font-semibold tracking-widest text-orange uppercase">The reality</p>
          <h2 className="display-lg mt-4 max-w-4xl">
            Most small business sites pay every month for something that can be <SpinWord />
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Website builders and shared hosting charge ongoing fees. At the same time the open internet throws bots, scrapers, and scanners at every site. You end up paying for hosting that is both expensive and under-protected.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["01", "Monthly fees that never stop", "Squarespace, Wix, WordPress hosting, and most managed platforms bill you every month or year whether traffic is high or low. The site itself rarely needs that much paid infrastructure."],
              ["02", "Bad traffic still reaches the server", "Even on paid hosts, forms get spam, scanners probe for openings, and AI crawlers hit everything. The free Cloudflare layer can stop most of it before it costs you resources."],
              ["03", "You don’t need the complexity", "A typical local-service or company brochure site is perfectly happy as a modern static site on free global hosting. Paying for a full CMS or shared server is often overkill."],
            ].map(([n, title, body]) => (
              <article key={n} className="border-t border-ink/15 pt-6">
                <p className="font-serif text-4xl text-orange">{n}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <figure className="bleed bleed-bottom">
          <img src="/photos/bakery.jpg" alt="A sunlit bakery storefront with a laptop open on the counter" />
          <figcaption className="bleed-copy m-5 max-w-md rounded-3xl bg-paper p-7 text-ink md:m-10">
            <p className="text-xs font-semibold tracking-widest text-orange uppercase">Built for the shop</p>
            <p className="mt-3 font-serif text-4xl leading-none">The storefront stays. The monthly bill does not.</p>
            <p className="mt-3 text-muted">Trades, studios, and local companies. A fast brochure site with a form — not a server you rent forever.</p>
          </figcaption>
        </figure>

        <section id="offers" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="text-xs font-semibold tracking-widest text-orange uppercase">Two clear options</p>
          <h2 className="display-lg mt-4 max-w-3xl">Choose the path that fits your situation.</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Most clients now take the full move (zero ongoing hosting cost). The lighter protection-only service remains available if you prefer to keep your current host for now.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="flex flex-col rounded-3xl bg-ink p-8 text-paper md:p-10">
              <p className="text-xs font-semibold tracking-widest text-orange uppercase">Strongest offer</p>
              <h3 className="mt-4 font-serif text-4xl md:text-5xl">Free hosting + redesign</h3>
              <p className="mt-4 text-paper/75">
                We rebuild or carefully port your site to a private GitHub repository and deploy it on Cloudflare Pages. You stop paying hosting or website-builder fees forever.
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-paper/85">
                {[
                  "Modern, fast static (or lightly dynamic) site on Cloudflare Pages",
                  "Private GitHub repo — you own the code",
                  "Full Cloudflare free-plan security, bot controls & Always Online",
                  "Custom domain pointed and protected",
                  "No monthly hosting or builder subscription after hand-off",
                  "Clean hand-off: you keep both the GitHub and Cloudflare accounts",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-5xl">
                From $799 <span className="font-sans text-base font-medium text-paper/60">one-time</span>
              </p>
              <p className="mt-2 text-sm text-paper/60">Exact scope depends on current site complexity. Most simple service sites land in the $799–$1,499 range.</p>
              <a href="#process" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-orange text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96]">
                How the move works
              </a>
            </article>

            <article className="flex flex-col rounded-3xl border border-line bg-card p-8 md:p-10">
              <p className="text-xs font-semibold tracking-widest text-orange uppercase">Keep current host</p>
              <h3 className="mt-4 font-serif text-4xl md:text-5xl">Cloudflare protection only</h3>
              <p className="mt-4 text-muted">
                We leave your existing site and host exactly where they are. We only add a properly configured Cloudflare layer in front for filtering and resilience.
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-muted">
                {[
                  "Custom security rules, rate limiting, response rules",
                  "Bot Fight Mode + AI crawler controls",
                  "Always Online and basic caching",
                  "Security headers and cleanup",
                  "Everything under your own Cloudflare account",
                  "No redesign, no host change",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-5xl text-ink">
                $249 <span className="font-sans text-base font-medium text-muted">one-time</span>
              </p>
              <p className="mt-2 text-sm text-muted">Optional $19/mo monitoring available after setup.</p>
              <a href="#setup" className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-line text-sm font-semibold transition-transform duration-150 ease-out hover:border-ink/30 active:scale-[0.96]">
                What we configure
              </a>
            </article>
          </div>

          <div className="mt-5 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {[
              ["Typical builder", "$29", "/mo, every month"],
              ["Three years of that", "$1,044", "before you change a thing"],
              ["After HostCut", "$0", "/mo hosting, once the move is done"],
            ].map(([k, n, s]) => (
              <div key={k} className="bg-card px-6 py-7">
                <p className="text-xs font-semibold tracking-widest text-muted uppercase">{k}</p>
                <p className="mt-2 font-serif text-5xl">{n}</p>
                <p className="mt-1 text-sm text-muted">{s}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bleed bleed-side">
          <img src="/photos/fiber.jpg" alt="A molten orange ribbon of light cutting through dark glass fibers" />
          <div className="bleed-copy max-w-3xl px-6 py-24 md:px-16 md:py-36">
            <p className="text-xs font-semibold tracking-widest text-orange uppercase">The cut</p>
            <h2 className="display-lg mt-4 text-paper">
              Same edge network.
              <br />
              <span className="italic text-orange">None of the rent.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-paper/80">
              Your site is files, served from Cloudflare’s network. Not a shared server with a subscription attached.
            </p>
          </div>
        </section>

        <section id="setup" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="text-xs font-semibold tracking-widest text-orange uppercase">What you actually get</p>
          <h2 className="display-lg mt-4 max-w-3xl">Protection is included either way. Free hosting is the real upgrade.</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Whether you take the full move or just the protection layer, the Cloudflare free plan is configured properly — not left on defaults.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SETUP.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line bg-card p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-orange/10 text-orange">
                  <item.icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="bg-ink py-24 text-paper md:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-semibold tracking-widest text-orange uppercase">How the full move works</p>
            <h2 className="display-lg mt-4 max-w-3xl">Four clear steps. You keep ownership the entire time.</h2>
            <p className="mt-5 max-w-2xl text-lg text-paper/70">
              The goal is a clean hand-off so you never depend on us for day-to-day operation of the site.
            </p>
            <ol className="mt-14 grid gap-8 md:grid-cols-4">
              {[
                ["Review & scope", "We look at your current site, forms, and any special requirements. You get a fixed quote for the redesign or careful port."],
                ["Rebuild on GitHub", "We create a private repository under your GitHub account (or transfer it to you) and build a modern, fast version of the site."],
                ["Deploy to Cloudflare Pages", "The site goes live on Cloudflare Pages. We connect your domain, enable the free security layer, and apply the full rule set."],
                ["Hand-off & cancel old host", "You confirm everything works. Then you can cancel the old Squarespace, Wix, WordPress, or shared-hosting subscription. You keep both accounts."],
              ].map(([title, body], i) => (
                <li key={title} className="border-t border-paper/15 pt-5">
                  <p className="font-serif text-3xl text-orange">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">{body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 rounded-3xl bg-paper/10 px-6 py-5 text-sm leading-relaxed text-paper/75">
              <strong className="text-paper">Protection-only path:</strong> If you prefer to stay on your current host, the process is simpler — create a free Cloudflare account, invite us, we update DNS and apply the security configuration, then hand everything back to you.
            </p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-24 md:py-32">
          <p className="text-xs font-semibold tracking-widest text-orange uppercase">Common questions</p>
          <h2 className="display-lg mt-4">Straightforward answers.</h2>
          <p className="mt-4 text-lg text-muted">These are the questions that come up most often before someone decides to move.</p>
          <div className="mt-10 border-t border-line">
            {FAQS.map((item, i) => {
              const isOpen = faq === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold"
                    aria-expanded={isOpen}
                    onClick={() => setFaq(isOpen ? null : i)}
                  >
                    {item.q}
                    <span className={isOpen ? "grid size-8 shrink-0 rotate-45 place-items-center rounded-full border border-line transition-transform duration-200" : "grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-200"}>
                      <Plus size={14} />
                    </span>
                  </button>
                  <div className={isOpen ? "faq-a open" : "faq-a"}>
                    <div>
                      <p className="pb-6 text-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bleed bleed-bottom min-h-[80vh]">
          <img src="/photos/city.jpg" alt="A coastal city at night, street grids glowing like a network" />
          <div className="bleed-copy mx-auto w-full max-w-3xl px-6 py-24 text-center md:py-32">
            <h2 className="display-lg text-paper">
              Ditch the hosting fees.
              <br />
              Keep the protection.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-paper/80">
              Most clients now choose the full move to Cloudflare Pages because the math is simple: one-time project cost versus years of monthly fees.
            </p>
            <a
              href="#offers"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-orange px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:brightness-110 active:scale-[0.96]"
            >
              Compare the two options
              <ArrowRight size={16} />
            </a>
            <p className="mt-6 text-sm text-paper/60">Reply to the message you received, or reach out, and we can look at your company and current setup.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-paper/10 bg-ink text-paper/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8">
          <div className="flex items-center gap-3 text-paper">
            <span className="grid size-8 place-items-center rounded-lg bg-paper text-ink">
              <Mark className="size-5" />
            </span>
            <strong>HostCut</strong>
          </div>
          <p className="text-sm">Free Cloudflare hosting + protection for small business sites</p>
        </div>
      </footer>
    </>
  );
}

function CloudMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5 shrink-0 text-orange" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.5-1.6A3.5 3.5 0 0 0 7 18Z" />
    </svg>
  );
}
