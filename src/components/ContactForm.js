import { useTranslation } from "react-i18next";
import { useState } from "react";
import tw from "twin.macro";
import { FormContainer, Input, Label, SubmitButton } from "../globalStyles";

const TextArea = tw.textarea`
	rounded-sm
	p-2
	bg-secondary
	border
	border-gray-500
`;

const ContactForm = () => {
    const { t } = useTranslation();

    const initialFormState = {
        email: "",
        name: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormState);

    const [notification, setNotification] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                "form-name": "contact",
                subject: `solicitud de información de ${formData.name} desde Lisboa em Tango`,
                ...formData,
            }).toString(),
        })
            .then(() => {
                setFormData(initialFormState);
                setNotification({
                    text: t("form.success"),
                });
            })
            .catch(console.error);
    };

    return (
        <FormContainer>
            <form
                name="contact"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={onSubmit}
                className="shadow-none"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="subject"
                    value={`solicitud de información de ${formData.name} desde Lisboa em Tango`} />

                <div className="flex flex-col">
                    <Label htmlFor="name">{t("form.name")}</Label>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        type="text"
                        id="name"
                        required
                        maxLength="30"
                    />
                </div>

                <div className="flex flex-col">
                    <Label htmlFor="email">{t("form.email")}</Label>
                    <Input
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        id="email"
                        type="email"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <Label htmlFor="message">{t("form.message")}</Label>

                    <TextArea
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        id="message"
                        required
                        maxLength="100"
                        rows={4}
                    />
                </div>

                <SubmitButton type="submit">
                    {t("form.submit")}
                </SubmitButton>

                {notification && (
                    <div className="my-2 w-full p-4 bg-green-500">
                        {notification.text}
                    </div>
                )}
            </form>
        </FormContainer>
    );
};

export default ContactForm;
