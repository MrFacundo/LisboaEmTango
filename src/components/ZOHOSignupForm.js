import { useTranslation } from "react-i18next";
import { FormContainer, Input, Label, SubmitButton } from "../globalStyles";

const ZOHOSignupForm = () => {
	const { t } = useTranslation();

	return (
		<FormContainer>
			<div
				id="sf3z6827e0895c7b6d3b0dbe631c666620648d20a9d25d3bbca547aeb585ef5ae116"
				data-type="signupform"
				style={{ opacity: 1 }}
			>
				<div id="customForm">
					<div className="quick_form_26_css" name="SIGNUP_BODY">
						<div>
							<form
								method="POST"
								id="zcampaignOptinForm"
								action="https://zcv4-zcmp.maillist-manage.eu/weboptin.zc"
								target="_zcSignup"
							>
								<div className="text-left pb-10">
									<Label htmlFor="CONTACT_EMAIL">
										{t("form.email")}
									</Label>
									<Input
										type="text"
										changeitem="SIGNUP_FORM_FIELD"
										name="CONTACT_EMAIL"
										id="EMBED_FORM_EMAIL_LABEL"
										required
									/>
								</div>
								<div className="text-left pb-10">
									<Label htmlFor="name">
										{t("form.name_fullname")}
									</Label>
									<Input
										type="text"
										changeitem="SIGNUP_FORM_FIELD"
										name="FIRSTNAME"
										id="FIRSTNAME"
										required
									/>
								</div>
								<div>
									<SubmitButton
										type="button"
										name="SIGNUP_SUBMIT_BUTTON"
										id="zcWebOptin"
									>
										{t("form.subscribe")}
									</SubmitButton>
								</div>
								<input
									type="hidden"
									id="fieldBorder"
									defaultValue=""
								/>
								<input
									type="hidden"
									id="submitType"
									name="submitType"
									defaultValue="optinCustomView"
								/>
								<input
									type="hidden"
									id="emailReportId"
									name="emailReportId"
									defaultValue=""
								/>
								<input
									type="hidden"
									id="formType"
									name="formType"
									defaultValue="QuickForm"
								/>
								<input
									type="hidden"
									name="zx"
									id="cmpZuid"
									defaultValue="14ad4bcee8"
								/>
								<input
									type="hidden"
									name="zcvers"
									defaultValue={2.0}
								/>
								<input
									type="hidden"
									name="oldListIds"
									id="allCheckedListIds"
									defaultValue=""
								/>
								<input
									type="hidden"
									id="mode"
									name="mode"
									defaultValue="OptinCreateView"
								/>
								<input
									type="hidden"
									id="zcld"
									name="zcld"
									defaultValue="11f03c66a4f04d91"
								/>
								<input
									type="hidden"
									id="zctd"
									name="zctd"
									defaultValue="11f03c66a4f04979"
								/>
								<input
									type="hidden"
									id="document_domain"
									defaultValue=""
								/>
								<input
									type="hidden"
									id="zc_Url"
									defaultValue="zcv4-zcmp.maillist-manage.eu"
								/>
								<input
									type="hidden"
									id="new_optin_response_in"
									defaultValue={0}
								/>
								<input
									type="hidden"
									id="duplicate_optin_response_in"
									defaultValue={0}
								/>
								<input
									type="hidden"
									name="zc_trackCode"
									id="zc_trackCode"
									defaultValue="ZCFORMVIEW"
								/>
								<input
									type="hidden"
									id="zc_formIx"
									name="zc_formIx"
									defaultValue="3z6827e0895c7b6d3b0dbe631c666620648d20a9d25d3bbca547aeb585ef5ae116"
								/>
								<input
									type="hidden"
									id="viewFrom"
									defaultValue="URL_ACTION"
								/>
								<span
									style={{ display: "none" }}
									id="dt_CONTACT_EMAIL"
								>
									1,true,6,Contact Email,2
								</span>
								<span
									style={{ display: "none" }}
									id="dt_FIRSTNAME"
								>
									1,false,1,First Name,2
								</span>
								<span
									style={{ display: "none" }}
									id="dt_LASTNAME"
								>
									1,false,1,Last Name,2
								</span>
							</form>
						</div>
					</div>
				</div>
				<img
					src="https://zcv4-zcmp.maillist-manage.eu/images/spacer.gif"
					id="refImage"
					onload="referenceSetter(this)"
					style={{ display: "none" }}
				/>
			</div>
			<input
				type="hidden"
				id="signupFormType"
				defaultValue="QuickForm_Vertical"
			/>
			<div
				id="zcOptinOverLay"
				oncontextmenu="return false"
			/>
			<div
				id="zcOptinSuccessPopup"
			>
				<span
					style={{
						position: "absolute",
						top: "-16px",
						right: "-14px",
						zIndex: 99999,
						cursor: "pointer",
					}}
					id="closeSuccess"
				>
					<img src="https://zcv4-zcmp.maillist-manage.eu/images/videoclose.png" />
				</span>
				<div id="zcOptinSuccessPanel" />
			</div>
		</FormContainer>
	);
};

export default ZOHOSignupForm;
