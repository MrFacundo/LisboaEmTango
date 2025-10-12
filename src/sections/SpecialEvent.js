import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Element } from "react-scroll";

import Pennant from "../components/Pennant";

import img from "../images";

import { createImage } from "../utils";

const flyerImage = createImage("Portugal Em Tango", "Portugal Em Tango", img.specialEvent, img.specialEvent);
const pennantImages = [
    createImage("anniversary.title", "anniversary.title", img.pennantL, img.pennantLfb),
    createImage("anniversary.title", "anniversary.title", img.pennantR, img.pennantRfb),
    createImage("anniversary.title", "anniversary.title", img.pennantLD, img.pennantLDfb),
    createImage("anniversary.title", "anniversary.title", img.pennantRD, img.pennantRDfb),
];

const Container = tw(Element)`
    text-white
    w-full
    flex
    flex-col
    items-center
    bg-primary
    relative
    py-10
`;

const Section = tw.div`
    w-[90%]
    h-[55rem]
    md:w-4/5
    md:h-5/6
    border-yellow-300
    border-4
    border-solid
    rounded-2xl
    place-items-center
`;

const SectionTitle = tw.h1`
    font-title
    px-10
    py-6
    text-center
    text-2xl
    md:text-3xl
    xl:text-3xl
    2xl:text-5xl
`;

const SectionExternalLink = tw.span`
    font-title
    py-6
    text-center
    text-xl
    md:text-3xl
    xl:text-3xl
    2xl:text-5xl
`;

const Info = tw.p`
    font-text
    text-xl
    text-justify
    mb-[1rem]
    md:mt-[1rem]
    2xl:mt-2
    xl:max-w-3xl
    px-4
    lg:px-2
`;

const Flyer = tw.div`
    p-8
    md:p-10
    cursor-pointer
    hover:scale-105
    duration-300
`;

const FlyerImg = tw.img`
    cursor-pointer
    shadow-xl
    shadow-neutral-500
`;

const SpecialEvent = () => {
    const { t } = useTranslation();

    return (
        <Container name="SpecialEvent">
            <Pennant style={{ left: 0, top: 0 }} image={pennantImages[0]} />
            <Pennant style={{ right: 0, top: 0 }} image={pennantImages[1]} />
            <Section>
                <SectionTitle> {t("specialEvent.title")}</SectionTitle>
                <SectionTitle> {t("specialEvent.title2")}</SectionTitle>
                <Flyer>
                    <FlyerImg src={flyerImage.src} alt={flyerImage.title} width="450" />
                </Flyer>
                <div>
                    <SectionExternalLink> {t("specialEvent.p2")}</SectionExternalLink>
                    <a href="http://www.portugalemtango.pt" target="_blank" rel="noreferrer">
                        <SectionExternalLink className="underline">{t("specialEvent.p3")}</SectionExternalLink>
                    </a>
                </div>
            </Section>
            <Pennant style={{ left: 0, bottom: 0 }} image={pennantImages[2]} />
            <Pennant style={{ right: 0, bottom: 0 }} image={pennantImages[3]} />
        </Container>
    );
};

export default SpecialEvent;