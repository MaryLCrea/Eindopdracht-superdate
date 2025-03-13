import React from 'react';
import CForm from "../../components/cform/CForm";
import HomeLink from "../../components/homelink/HomeLink";
import NavBarHome from "../../components/navbarhome/NavBarHome";

function Contact() {
    return (
        <>
            <NavBarHome/>
            <CForm
                title="Contact"
                description="Leave a message and we will contact you."
                fields={[
                    {
                        name: "name",
                        label: "Name",
                        type: "text",
                        placeholder: "Your Name",
                        validation: { required: "Name required" }
                    },
                    {
                        name: "email",
                        label: "E-mail",
                        type: "email",
                        placeholder: "Your e-mail",
                        validation: { required: "E-mail is required" }
                    },
                    {
                        name: "message",
                        label: "Message",
                        type: "textarea",
                        placeholder: "Your Message",
                        validation: { required: "Message is required" }
                    }
                ]}
                submitText="Send"
                onSubmit={() => {}}
            />
            <HomeLink/>
        </>
    );
}

export default Contact;