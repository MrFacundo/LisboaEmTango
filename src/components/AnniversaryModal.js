import React, { useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";

const ModalContainer = tw.div`
    display[flex]
    justify-center
    items-center
    position[fixed]
    z-index[1000]
    left-0
    top-0
    width[100%]
    height[100%]
    overflow-auto
    background-color[rgba(0, 0, 0, 0.7)]
`;

const ModalContent = tw.div`
    bg-[#D4A573]
    text-white
    p-8
    rounded-lg
    max-w-4xl
    shadow-lg
    relative
`;

const CloseButton = tw.span`
    text-white
    text-6xl
    font-bold
    cursor-pointer
    hover:text-gray-300
    absolute
    right-2
    top-[-0.7em]
    md:top-0
    md:right-[-1em]
`;

const ModalBody = tw.div`
    max-h-[80vh]
    overflow-y-auto
`;

const Flyer = tw.div`
    text-left
    font-text
`;

const Title = tw.h1`
    text-yellow-300
    font-title
    text-4xl
    text-center
    mb-6
`;

const Subtitle = tw.h2`
    text-yellow-300
    text-2xl
    font-semibold
    mt-4
    mb-2
    text-center
`;

const Paragraph = tw.p`
    mb-4
    text-base
    md:text-lg
`;

const InfoHeading = tw(Paragraph)`
    font-bold
`;

const List = tw.div`
    text-center
    mb-4
    flex
    flex-wrap
    justify-center
`;

const ListItem = styled.span`
    ${tw`
        mb-2
        text-lg
        whitespace-nowrap
        relative
    `}
    &::after {
        content: '·';
        margin: 0 0.5em;
        display: inline-block;
    }
    &:last-child::after,
    &[data-last-in-line="true"]::after {
        content: none;
    }
`;

const Schedule = tw.ul`
    list-disc
    list-inside
    mb-4
`;

const ScheduleItem = tw.li`
    mb-2
    text-lg
`;

const Info = tw.div`
    text-center
    whitespace-nowrap
`;

const Intro = tw.div`
    text-justify
`;

const artists = [
    "Alexandra Baldaque & Fernando Jorge",
    "Sonia Aires & Paulo Bernardo",
    "Miriam Nielly",
    "Samatha Garcia e Patricio Rodriguez",
    "Rui Barroso",
    "Janice Iandristky",
    "Solange Galvão",
    "Marc Hussner",
    "Flor Razzari",
    "Florencia Gil Bilbao",
    "Graciana Romeo & Juan Capriotti",
    "Amaia Otamendi",
    "Maria Eugenia Brandulo",
    "Inés Gomes"
];

const DJs = [
    "Bruno de Sousa",
    "Paulo Matos",
    "Fernando Teixeira",
    "Maria Beu",
    "Dani Benson",
    "Lino Silva"
];

const photographers = [
    "Manuel Silva",
    "João Filipe Diaz"
]

const accessories = [
    "C.F. TANGO Cristina Ferreira",
    "Ana Francisco",
    "Claire Zhang"
];

const DynamicList = ({ items }) => {
    const listRef = useRef(null);
    const [lastInLineItems, setLastInLineItems] = useState(new Set());

    useEffect(() => {
        const updateLastInLineItems = () => {
            if (!listRef.current) return;

            const newLastInLineItems = new Set();
            let lastBottom = -1;
            const children = Array.from(listRef.current.children);

            children.forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                if (rect.bottom > lastBottom) {
                    if (index > 0) {
                        newLastInLineItems.add(index - 1);
                    }
                    lastBottom = rect.bottom;
                }
            });

            newLastInLineItems.add(children.length - 1);
            setLastInLineItems(newLastInLineItems);
        };

        updateLastInLineItems();
        window.addEventListener('resize', updateLastInLineItems);

        return () => {
            window.removeEventListener('resize', updateLastInLineItems);
        };
    }, [items]);

    return (
        <List ref={listRef}>
            {items.map((item, index) => (
                <ListItem
                    key={index}
                    data-last-in-line={lastInLineItems.has(index)}
                >
                    {item}
                </ListItem>
            ))}
        </List>
    );
};

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <ModalContainer isOpen={isOpen}>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <ModalBody>
                    <Flyer>
                        <Title>PORTUGAL EM TANGO 2024</Title>
                        <Subtitle className="text-center mt-0 mb-5">Special Edition</Subtitle>
                        <Subtitle className="text-center mt-0 mb-5">6 – 8 Dezembro</Subtitle>
                        <br />
                        <Intro>
                            <Paragraph>Depois de alguns anos de pausa, vamos retomar este grande evento com uma "Especial Edition"!!</Paragraph>
                            <Paragraph>Durante mais de 10 edições Portugal[em]Tango abriu as portas a centenas de artistas, de todas as áreas do Tango, sempre foi uma verdadeira FESTA, vivido num ambiente amigável, de convívio e partilha entre os que trabalhamos do Tango de Portugal... e não esperamos menos desta próxima edição.</Paragraph>
                            <Paragraph>Este ano, o evento será realizado dentro do âmbito das celebrações dos 20 anos em que Graciana Romeo & Juan Capriotti trabalham juntos em Portugal.</Paragraph>
                        </Intro>
                        <Subtitle>- Artistas Confirmados -</Subtitle>
                        <Info>
                            <InfoHeading>Professores e Bailarinos:</InfoHeading>
                            <DynamicList items={artists} />
                            <InfoHeading>DJs:</InfoHeading>
                            <DynamicList items={DJs} />
                            <InfoHeading>Fotógrafos:</InfoHeading>
                            <DynamicList items={photographers} />
                            <InfoHeading>Acessórios:</InfoHeading>
                            <DynamicList items={accessories} />
                        </Info>
                        <Subtitle>- Programação -</Subtitle>
                        <InfoHeading>Sexta-feira:</InfoHeading>
                        <Schedule>
                            <ScheduleItem>18h: <i>Ritmo de base, exercícios de percussão básicos e aplicações na dança</i> com Amaia</ScheduleItem>
                            <ScheduleItem>19h: <i>Ferramentas da dança, movimento terapia aplicadas ao tango</i></ScheduleItem>
                            <ScheduleItem>20h: Samantha & Patricio</ScheduleItem>
                            <ScheduleItem>Das 21h às 2.00h: <i>Milonga de apertura</i>: DJ Fernando Teixeira e Dani Benson | Show: Janice Iandristky & Rui Barroso, Samantha & Patricio</ScheduleItem>
                        </Schedule>
                        <InfoHeading>Sábado:</InfoHeading>
                        <Schedule>
                            <ScheduleItem>14h: <i>Escuta ativa, conexão, sociabilidade e expressão</i> com M. Eugenia Brandulo</ScheduleItem>
                            <ScheduleItem>15h: <i>Boleos para la pista</i> com Solange Galvão</ScheduleItem>
                            <ScheduleItem>16h: <i>Caminhadas, pausas e silêncios</i> com Alexandra Baldaque & Fernando Jorge</ScheduleItem>
                            <ScheduleItem>17h: <i>Milonga</i> com Miriam Nielli</ScheduleItem>
                            <ScheduleItem>18h: <i>La magia del abrazo</i> com L.E.TANGO Flor Razzari, Graciana Romeo e Juan Capriotti</ScheduleItem>
                            <ScheduleItem>Das 21h às 2.00h: <i>Milonga de gala</i>: DJs Paulo Matos, Bruno de Sousa | Show: Sonia Aires & Paulo Bernardo, Alexandra Baldaque & Fernando Jorge</ScheduleItem>
                        </Schedule>
                        <InfoHeading>Domingo:</InfoHeading>
                        <Schedule>
                            <ScheduleItem>14h: <i>Diálogo e comunicação na dança</i> com Inês Gomes</ScheduleItem>
                            <ScheduleItem>15h: <i>Barridas y mordidas en giro y caminata</i> com Florencia Gil Bilbao</ScheduleItem>
                            <ScheduleItem>16h: Rui Barroso</ScheduleItem>
                            <ScheduleItem>17h: <i>Estruturas de vals</i> com Janice Iandristky</ScheduleItem>
                            <ScheduleItem>18h: <i>A milonga não é um tango rápido. Passos clássicos e variações criativas</i> com Sonia Aires & Paulo Bernardo</ScheduleItem>
                            <ScheduleItem>19h: <i>Aula magistral</i> com jantar convívio</ScheduleItem>
                            <ScheduleItem>Das 20h às 24h: <i>Praktica milonguera</i>: DJs Maria Beu e Lino Silva | Show: L.E.TANGO com Flor Razzari, Graciana Romeo & Juan Capriotti</ScheduleItem>
                        </Schedule>
                        <Info>
                            <Paragraph>Passe Livre:</Paragraph>
                            <Paragraph>Promoção especial até 17 de novembro: €60</Paragraph>
                            <Paragraph>A partir desta data:  €80</Paragraph>
                            <Subtitle>Info e inscrições:</Subtitle>
                            <Paragraph>
                                <a
                                    href={"mailto:lisboaemtango@gmail.com"}
                                    className="hover:text-secondary duration-300">
                                    lisboaemtango@gmail.com
                                </a>
                            </Paragraph>
                            <Paragraph>Tel. 916192919</Paragraph>
                            <Paragraph>Tel. 935478559</Paragraph>
                        </Info>
                    </Flyer>
                </ModalBody>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
