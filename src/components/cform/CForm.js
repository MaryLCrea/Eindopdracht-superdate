import React from 'react';
import './CForm.css';
import {useForm} from 'react-hook-form';
import Telephone from "../../assets/telephone.jpg";

function CForm({title, description, fields, submitText, onSubmit}) {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onFormSubmit(data) {
        if (onSubmit) {
            onSubmit?.(data);
        }
    }

    return (
        <section className="outer-page-container">
            <section className="inner-page-container pages">
                <header>
                    <h4>{title}</h4>
                    <p className="text">{description}</p>
                </header>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {fields.map((field) => (
                        <label key={field.name} htmlFor={field.name}>
                            {field.label}:
                            {field.type === "textarea" ? (
                                <textarea
                                    id={field.name}
                                    className="wide-input"
                                    placeholder={field.placeholder}
                                    {...register(field.name, field.validation)}
                                    aria-invalid={errors[field.name] ? "true" : "false"}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    className="wide-input"
                                    placeholder={field.placeholder}
                                    {...register(field.name, field.validation)}
                                    aria-invalid={errors[field.name] ? "true" : "false"}
                                />
                            )}
                            {errors[field.name] && (
                                <p className="error-message">{errors[field.name].message}</p>
                            )}
                        </label>
                    ))}

                    <button className="contact-button" type="submit">{submitText}</button>
                </form>
            </section>

            <section className="pica-container">
                <img src={Telephone} alt="telefoon"/>
            </section>
        </section>
    );
}

export default CForm