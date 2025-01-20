import React from 'react';
import './Contact.css';
import HomeHeader from "../../components/homeheader/HomeHeader";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <>
            <HomeHeader/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">
                    <section className="contact-form">
                        <h4>Contact Form</h4>
                        <p className="contact-descript">
                            If you have any questions or concerns, feel free to contact us.
                        </p>
                        <form className="contact-content">
                            <label htmlFor="name-field">
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    id="name-field"
                                    placeholder="Enter your name"
                                />
                            </label>
                            <label htmlFor="email-field">
                                E-mail:
                                <input
                                    type="email"
                                    name="email"
                                    id="email-field"
                                    placeholder="Enter your email"
                                />
                            </label>
                            <label htmlFor="message-field">
                                Message:
                                <textarea
                                    id="message-field"
                                    rows="4"
                                    placeholder="Leave your message"
                                    name="message-content"
                                ></textarea>
                            </label>
                            <button type="submit" className="contact-button">
                                Send Message
                            </button>
                        </form>
                    </section>
                </div>
                <Link to="/" className="home-link">⬅ Back to Home</Link>
            </main>
        </>
    );
}

export default Contact;