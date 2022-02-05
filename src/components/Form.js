import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import tw from "twin.macro";

const FORMSPARK_FORM_ID = "fUGCECB4";

const FormContainer = tw.div`
w-2/3 m-auto shadow-lg
`;

// const submitForm = () => {};

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
			class: "bg-green-500",
			text: "Thanks, someone will be in touch shortly.",
		});
	};

	return (
		<FormContainer>
			<form onSubmit={onSubmit}>
				<div className="my-2 flex flex-col">
					<label htmlFor="name">Name</label>
					<input
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						className="border-2 p-2"
						type="text"
						id="name"
						required
						maxlength="30"
					/>
				</div>
				<div className="my-2 flex flex-col">
					<label htmlFor="email">Email</label>
					<input
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
					<label htmlFor="message">Message</label>

					<textarea
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
						className="border-2 p-2"
						type="message"
						id="message"
						required
						maxlength="100"
					/>
				</div>
				{notification && (
					<div className={`my-4 text-white w-full p-4 ${notification.class}`}>
						{notification.text}
					</div>
				)}
				<button
					type="submit"
					disabled={submitting}
					className="mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200"
				>
					{submitting ? "Submitting..." : "Submit"}
				</button>
			</form>
		</FormContainer>
	);
};

export default Form;
