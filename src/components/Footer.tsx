import Marquee from "react-fast-marquee";
import TimeDisplay from "./TimeDisplay";

export default function Footer() {
  return (
    <footer>
      <Marquee speed={30} autoFill>
        <div className="bg-gray-900 py-3">
          <p className="font-general font-thin text-beige-400 text-xl ">
            &lt;h1&gt; Brian Melgar | Developer Writer Teacher &lt;/h1&gt;
            &lt;h2&gt; Contact Me &lt;/h2&gt; &lt;p&gt; Email: &lt;a
            href=&quot;mailto:brian.melgar.mx@gmail.com&quot;&gt;brian.melgar.mx@gmail.com&lt;/a&gt;
            &lt;/p&gt; &lt;h1&gt; Brian A Melgar &lt;/h1&gt; &lt;h2&gt; Contact
            Me &lt;/h2&gt; &lt;p&gt; Email: &lt;a
            href=&quot;mailto:brian.melgar.mx@gmail.com&quot;&gt;brian.melgar.mx@gmail.com&lt;/a&gt;
            &lt;/p&gt; &lt;h1&gt; Brian A Melgar &lt;/h1&gt; &lt;h2&gt; Contact
            Me &lt;/h2&gt; &lt;p&gt; Email: &lt;a
            href=&quot;mailto:brian.melgar.mx@gmail.com&quot;&gt;brian.melgar.mx@gmail.com&lt;/a&gt;
            &lt;/p&gt;
          </p>
        </div>
      </Marquee>

      <div className="section-padding relative flex flex-col items-center justify-center">
        <div className="gap-x-10 grid w-full grid-cols-2 text-base md:grid-cols-13">
          <div className="flex flex-col md:col-span-6">
            <h3 className="text-olive-700 font-sans pb-2 text-xl font-semibold border-b-[1px] border-b-olive-400 ">
              Menu
            </h3>
            <ul className="flex flex-col leading-tight space-y-0">
              <li>
                <a
                  target="/overview"
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  href="/"
                >
                  <span className="link1">Overview</span>
                  <span className="link2">Overview</span>
                </a>
              </li>

              <li>
                <a
                  target="/experience"
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  href="/"
                >
                  <span className="link1">Experience</span>
                  <span className="link2">Experience</span>
                </a>
              </li>

              <li>
                <a
                  target="/overview"
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  href="/"
                >
                  <span className="link1">Projects</span>
                  <span className="link2">Projects</span>
                </a>
              </li>

              <li>
                <a
                  target="/overview"
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  href="/"
                >
                  <span className="link1">About</span>
                  <span className="link2">About</span>
                </a>
              </li>

              <li>
                <a
                  target="/overview"
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  href="/"
                >
                  <span className="link1">Contact</span>
                  <span className="link2">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:col-span-3">
            <h3 className="text-olive-700 font-sans pb-2 text-xl font-semibold border-b-[1px] border-b-olive-400 ">
              Socials
            </h3>
            <ul className="flex flex-col leading-tight space-y-0">
              <li>
                <a
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  aria-label="Visit Brian's LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.linkedin.com/in/brian-melgar-a10b3120a/"}
                >
                  <span className="link1">LinkedIn</span>
                  <span className="link2">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  aria-label="Visit Brian's Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/officialmxp/"
                >
                  <span className="link1">Instagram</span>
                  <span className="link2">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  aria-label="Visit Brian's Instagram"
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                  href="https://github.com/brianMxBm"
                >
                  <span className="link1">Github</span>
                  <span className="link2">Github</span>
                </a>
              </li>
              <li>
                <a
                  aria-label="Visit Brian's Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://x.com/officialmxp"}
                  className="hover-text text-olive-800 font-semibold font-sans text-lg"
                >
                  <span className="link1">Twitter</span>
                  <span className="link2">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TimeDisplay timeZone={""} location={""} />
    </footer>
  );
}
