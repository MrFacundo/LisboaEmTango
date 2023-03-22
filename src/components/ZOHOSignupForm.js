import { useTranslation } from "react-i18next";
import { FormContainer, Input, Label, SubmitButton } from "../globalStyles";
import React, { useState } from "react";

// styles

const ZOHOSignupForm = ({ status, message, onValidated }) => {
	const { t } = useTranslation();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<FormContainer>
			<div
				id="sf3z6827e0895c7b6d3b0dbe631c66662064fb5422e7a478233b5e561a4c46667856"
				data-type="signupform"
				style={{ opacity: 1 }}
			>
				<div id="customForm">
					<div className="quick_form_18_css" name="SIGNUP_BODY">
						<div style={{ textAlign: "center" }}>
							<div style={{ position: "relative" }}>
								<div
									id="Zc_SignupSuccess"
									style={{
										display: "none",
										position: "absolute",
										marginLeft: "4%",
										width: "90%",
										backgroundColor: "white",
										padding: 3,
										border: "3px solid rgb(194, 225, 154)",
										marginTop: 10,
										marginBottom: 10,
										wordBreak: "break-all",
									}}
								>
									<table
										width="100%"
										cellPadding={0}
										cellSpacing={0}
										border={0}
									>
										<tbody>
											<tr>
												<td width="10%">
													<img
														className="successicon"
														src="https://zcv4-zcmp.maillist-manage.eu/images/challangeiconenable.jpg"
														align="absmiddle"
													/>
												</td>
												<td>
													<span
														id="signupSuccessMsg"
														style={{
															color: "rgb(73, 140, 132)",
															fontFamily:
																"sans-serif",
															fontSize: 14,
															wordBreak:
																"break-word",
														}}
													>
														&nbsp;&nbsp;Thank you
														for Signing Up
													</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<form
								method="POST"
								id="zcampaignOptinForm"
								style={{ margin: 0, width: "100%" }}
								action="https://zcv4-zcmp.maillist-manage.eu/weboptin.zc"
								target="_zcSignup"
							>
								<div
									style={{
										backgroundColor: "rgb(255, 235, 232)",
										padding: 10,
										color: "rgb(210, 0, 0)",
										fontSize: 11,
										margin: "20px 10px 0px",
										border: "1px solid rgb(255, 217, 211)",
										opacity: 1,
										display: "none",
									}}
									id="errorMsgDiv"
								>
									Please correct the marked field(s) below.
								</div>
								<div className="text-left pb-10">
									<Label htmlFor="CONTACT_EMAIL">
										{t("form.email")}
									</Label>
									<Input
										type="text"
										changeitem="SIGNUP_FORM_FIELD"
										name="CONTACT_EMAIL"
										id="EMBED_FORM_EMAIL_LABEL"
									/>
								</div>
								<div className="text-left pb-10">
									<Label htmlFor="name">
										{t("form.name_fullname")}
									</Label>
									<Input
										type="text"
										changeitem="SIGNUP_FORM_FIELD"
										name="LASTNAME"
										id="EMBED_FORM_NAME_LABEL"
									/>
								</div>
								<div>
									<SubmitButton
										type="button"
										name="SIGNUP_SUBMIT_BUTTON"
										id="zcWebOptin"
										defaultValue="Join Now"
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
									defaultValue="11f03c66a4f04a33"
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
									defaultValue="3z6827e0895c7b6d3b0dbe631c66662064fb5422e7a478233b5e561a4c46667856"
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
				style={{
					display: "none",
					textAlign: "center",
					backgroundColor: "rgb(0, 0, 0)",
					opacity: "0.5",
					zIndex: 100,
					position: "fixed",
					width: "100%",
					top: 0,
					left: 0,
					height: 988,
				}}
			/>
			<div
				id="zcOptinSuccessPopup"
				style={{
					display: "none",
					zIndex: 9999,
					width: 800,
					height: "40%",
					top: 84,
					position: "fixed",
					left: "26%",
					backgroundColor: "#FFFFFF",
					borderColor: "#E6E6E6",
					borderStyle: "solid",
					borderWidth: 1,
					boxShadow: "0 1px 10px #424242",
					padding: 35,
				}}
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
