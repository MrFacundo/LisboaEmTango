import tw from "twin.macro";
import { Element } from "react-scroll";
import { Title } from "../styles";
import Map from "../components/Map";
import Form from "../components/Form";

const location = {
	address: "Clube Ferroviário de Portugal",
	lat: 38.71915288600478,
	lng: -9.118489015809267,
};

const ContactContainer = tw(Element)`
    w-full
    h-screen
    flex
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
    justify-center
    bg-[rgba(107, 40, 169, 0.3)]
`;

const ContactSectionWrapper = tw.div`
    w-[90%]
    height[70%]
    flex
`;

const Description = tw.div`
	w-[90%]
	pt-5
	min-h-[8rem]
	text-white
`;

const Address = tw.div`
    border-r-2
    flex-1
`;

const AddressDesctiption = tw(Description)`
`;

const Registration = tw.div`
	border-r-2
	flex-1
`;

const RegistrationDescription = tw(Description)`
	pl-[3rem]
`;

const Newsletter = tw.div`
flex-1


`;
const ContactSection = () => {
	return (
		<ContactContainer>
			<ContactSectionWrapper>
				<Address>
					<Title className="title">ADDRESS</Title>
					<AddressDesctiption className="address">
						Clube Ferroviário de Portugal <br />
						Rua de Santa Apolónia 59, 1100-468 Lisboa
					</AddressDesctiption>
					<Map location={location} zoomLevel={14} />
				</Address>
				<Registration>
					<Title>REGISTRATION</Title>
					<RegistrationDescription>
						If you want to register to classes and workshops, need information
						or have any questions, we are here for you...
					</RegistrationDescription>
					<Form />
				</Registration>
				<Newsletter>
					<Title>NEWSLETTER</Title>
				</Newsletter>
			</ContactSectionWrapper>
		</ContactContainer>
	);
};

export default ContactSection;
