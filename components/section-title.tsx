import { cn } from '@/lib/utils';

export const SectionTitle = ({ eyebrow, title, subtitle, className }: { eyebrow: string; title: string; subtitle?: string; className?: string }) => (
  <div className={cn('mb-10 max-w-3xl', className)}>
    <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
    <h2 className="font-serif text-4xl leading-[1.02] md:text-6xl">{title}</h2>
    {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{subtitle}</p>}
  </div>
);
