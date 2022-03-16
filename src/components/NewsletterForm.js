import { useTranslation } from "react-i18next";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FormContainer, Input, Label, SubmitButton } from "../globalStyles";
import React, { useState } from "react";

const url = `${process.env.REACT_APP_MAILCHIMP_URL}u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

// styles

const CustomForm = ({ status, message, onValidated }) => {
	const { t } = useTranslation();

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		email &&
			name &&
			email.indexOf("@") > -1 &&
			onValidated({
				MERGE1: name,
				MERGE0: email,
			});
	};

	return (
		<FormContainer>
			<form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
				<Label htmlFor="name">{t("form.name_fullname")}</Label>
				<Input
					onChange={(e) => setName(e.target.value)}
					type="text"
					value={name}
					id="name"
					required
				/>
				<Label htmlFor="email">{t("form.email")}</Label>

				<Input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					value={email}
					id="email"
					required
				/>
				<SubmitButton type="submit">
					{status === "sending" ? t("form.subscribing") : t("form.subscribe")}
				</SubmitButton>
				{status === "error" && (
					<div dangerouslySetInnerHTML={{ __html: message }} />
				)}
				{status === "success" && (
					<div dangerouslySetInnerHTML={{ __html: message }} />
				)}
			</form>
		</FormContainer>
	);
};

const NewsletterForm = () => (
	<MailchimpSubscribe
		url={url}
		render={({ subscribe, status, message }) => (
			<CustomForm
				status={status}
				message={message}
				onValidated={(formData) => subscribe(formData)}
			/>
		)}
	/>
);
export default NewsletterForm;
