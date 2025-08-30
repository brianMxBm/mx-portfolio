import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 w-full animate-fade-in">
      <div className="section-padding grid grid-cols-13 items-center">
        <div className="col-span-1 items-center justify-center">
          <a
            href="/"
            className="hover-text font-rethink uppercase text-3xl italic font-semibold text-gray-900"
          >
            <span className="link1">mx</span>
            <span className="link2">mx</span>
          </a>
        </div>

        <nav className="col-span-12 hidden lg:block">
          <ul className="grid grid-cols-5 items-center w-full">
            <li className="text-center">
              <a
                href="/overview"
                className="hover-text font-rethink uppercase text-lg font-semibold text-gray-950"
              >
                <span className="link1">Overview</span>
                <span className="link2">Overview</span>
              </a>
            </li>

            <li className="text-center">
              <a
                href="/experience"
                className="hover-text font-rethink uppercase text-lg font-semibold text-gray-950"
              >
                <span className="link1">Experience</span>
                <span className="link2">Experience</span>
              </a>
            </li>

            <li className="text-center">
              <a
                href="/projects"
                className="hover-text font-rethink uppercase text-lg font-semibold text-gray-950"
              >
                <span className="link1">Projects</span>
                <span className="link2">Projects</span>
              </a>
            </li>

            <li className="text-center">
              <a
                href="/about"
                className="hover-text font-rethink uppercase text-lg font-semibold text-gray-950"
              >
                <span className="link1">About</span>
                <span className="link2">About</span>
              </a>
            </li>

            <li className="text-center">
              <a
                href="/contact"
                className="hover-text font-rethink uppercase text-lg font-semibold text-gray-950"
              >
                <span className="link1">Contact</span>
                <span className="link2">Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu button - visible on md and below, hidden on lg+ */}
        <button className="cursor-pointer col-span-12 flex justify-end lg:hidden">
          <Menu size={40} className="text--500" />
        </button>
      </div>
    </header>
  );
}
