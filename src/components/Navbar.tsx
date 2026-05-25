import Link from "next/link";

const navItems = [
  ["Overview", "/#hero"],
  ["Snapshot", "/#snapshot"],
  ["Footage", "/#showcase"],
  ["Film Library", "/#film-library"],
  ["Scouting", "/#scouting"],
  ["International", "/#international"],
  ["Academics", "/#academics"],
  ["Contact", "/#contact"],
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <Link href="/#hero" className="text-sm font-semibold tracking-wide text-zinc-100">
          Connor Burdick
        </Link>
        <ul className="flex flex-wrap items-center gap-3 text-xs text-zinc-300 sm:gap-4 sm:text-sm">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                aria-label={`Jump to ${label} section`}
                className="transition-colors hover:text-blue-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
