import { useState, type ReactNode } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { SITE } from '../config';

type Page = 'home' | 'about';

const NAV = [
  { label: 'Solutions', id: 'solutions' },
  { label: 'Our Work', id: 'work' },
  { label: 'Why MacDuvy', id: 'why' },
  { label: 'Testimonials', id: 'testimonials' },
];

const sectionHref = (page: Page, id: string) => (page === 'home' ? `#${id}` : `/#${id}`);

export function Logo({ size = 'md' }: { size?: 'md' | 'sm' }) {
  const box = size === 'md' ? 'size-10' : 'size-9';
  return (
    <a href="/" className="flex items-center gap-3" aria-label="MacDuvy home">
      <img src="/logo.svg" alt="MacDuvy logo" className={`${box} rounded-sm`} width={40} height={40} />
      <span className="leading-tight">
        <span className="block text-xl font-medium">{SITE.name}</span>
        <span className="block text-xs text-muted-foreground">{SITE.tagline}</span>
      </span>
    </a>
  );
}

export function Badge({ children, variant = 'solid' }: { children: ReactNode; variant?: 'solid' | 'outline' }) {
  return variant === 'solid' ? (
    <span className="inline-flex items-center rounded-md bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
      {children}
    </span>
  ) : (
    <span className="inline-flex items-center rounded-md border border-border bg-white/60 px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

export function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  const links = [
    ...(page === 'about' ? [{ label: 'Home', href: '/' }] : []),
    ...NAV.map((n) => ({ label: n.label, href: sectionHref(page, n.id) })),
    { label: 'About Us', href: '/about/' },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`transition-colors hover:text-foreground ${
                page === 'about' && l.label === 'About Us' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={sectionHref(page, 'contact')}
            className="ml-3 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </a>
        </nav>
        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-white px-4 py-3 md:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-muted-foreground">
              {l.label}
            </a>
          ))}
          <a
            href={sectionHref(page, 'contact')}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}

export function Footer({ page }: { page: Page }) {
  return (
    <footer className="border-t border-border bg-gradient-to-br from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="" className="size-9 rounded-sm" width={36} height={36} />
              <div className="leading-tight">
                <div className="text-lg font-medium">{SITE.name}</div>
                <div className="text-sm text-muted-foreground">{SITE.tagline}</div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Fintech', 'Manufacturing', 'Sustainability', 'Healthcare', 'Energy'].map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={sectionHref(page, n.id)} className="text-muted-foreground hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/about/"
                  className={page === 'about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-foreground">
                  <Mail className="size-4" /> {SITE.email}
                </a>
              </li>
              <li className="text-xs">US-based</li>
              <li className="text-xs">Serving clients worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}
        </div>
      </div>
    </footer>
  );
}
