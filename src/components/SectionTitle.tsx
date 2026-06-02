interface SectionTitleProps {
  kicker: string;
  title: string;
  description: string;
  align?: 'start' | 'center';
}

const SectionTitle = ({
  kicker,
  title,
  description,
  align = 'start',
}: SectionTitleProps) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl space-y-4 md:space-y-5 ${alignment}`}>
      <p className={`section-kicker ${align === 'center' ? 'mx-auto' : ''}`}>{kicker}</p>
      <h2 className="font-display text-[1.7rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.05rem] md:text-5xl md:leading-tight">
        {title}
      </h2>
      <p className="text-[0.92rem] leading-6 text-muted-foreground sm:text-base md:text-lg md:leading-8">{description}</p>
    </div>
  );
};

export default SectionTitle;
