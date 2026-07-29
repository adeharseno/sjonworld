import Link from "next/link";

export function Logo() {
  return (
    <Link
      aria-label="SJONWORLD home"
      className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      href="/"
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-gray-900 text-xs font-bold tracking-tight text-white"
      >
        SJ
      </span>
      <span className="text-sm font-bold tracking-[0.18em] text-gray-900">
        SJONWORLD
      </span>
    </Link>
  );
}
