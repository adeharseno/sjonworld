import { EmailForm } from "@/components/email-form";

export function Hero() {
  return (
    <main className="flex flex-1 items-center py-20 sm:py-28">
      <section
        className="mx-auto max-w-3xl text-center"
        aria-labelledby="title"
      >
        <p className="mb-6 text-xs font-semibold tracking-[0.24em] text-gray-500 uppercase">
          Coming soon
        </p>
        <h1
          className="text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-gray-900 sm:text-6xl lg:text-7xl"
          id="title"
        >
          A new world is taking shape.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-500 sm:text-xl">
          SJONWORLD is almost here. Join the list and be the first to know when
          we launch.
        </p>
        <EmailForm />
      </section>
    </main>
  );
}
