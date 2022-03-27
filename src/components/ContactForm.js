import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import tw from "twin.macro";
import { FormContainer, Input, Label, SubmitButton } from "../globalStyles";

const formsparkFormId = process.env.REACT_APP_FORMSPARK_FORM_ID;

// styles

const TextArea = tw.textarea`
	rounded-sm
	p-2
	bg-secondary
	border
	border-gray-500
`;

const ContactForm = () => {
	const { t } = useTranslation();

	const [submit, submitting] = useFormspark({
		formId: formsparkFormId,
	});

	const initialFormState = {
		email: "",
		name: "",
		message: "",
	};

	const [formData, setFormData] = useState(initialFormState);

	const [notification, setNotification] = useState();

	const onSubmit = async (e) => {
		e.preventDefault();
		await submit({ ...formData });
		setFormData(initialFormState);
		setNotification({
			text: "Thanks, someone will be in touch shortly.",
		});
	};

	return (
		<FormContainer>
			<form className="shadow-none" onSubmit={onSubmit}>
				<div className="flex flex-col">
					<Label htmlFor="name">{t("form.name")}</Label>
					<Input
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						type="text"
						id="name"
						required
						maxLength="30"
					/>
				</div>
				<div className="flex flex-col">
					<Label htmlFor="email">{t("form.email")}</Label>
					<Input
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						id="email"
						type="email"
						required
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					/>
				</div>
				<div className="flex flex-col">
					<Label htmlFor="message">{t("form.message")}</Label>

					<TextArea
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
						type="message"
						id="message"
						required
						maxLength="100"
						rows={4}
					/>
				</div>
				<SubmitButton type="submit" disabled={submitting}>
					{submitting ? t("form.submitting") : t("form.submit")}
				</SubmitButton>
				{notification && (
					<div className={`my-2 w-full p-4 bg-green-500"`}>
						{notification.text}
					</div>
				)}
			</form>
		</FormContainer>
	);
};

export default ContactForm;
