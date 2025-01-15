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
                        <h4>Contact Form</h4>
                        <article className="text">
                            If you would like to send an email, please use the contact form below.
                        </article>
                        <form className="contact-content">
                            <label className="item" htmlFor="name-field">
                                Name:
                                <input
                                    className="text"
                                    type="text"
                                    name="name"
                                    id="name-field"
                                />
                            </label>

                            <label
                                className="item" htmlFor="email-field">
                                E-mail:
                                <input
                                    className="text"
                                    type="text"
                                    name="email"
                                    id="email-field"
                                />
                            </label>

                            <label className="item" htmlFor="message-field">
                                Message:
                                <textarea
                                    className="text"
                                    id="message-field"
                                    rows="4"
                                    cols="40"
                                    placeholder="Leave your message"
                                    name="message-content"
                                ></textarea>
                            </label>

                            <button type="submit">
                                Send
                            </button>
                        </form>

                    </section>
                </div>
            </main>
        </>
    );
}

export default Contact;