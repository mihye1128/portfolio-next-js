import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  description?: string | ReactNode;
  children: ReactNode;
}

export default function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="py-12 md:py-20" id={id}>
      <div className="container">
        <div className="mb-6 grid gap-4 md:mb-12 md:gap-8">
          <h2 className="font-rajdhani text-center text-3xl leading-none font-bold uppercase">
            {title}
          </h2>
          {description && (
            <p className="mx-auto w-fit text-sm leading-[1.75] sm:text-center md:text-base md:leading-[1.75]">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
