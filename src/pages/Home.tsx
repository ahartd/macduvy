import { useEffect, useRef, type ReactNode } from 'react';
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Clock,
  Cog,
  Mail,
  Quote,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Badge, Footer, Header } from '../components/Layout';
import { SITE } from '../config';

function SectionHeading({ badge, title, sub }: { badge: string; title: string; sub: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <Badge>{badge}</Badge>
      <h2 className="mt-4 text-3xl sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{sub}</p>
    </div>
  );
}

function Bullets({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-1.5 text-sm text-muted-foreground ${className}`}>
      {items.map((i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden>•</span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Hero ---------------- */

const PILLARS = [
  {
    icon: Target,
    title: 'Industries We Serve',
    text: 'Engineering, finance, manufacturing, healthcare, and other industries that demand high-trust automation with security, compliance, and auditability built in.',
    card: 'from-blue-50 to-blue-100/40 border-blue-200/70',
    iconBg: 'bg-blue-100 text-blue-600',
    heading: 'text-blue-700',
  },
  {
    icon: Zap,
    title: 'Our Value',
    text: 'High-assurance automation and regulatory-grade workflows that integrate seamlessly with your existing processes and scale into future products.',
    card: 'from-emerald-50 to-green-100/40 border-emerald-200/70',
    iconBg: 'bg-emerald-100 text-emerald-600',
    heading: 'text-emerald-700',
  },
  {
    icon: Brain,
    title: 'Our Approach',
    text: "We don't ask you to start from scratch. Instead, we apply proven engineering frameworks to your existing tools and processes.",
    card: 'from-purple-50 to-fuchsia-50/40 border-purple-200/70',
    iconBg: 'bg-purple-100 text-purple-600',
    heading: 'text-purple-700',
  },
];

function Hero() {
  return (
    <section className="px-4 pt-20 pb-20 sm:px-6 sm:pt-24 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
          Engineering Tailored Automations for Professional &amp; Technical Services.{' '}
          <span className="font-bold">
            Delivered <em>Fast</em>.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground">
          From <strong className="font-medium text-foreground">compliance-minded automation</strong> to{' '}
          <strong className="font-medium text-foreground">secure, high-reliability workflows</strong>, We help regulated
          industries and complex enterprises rapidly build{' '}
          <strong className="font-medium text-foreground">precision-engineered solutions</strong> that lay the groundwork
          for future products and market opportunities.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center rounded-md bg-gradient-to-b from-gray-800 to-primary px-8 py-3.5 font-medium text-white shadow-lg shadow-black/20 transition hover:from-gray-700"
        >
          Schedule a Strategy Session
        </a>
        <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
          No obligations, no sales pitch. Let's explore how bespoke automation can transform your workflows and
          competitive position.
        </p>
      </div>
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
        {PILLARS.map(({ icon: Icon, ...p }) => (
          <div key={p.title} className={`rounded-xl border bg-gradient-to-br p-6 text-left ${p.card}`}>
            <div className="flex items-center gap-3">
              <span className={`grid size-8 place-items-center rounded-lg ${p.iconBg}`}>
                <Icon className="size-4" />
              </span>
              <h3 className={`text-sm font-medium uppercase tracking-wide ${p.heading}`}>{p.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Solutions ---------------- */

const MODELS = [
  {
    icon: Cog,
    title: 'Professional + Technical Services',
    sub: 'Specialized development for regulated and high-reliability environments that integrates seamlessly into existing workflows',
    card: 'from-amber-50 to-orange-50/70 border-amber-200/60',
    iconBg: 'bg-orange-100 text-orange-600',
    dot: 'bg-orange-500',
    groups: [
      {
        title: 'Regulatory-Aware Automation',
        items: [
          'Custom automation for a wide range of tech-enabled services',
          'Compliance and audit frameworks built in from the start',
          'High-reliability workflow and systems engineering',
          'Secure, integration-ready architectures',
        ],
      },
      {
        title: 'Proven Engineering Frameworks',
        items: [
          'System architecture and integration strategies for complex environments',
          'Frameworks tested in regulated industries and safety-critical domains',
          'Tailored implementations for unique technical requirements',
          'Innovation-ready infrastructure designed for long-term scalability',
        ],
      },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Product Evolution Pathway',
    sub: 'Transform high-value automations into market-ready products and platforms, turning internal efficiencies into external opportunities.',
    card: 'from-rose-50 to-pink-50/70 border-rose-200/60',
    iconBg: 'bg-rose-100 text-rose-600',
    dot: 'bg-red-500',
    groups: [
      {
        title: 'From Custom Solution to Universal Product',
        items: [
          'Identify automation patterns with broad market applicability',
          'Engineer scalable product architectures from proven workflows',
          'Convert internal engineering tools into external solutions',
          'Leverage compliance and audit frameworks for faster adoption',
        ],
      },
      {
        title: 'Market-Ready Development',
        items: [
          'End-to-end productization of automation for internal and external use',
          'Market launch strategies informed by enterprise deployment experience',
          'Scalable infrastructure for product growth and platform opportunities',
          'Security and compliance baked into every stage of development',
        ],
      },
    ],
  },
];

function Solutions() {
  return (
    <section id="solutions" className="bg-gradient-to-br from-gray-100 via-gray-50 to-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Our Unique Model"
          title="Software Solutions & Product Evolution"
          sub="We provide both specialized software solutions and the strategic vision to evolve successful automations into market opportunities."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          {MODELS.map(({ icon: Icon, ...m }) => (
            <div key={m.title} className={`rounded-2xl border bg-gradient-to-br p-8 ${m.card}`}>
              <div className="flex items-start gap-4">
                <span className={`mt-1 grid h-12 w-7 shrink-0 place-items-center rounded-full ${m.iconBg}`}>
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-2xl">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.sub}</p>
                </div>
              </div>
              <div className="mt-10 space-y-6">
                {m.groups.map((g) => (
                  <div key={g.title}>
                    <div className="flex items-center gap-3">
                      <span className={`size-2 rounded-full ${m.dot}`} />
                      <h4>{g.title}</h4>
                    </div>
                    <Bullets items={g.items} className="mt-3 ml-5" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Our Work ---------------- */

type Case = {
  name: string;
  subtitle: string;
  logo: ReactNode;
  lead: ReactNode;
  note: string;
  stats: { value: string; label: string }[];
  tags: string[];
  media: ReactNode;
  mediaRight?: boolean;
  border: string;
  nameColor: string;
  statBg: string;
  statColor: string;
};

const CASES: Case[] = [
  {
    name: 'Wedge',
    subtitle: 'Revolutionary Fintech Payment Solution',
    logo: (
      <span className="grid size-11 place-items-center rounded-lg bg-indigo-100">
        <img src="/images/wedge-logo.png" alt="Wedge logo" className="size-7 rounded" width={28} height={28} />
      </span>
    ),
    lead: (
      <>
        MacDuvy partnered with the founding team to shape and deliver a payments platform supporting{' '}
        <strong className="font-medium">equities &amp; crypto transactions</strong> with institutional-grade security and
        regulatory compliance for real-time point-of-sale processing.
      </>
    ),
    note: 'High-assurance automation enabling next-generation financial transactions.',
    stats: [
      { value: '$250k+', label: 'Transactions processed in first 3 months' },
      { value: '1000+', label: 'Cryptocurrency and equities supported' },
    ],
    tags: ['React Native', 'Real-time Trading', 'PCI Compliance'],
    media: (
      <div className="flex h-full justify-center bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100">
        <img
          src="/images/wedge-app.webp"
          alt="Wedge app screens: spend any asset anywhere, buy or sell stocks, bonds and crypto, save money on everyday purchases"
          className="h-full max-h-[440px] w-auto object-contain"
          loading="lazy"
        />
      </div>
    ),
    border: 'border-gray-200',
    nameColor: 'text-foreground',
    statBg: 'bg-gray-100',
    statColor: 'text-foreground',
  },
  {
    name: 'Advanced Spirits',
    subtitle: 'Whiskey Barrel Management System',
    logo: (
      <span className="grid size-11 place-items-center rounded-lg bg-amber-100">
        <img src="/images/advanced-spirits-logo.png" alt="Advanced Spirits logo" className="size-7 rounded" width={28} height={28} />
      </span>
    ),
    lead: 'MacDuvy developed bespoke inventory management for whiskey barrel storage, enhancing auditability and reducing manual errors through precision tracking.',
    note: 'Custom automation solution designed for complex aging requirements and regulatory compliance.',
    stats: [
      { value: '50%', label: 'Improved tracking accuracy' },
      { value: '30 hrs', label: 'Weekly time savings in manual processes' },
    ],
    tags: ['Custom Software', 'Inventory Management', 'Process Automation', 'Specialized Industry'],
    media: (
      <img
        src="/images/whiskey-barrels.webp"
        alt="Stacked whiskey barrels on pallets in an aging warehouse"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
    border: 'border-amber-100',
    nameColor: 'text-orange-700',
    statBg: 'bg-amber-50',
    statColor: 'text-orange-600',
  },
  {
    name: 'Wedge Point of Sale',
    subtitle: 'Alternative Digital Payments',
    logo: (
      <span className="grid size-11 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
        <Smartphone className="size-5" />
      </span>
    ),
    lead: 'MacDuvy advised and assisted to the launch of a digital payments solution for cash-intensive, regulation-bound industries, powered by precision-engineered compliance frameworks.',
    note: 'Regulatory-aware automation enabling secure, auditable transactions in highly regulated markets.',
    stats: [
      { value: '85%', label: 'Reduction in cash handling' },
      { value: '100%', label: 'Regulatory compliance maintained' },
    ],
    tags: ['Regulatory Compliance', 'Payment Processing', 'Security Architecture', 'Banking Integration'],
    media: (
      <img
        src="/images/wedge-card.webp"
        alt="Wedge payment card floating above an open hand"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
    mediaRight: true,
    border: 'border-emerald-100',
    nameColor: 'text-emerald-700',
    statBg: 'bg-emerald-50',
    statColor: 'text-emerald-600',
  },
];

function CaseCard(c: Case) {
  return (
    <article className={`grid overflow-hidden rounded-2xl border bg-white lg:grid-cols-2 ${c.border}`}>
      <div className={`min-h-[280px] ${c.mediaRight ? 'lg:order-2' : ''}`}>{c.media}</div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-4">
          {c.logo}
          <div>
            <h4 className={`text-2xl ${c.nameColor}`}>{c.name}</h4>
            <p className="text-sm text-muted-foreground">{c.subtitle}</p>
          </div>
        </div>
        <p className="mt-5 text-lg leading-relaxed">{c.lead}</p>
        <p className="mt-4 text-sm text-muted-foreground">{c.note}</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {c.stats.map((s) => (
            <div key={s.value} className={`rounded-lg p-4 ${c.statBg}`}>
              <div className={`text-2xl ${c.statColor}`}>{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {c.tags.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Proven Results"
          title="Real Projects, Real Impact"
          sub="From cutting-edge fintech platforms to specialized industry solutions, see how we've delivered measurable results for clients across diverse sectors"
        />
        <h3 className="mb-14 text-center text-2xl">Featured Success Stories</h3>
        <div className="space-y-12">
          {CASES.map((c) => (
            <CaseCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why ---------------- */

const REASONS = [
  {
    icon: Users,
    title: 'Direct, Senior-Level Expertise',
    color: 'text-teal-800',
    iconBg: 'bg-teal-50 text-teal-600',
    items: [
      'Experienced engineers only, no layers of account reps',
      'Clear communication and consistent delivery throughout the engagement',
      'Hands-on expertise from architecture to deployment',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    color: 'text-purple-800',
    iconBg: 'bg-purple-50 text-purple-600',
    items: [
      'Built and scaled fintech platforms processing millions of transactions daily',
      'Delivered automation in highly regulated sectors like healthcare, manufacturing, and energy',
      'Decades of combined experience across enterprise software, AI/ML, IoT, and risk analysis',
    ],
  },
  {
    icon: Clock,
    title: 'Flexible and Fast',
    color: 'text-cyan-900',
    iconBg: 'bg-cyan-50 text-cyan-600',
    items: [
      'Lean teams that move quickly without corporate overhead',
      'Adaptive approach that integrates with existing workflows and systems',
      'Ability to pivot and refine solutions as new opportunities emerge',
    ],
  },
];

const STATS = [
  { icon: TrendingUp, value: '75%', label: 'Average operational efficiency improvement', bg: 'from-emerald-500 to-emerald-700' },
  { icon: Clock, value: '3 months', label: 'Faster time-to-market vs. traditional development', bg: 'from-blue-500 to-blue-700' },
  { icon: CheckCircle, value: '100%', label: 'Regulatory compliance maintained', bg: 'from-fuchsia-500 to-purple-700' },
];

function Why() {
  return (
    <section id="why" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Badge>Work With Us</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl">Small Team, Big Results</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            MacDuvy isn't a faceless agency or a junior dev shop. We're an engineering-first firm with experience
            building fintech platforms, delivering enterprise-scale automation, and solving complex technical problems
            across regulated industries.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our focus is on shipping software and systems that create real business impact.
          </p>
          <div className="mt-10 space-y-6">
            {REASONS.map(({ icon: Icon, ...r }) => (
              <div key={r.title} className="flex gap-4">
                <span className={`grid size-8 shrink-0 place-items-center rounded-lg ${r.iconBg}`}>
                  <Icon className="size-4" />
                </span>
                <div>
                  <h4 className={r.color}>{r.title}</h4>
                  <Bullets items={r.items} className="mt-2 !text-base" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-300/70 bg-gradient-to-br from-gray-100 to-gray-200/70 p-8 shadow-sm">
          <div className="space-y-6">
            {STATS.map(({ icon: Icon, ...s }) => (
              <div key={s.value} className={`rounded-xl bg-gradient-to-br p-6 text-center text-white shadow-md ${s.bg}`}>
                <div className="flex items-center justify-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-white/85 text-gray-700">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-3xl sm:text-4xl">{s.value}</span>
                </div>
                <p className="mt-2 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const QUOTES = [
  {
    quote:
      'MacDuvy helped us move from concept to live product in six months with the kind of engineering discipline usually reserved for much larger teams.',
    name: 'Billy Roberts',
    role: 'Founder & CEO, Wedge',
  },
  {
    quote:
      "Before MacDuvy, we were tracking 10,000+ barrels manually in Excel. Their custom solution reduced our inventory errors by 50% and saved us 30 hours per week. It's transformed our entire operation.",
    name: 'Drew Carden',
    role: 'Co-Founder & Board Member, Advanced Spirits',
  },
  {
    quote:
      'MacDuvy gave us the engineering strength to bring our custom payment platform to life quickly, delivering top-tier work that was reliable, compliant, and of the highest quality from day one.',
    name: 'Garrett Geiger',
    role: 'VP Engineering, Wedge Operations',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Client Success Stories"
          title="Proven Results, Real Impact"
          sub="See how my clients achieved measurable outcomes through rapid development approach"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-border bg-white p-6">
              <Quote className="size-7 text-gray-300" aria-hidden />
              <blockquote className="mt-4 leading-relaxed text-muted-foreground">"{q.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gray-200 font-medium">
                  {q.name
                    .split(' ')
                    .map((p) => p[0])
                    .join('')}
                </span>
                <span>
                  <span className="block font-medium">{q.name}</span>
                  <span className="block text-sm text-muted-foreground">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

function TallyForm({ formId }: { formId: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const src = 'https://tally.so/widgets/embed.js';
    const load = () => window.Tally?.loadEmbeds();
    if (document.querySelector(`script[src="${src}"]`)) {
      load();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = load;
    document.body.appendChild(s);
  }, [formId]);
  return (
    <iframe
      ref={ref}
      data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      width="100%"
      height="420"
      frameBorder={0}
      title="Book a strategy session"
    />
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary px-4 py-24 text-primary-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl">Book a Free 30-Minute Strategy Session</h2>
        <p className="mt-6 text-lg text-white/85 sm:text-xl">
          Let's chat about your ideas and I'll help you validate and deliver them fast, without the overhead or rookie
          mistakes.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-green-500" /> US-based, serving clients worldwide
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-blue-500" /> 10+ years in fintech, enterprise, and engineering services
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-purple-500" /> Direct founder involvement guaranteed
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-6 text-left text-foreground shadow-xl sm:p-9">
        {SITE.tallyFormId ? (
          <TallyForm formId={SITE.tallyFormId} />
        ) : (
          <div className="py-8 text-center">
            <p className="text-lg">Tell me about your project, timeline, and requirements.</p>
            <a
              href={`mailto:${SITE.email}?subject=Strategy%20Session%20Request`}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90"
            >
              Book My Strategy Session <ArrowRight className="size-4" />
            </a>
          </div>
        )}
      </div>
      <div className="mt-10 text-center">
        <p className="text-white/80">Prefer to reach out directly?</p>
        <a
          href={`mailto:${SITE.email}`}
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-primary-foreground bg-primary-foreground/95 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary-foreground"
        >
          <Mail className="size-4" /> Email {SITE.email}
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header page="home" />
      <main>
        <Hero />
        <Solutions />
        <Work />
        <Why />
        <Testimonials />
        <Contact />
      </main>
      <Footer page="home" />
    </>
  );
}
