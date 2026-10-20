import { ExternalLink } from 'lucide-react';
import { Badge, Footer, Header } from '../components/Layout';
import { SITE } from '../config';

const TAGS = [
  'M.S. Nuclear Engineering',
  'Fintech',
  'AI & LLM Systems',
  'Enterprise Automation',
  'Regulated Industries',
  'Sustainability',
];

export default function About() {
  return (
    <>
      <Header page="about" />
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-semibold">Our Team</h1>
        <article className="mx-auto mt-14 grid max-w-4xl items-center gap-10 rounded-2xl border border-border p-8 md:grid-cols-[1fr_1.15fr] md:p-10">
          <div className="flex justify-center">
            <img
              src="/images/alex-duvall.webp"
              alt="Alex Duvall, Founder & Principal Engineer of MacDuvy"
              className="size-60 rounded-xl object-cover shadow-xl"
              width={240}
              height={240}
            />
          </div>
          <div>
            <h2 className="text-2xl">Alex Duvall</h2>
            <p className="mt-2 text-lg">Founder &amp; Principal Engineer</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Alex Duvall is an engineering leader with over a decade of experience spanning fintech, sustainability,
              healthcare, energy, and enterprise automation. As co-founder and CTO of Wedge Financial, he architected and
              scaled a multi-asset payments platform from concept to national launch. At PARQ, he pioneered AI-powered
              methodologies that significantly reduced sustainability reporting timeliness, enabling multimillion-dollar
              opportunities for global manufacturers. With a foundation in nuclear engineering and a career building
              high-assurance systems across regulated industries, Alex founded MacDuvy to deliver precision-engineered
              automations and scalable solutions for organizations that demand compliance, reliability, and innovation.
            </p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-lg hover:underline"
            >
              View LinkedIn Profile <ExternalLink className="size-4" />
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer page="about" />
    </>
  );
}
