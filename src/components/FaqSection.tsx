import type { Faq } from "@/data/categories";

export default function FaqSection({
  faqs,
  contactEmail,
}: {
  faqs: Faq[];
  contactEmail: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-deep">Veelgestelde vragen</h2>
        <div className="mt-8 divide-y divide-deep/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-deep">
                {faq.question}
                <span className="ml-4 text-sky-dark transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-deep/70">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-deep/60">
          Heb je toch nog vragen? Neem contact op via{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold text-sky-dark hover:underline"
          >
            {contactEmail}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
