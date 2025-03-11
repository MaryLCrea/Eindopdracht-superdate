import React from 'react';
import './CForm.css';
import { useForm } from 'react-hook-form';
import Telephone from "../../assets/telephone.jpg";

function CForm({ title, description, fields, submitText, onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onFormSubmit(data) {
        if (onSubmit) {
            onSubmit(data);
        }
    }

    return (
        <main className="outer-page-container">
            <div className="inner-page-container pages">
                <section>
                    <h4>{title}</h4>
                    <p className="text">{description}</p>

                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        {fields.map((field) => (
                            <label key={field.name} htmlFor={field.name}>
                                {field.label}:
                                <input
                                    type={field.type}
                                    id={field.name}
                                    className="wide-input"
                                    placeholder={field.placeholder}
                                    {...register(field.name, field.validation)}
                                />
                                {errors[field.name] && (
                                    <p className="error-message">{errors[field.name].message}</p>
                                )}
                            </label>
                        ))}

                        <button className="contact-button" type="submit">{submitText}</button>
                    </form>
                </section>
            </div>
            <section className="pica-container">
                <img src={Telephone} alt="telefoon" />
            </section>
        </main>
    );
}

export default CForm