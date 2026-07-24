import Hero from "./sections/Hero/Hero";
import Problem from "./sections/Problem/Problem";
import CTA from "./sections/CTA/CTA";

import "./InteractiveLanding.scss";
import Vision from "./sections/Vision/Vision";
import Process from "./sections/Process/Process";
import Experience from "./sections/Experience/Experience";
import Proyects from "./sections/Proyects/Proyects";
import LiveAction from "./sections/LiveAction/LiveAction";

const InteractiveLanding = () => {
    return (
        <main className="interactive">

            <section id="hero">
                <Hero/>
            </section>

            <section id="problem">
                <Problem />
            </section>

            <section id="vision">
                <Vision />
            </section>

            <section id="experience">
                <Experience />
            </section>

            <section>
                <LiveAction />
            </section>

            <section id="cases">
                <Process />
            </section>

            <section id="demo">
                <Proyects />
            </section>

            <section id="contact">
                <CTA />
            </section>

        </main>
    );
};

export default InteractiveLanding;