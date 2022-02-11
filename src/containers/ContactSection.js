import tw from "twin.macro";
import { Element } from "react-scroll";
import { Title } from "../styles";
import Map from "../components/Map";
import Form from "../components/Form";
import { BsFacebook, BsInstagram, BsTelephone } from "react-icons/bs";

const location = {
	address: "Clube Ferroviário de Portugal",
	lat: 38.71915288600478,
	lng: -9.118489015809267,
};

const ContactContainer = tw(Element)`
	text-white
    w-full
    min-h-screen
    flex
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    justify-center
    bg-[rgba(107, 40, 169, 0.3)]
`;

const ContactSectionWrapper = tw.div`
    max-w-[90%]
    height[90%]
    flex
	flex-col
	lg:mt-[3rem]

	lg:flex-row
	lg:items-stretch
`;

const SectionTitle = tw(Title)`
	w-[90%]
	text-align[left]
	lg:text-align[center]
	md:text-5xl
	mx-auto
	my-0
	mt-0
`;

const Description = tw.div`
	w-[90%]
	pt-5
	min-h-[8rem]
	m-auto
`;

const Address = tw.div`
    lg:border-r-2
    flex-1
	pb-10
	lg:pb-0
	h-auto
`;

const AddressDesctiption = tw(Description)`
`;

const Registration = tw.div`
	border-t-2
	lg:border-t-0
	lg:border-r-2
	flex-1
	pb-10
	lg:pb-0
`;

const RegistrationDescription = tw(Description)`
	lg:pl-[3rem]
`;

const Contacts = tw.div`
	w-[80%]
	pt-5
	margin[auto]
`;

const SocialIcons = tw.div`
	pt-10
	max-w-[20rem]
	flex
	margin[auto]
	justify-around
`;

const Button = tw.a`
	text-5xl
	hover:text-gray-400
	transition-colors
	duration-200
`;

const Newsletter = tw.div`
	flex-1
	border-t-2
	lg:border-t-0
`;
const ContactSection = () => {
	return (
		<ContactContainer name="Contact">
			<ContactSectionWrapper>
				<Address>
					<SectionTitle>ADDRESS</SectionTitle>
					<AddressDesctiption>
						Clube Ferroviário de Portugal <br />
						Rua de Santa Apolónia 59, 1100-468 Lisboa
					</AddressDesctiption>
					<Map location={location} zoomLevel={14} />
				</Address>
				<Registration>
					<SectionTitle>CONTACT US</SectionTitle>
					<RegistrationDescription>
						If you want to register to classes and workshops, need information
						or have any questions, we are here for you...
					</RegistrationDescription>
					<Form />
					<Contacts>
						<p className="flex flex-row pb-3">
							{" "}
							<BsTelephone className="mr-3 text-3xl" />
							0178 2903100
						</p>
						<p>info@tangotanzenmachtschoen.de</p>
						<SocialIcons>
							<Button
								href={"member.social.facebook"}
								target={"_blank"}
								rel="noopener noreferrer"
							>
								<BsInstagram />
							</Button>
							<Button
								href={"member.social.facebook"}
								target={"_blank"}
								rel="noopener noreferrer"
							>
								<BsFacebook />
							</Button>
						</SocialIcons>
					</Contacts>
				</Registration>
				<Newsletter>
					<SectionTitle>NEWSLETTER</SectionTitle>
				</Newsletter>
			</ContactSectionWrapper>
		</ContactContainer>
	);
};

export default ContactSection;
