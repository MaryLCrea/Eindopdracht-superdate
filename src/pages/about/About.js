import React from 'react';
import './About.css';
import HomeHeader from "../../components/homeheader/HomeHeader";
import {Link} from "react-router-dom";
import HomeLink from "../../components/homelink/HomeLink";

function About() {
    return (
        <>
            <HomeHeader/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">
                    <h4>About Us</h4>
                    <section className="text">Superdate is one of the largest online dating sites in Europe for singles
                        who are looking for a serious relationship.
                    </section>
                    <section className="text">Super Date trades in the Netherlands under the name ML-Creatons.</section>
                    <section className="text">
                        Address:
                        ML-Creatons
                        Fakestreet 200
                        1000 AA London
                    </section>
                    <section className="text">
                        Tel.: +31 (0) 50 0 00 01 00
                        Accessibility:
                        Monday to Friday from 10am to 1pm
                    </section>
                    <section className="text">
                        <p>
                            If you would like to send an email, please use the
                            <a href="/contact" title="Go to the contact form"> contact form</a>.
                        </p>
                        If you have a question about using Superdate, please send us an e-mail to the following e-mail
                        address: customerservice@superdate.nl.
                    </section>
                    <HomeLink/>
                </div>
            </main>
        </>
    );
}

export default About;