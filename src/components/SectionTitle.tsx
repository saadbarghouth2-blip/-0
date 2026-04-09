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
    <div className={`max-w-3xl ${alignment}`}>
      <p className={`section-kicker ${align === 'center' ? 'mx-auto' : ''}`}>{kicker}</p>
      <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{description}</p>
    </div>
  );
};

export default SectionTitle;
