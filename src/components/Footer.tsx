export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <span>&copy; {new Date().getFullYear()} VERITIR</span>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
