import React from 'react';
import './Contact.css';
import TopMenu from "../../components/topmenu/TopMenu";

function Contact() {


    return (
        <>
            <TopMenu/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">
                    <section className="contact-form">
                        <h4>Contactformulier</h4>
                        <article className="text">
                            Indien je een e–mail wil sturen, gebruik dan onderstaand contactformulier.
                        </article>
                        <form className="contact-content">
                            <label className="item" htmlFor="name-field">
                                Naam:
                                <input
                                    className="text"
                                    type="text"
                                    name="name"
                                    id="name-field"
                                />
                            </label>

                            <label
                                className="item" htmlFor="email-field">
                                Email:
                                <input
                                    className="text"
                                    type="text"
                                    name="email"
                                    id="email-field"
                                />
                            </label>

                            <label className="item" htmlFor="message-field">
                                Bericht:
                                <textarea
                                    className="text"
                                    id="message-field"
                                    rows="4"
                                    cols="40"
                                    placeholder="Laat je bericht achter"
                                    name="message-content"
                                ></textarea>
                            </label>

                            <button type="submit">
                                Versturen
                            </button>
                        </form>

                    </section>
                </div>
            </main>
        </>
    );
}

export default Contact;