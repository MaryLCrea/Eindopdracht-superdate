import React from 'react';
import './About.css';
import TopMenu from "../../components/topmenu/TopMenu";

function About() {
    return (
        <>
            <TopMenu/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">
                    <h4>Over ons</h4>
                    <section className="text">Superdate is een van de grootste online datingsites in Europa voor singles
                        die op zoek zijn naar een serieuze relatie.
                    </section>

                    <section className="text">Superdate handelt in Nederland onder de naam ML-Creations.</section>
                    <section className="text">
                        Adres:

                        ML-Creatons
                        De Fakestraat 200
                        1000 AA Groningen
                        KvK-nummer 900
                    </section>


                    <section className="text">

                        Tel.: +31 (0) 50 0 00 01 00
                        Bereikbaarheid:
                        Van maandag t/m vrijdag vanaf 10.00 uur tot 13.00 uur
                    </section>
                    <section className="text">
                        Indien je een e–mail wil sturen, gebruik dan het contactformulier.

                        Heb je een vraag over het gebruik van Superdate, stuur dan een e-mail naar:
                        klantenservice@superdate.nl.
                    </section>

                </div>
            </main>
        </>
    );
}

export default About;