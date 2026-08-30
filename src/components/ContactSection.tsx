import FadeIn from '@/components/FadeIn';
import ContactButton from '@/components/ContactButton';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-8 bg-[#0C0C0C] px-5 py-20 text-center sm:px-8 md:px-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p
          className="max-w-[480px] font-light leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
        >
          Have a project in mind? Let&apos;s build something incredible together.
        </p>
      </FadeIn>
      <FadeIn delay={0.3} y={20}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
