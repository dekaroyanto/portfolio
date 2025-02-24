// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";

import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import { Timeline } from "./components/timeline/Timeline";
import { Timeline2 } from "./components/timeline/Tmeline2";

const Hero = lazy(() => import("./components/hero/Hero"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#timeline">
            <Timeline />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#timeline2">
            <Timeline2 />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <div id="#portfolio">
            <Portfolio />
          </div>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
