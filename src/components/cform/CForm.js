import React from 'react';
import './CForm.css';
import { useForm } from 'react-hook-form';
import Telephone from "../../assets/telephone.jpg";

function CForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    console.log("ERRORS", errors);

    return (
        <main className="outer-page-container">
            <div className="inner-page-container pages">
                <section>
                    <h4>Contact Form</h4>
                    <p className="text"> Please feel free to contact us</p>

                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <fieldset>
                            <label htmlFor="details-name">
                                Name:
                                <input
                                   type="text"
                                    id="details-name"
                                    className="wide-input"
                                    placeholder= "Enter your name"
                                    {...register("name", {
                                        required: "Naam is verplicht",
                                        minLength: {
                                            value: 2,
                                            message: "Naam moet minimaal 2 karakters bevatten"
                                        }
                                    })}
                                />
                                {errors.name && <p className="error-message">{errors.name.message}</p>}
                            </label>

                            <label htmlFor="details-email">
                                E-mail:
                                <input
                                    type="email"
                                    id="details-email"
                                    placeholder= "Enter your e-mail address"
                                    {...register("email", {
                                        required: "Het veld e-mailadres is verplicht",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Voer een geldig e-mailadres in"
                                        }
                                    })}
                                />
                                {errors.email && <p className="error-message">{errors.email.message}</p>}

                            </label>
                        </fieldset>

                        <fieldset>
                            <legend>Questions/comments:</legend>
                            <label htmlFor="comments">
                                <textarea
                                    placeholder= "Here you can leave your message"
                                    {...register("comments", {
                                        minLength: {
                                            value: 10,
                                            message: "Je moet minimaal 10 tekens invoeren"
                                        },
                                        maxLength: {
                                            value: 150,
                                            message: "Je mag maximaal 150 tekens invoeren"
                                        }
                                    })}
                                    id="comments"
                                    className="textarea"
                                    rows="6"
                                    placeholder="Enter your message here"
                                />
                                {errors.comments && <p className="error-message">{errors.comments.message}</p>}
                            </label>
                        </fieldset>

                        <button className="contact-button" type="submit">Send</button>
                    </form>
                </section>
            </div>
    <section className="pica-container">
        <img src={Telephone} alt="telefoon"/>
    </section>
        </main>
    );
}

export default CForm;