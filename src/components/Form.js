import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import tw from "twin.macro";

const FORMSPARK_FORM_ID = "fUGCECB4";

const FormContainer = tw.div`
	w-[90%]
	md:w-[70%]
	lg:w-2/3
	m-auto
	shadow-lg
`;

const Input = tw.input`
	rounded-sm
	p-2
	bg-[#1A222F]
	border
	border-gray-500
`;

const Label = tw.label`
	mb-2
	md:text-[1.5rem]
	lg:text-[1.2rem]
	font-semibold
`;

const TextArea = tw.textarea`
	rounded-sm
	p-2
	bg-[#1A222F]
	border
	border-gray-500
`;

const Button = tw.button`
	mt-4
	my-2
	bg-blue-700
	w-full
	p-2
	hover:bg-blue-900
	transition-colors
	duration-200
`;

const Form = () => {
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
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
			<form onSubmit={onSubmit}>
				<div className="flex flex-col">
					<Label htmlFor="name">Name</Label>
					<Input
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						type="text"
						id="name"
						required
						maxLength="30"
					/>
				</div>
				<div className="my-2 flex flex-col">
					<Label htmlFor="email">Email</Label>
					<Input
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						className="border-2 p-2"
						id="email"
						required
						pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
					/>
				</div>
				<div className="my-2 flex flex-col">
					<Label htmlFor="message">Message</Label>

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
				{notification && (
					<div className={`my-4 text-white w-full p-4 bg-green-500"`}>
						{notification.text}
					</div>
				)}
				<Button type="submit" disabled={submitting}>
					{submitting ? "Submitting..." : "Submit"}
				</Button>
			</form>
		</FormContainer>
	);
};

export default Form;
