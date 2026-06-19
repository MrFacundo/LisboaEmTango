import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Element } from "react-scroll";


import img from "../images";

import { createImage } from "../utils";

const flyerImage = createImage("Portugal Em Tango", "Portugal Em Tango", img.specialEvent, img.specialEvent);

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
    md:w-4/5
    md:h-5/6
    border-yellow-300
    border-4
    border-solid
    rounded-2xl
    flex
    flex-col
    justify-center
    items-center
    p-4
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
            <Section>
                <SectionTitle> {t("specialEvent.title")}</SectionTitle>
                <SectionTitle> {t("specialEvent.title2")}</SectionTitle>
                <Flyer>
                    <FlyerImg src={flyerImage.src} alt={flyerImage.title} width="450" />
                </Flyer>
                <div style={{ textAlign: "center" }}>
                    <SectionExternalLink> {t("specialEvent.p2")}</SectionExternalLink>
                    <a href="http://www.portugalemtango.pt" target="_blank" rel="noreferrer">
                        <SectionExternalLink className="underline">{t("specialEvent.p3")}</SectionExternalLink>
                    </a>
                </div>
            </Section>
        </Container>
    );
};

export default SpecialEvent;