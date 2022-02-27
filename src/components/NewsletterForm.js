import MailchimpSubscribe from "react-mailchimp-subscribe";
import tw from "twin.macro";
import { FormContainer, Input, Label, Button } from "./Form";
import React, { useState } from "react";

const url =
	"https://gmail.us14.list-manage.com/subscribe/post?u=79f86b4b6948f2f4d082c9ddb&id=7c8bdfc881";

// styles

const CustomForm = ({ status, message, onValidated }) => {
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
				<Label htmlFor="name">First name or full name</Label>
				<Input
					onChange={(e) => setName(e.target.value)}
					type="text"
					value={name}
					id="name"
					required
				/>
				<Label htmlFor="email">Email</Label>

				<Input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					value={email}
					id="email"
					required
				/>
				<Button type="submit">
					{status === "sending" ? "Subscribing..." : "Subscribe"}
				</Button>
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
