import React from 'react';
import './About.css';
import {Link} from "react-router-dom";
import HomeLink from "../../components/homelink/HomeLink";
import NavBarHome from "../../components/navbarhome/NavBarHome";

function About() {
    return (
        <>
            <NavBarHome/>
            <section className="outer-page-container">

                <section className="inner-page-container pages">
                    <header>
                        <h4>About Us</h4>
                    </header>
                    <article className="text">SuperDate is one of the largest online dating sites in Europe for singles
                        who are looking for a serious relationship.
                    </article>
                    <article className="text">SuperDate trades in the Netherlands under the name ML-Creatons.</article>
                    <article className="text">
                        Address:
                        ML-Creatons
                        Fakestreet 200
                        1000 AA London
                    </article>
                    <article className="text">
                        Tel.: +31 (0) 50 0 00 01 00
                        Accessibility:
                        Monday to Friday from 10am to 1pm
                    </article>
                    <article className="text">
                        <p>
                            If you would like to send an email, please use the
                            <a href="/contact" title="Go to the contact form"> contact form</a>.

                            If you have a question about using SuperDate, please send us an e-mail to the following
                            e-mail
                            address: customerservice@superdate.nl.
                        </p>
                    </article>
                    <HomeLink/>
                </section>
            </section>
        </>
    );
}

export default About;