import React from 'react';
import CForm from "../../components/cform/CForm";
import HomeLink from "../../components/homelink/HomeLink";
import NavBarHome from "../../components/navbarhome/NavBarHome";

function Contact() {
    return (
        <>
            <NavBarHome/>
            <CForm
                title="Contact opnemen"
                description="Laat hier je bericht achter en we nemen contact met je op."
                fields={[
                    {
                        name: "name",
                        label: "Naam",
                        type: "text",
                        placeholder: "Je naam",
                        validation: { required: "Naam is verplicht" }
                    },
                    {
                        name: "email",
                        label: "E-mail",
                        type: "email",
                        placeholder: "Je e-mail",
                        validation: { required: "E-mail is verplicht" }
                    },
                    {
                        name: "message",
                        label: "Bericht",
                        type: "textarea",
                        placeholder: "Je bericht",
                        validation: { required: "Bericht is verplicht" }
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