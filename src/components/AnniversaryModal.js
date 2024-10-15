import tw from "twin.macro";

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

const ListItem = tw.span`
    mb-2
    text-lg
    whitespace-nowrap
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
                            <List>
                                <ListItem>Alexandra Baldaque & Fernando Jorge&nbsp;·&nbsp;</ListItem>
                                <ListItem>Sonia Aires & Paulo Bernardo&nbsp;·&nbsp;</ListItem>
                                <ListItem>Miriam Nielly&nbsp;·&nbsp;</ListItem>
                                <ListItem>Samatha Garcia e Patricio Rodriguez&nbsp;·&nbsp;</ListItem>
                                <ListItem>Rui Barroso&nbsp;·&nbsp;</ListItem>
                                <ListItem>Janice Iandristky&nbsp;·&nbsp;</ListItem>
                                <ListItem>Solange Galvão&nbsp;·&nbsp;</ListItem>
                                <ListItem>Marc Hussner&nbsp;·&nbsp;</ListItem>
                                <ListItem>Flor Razzari&nbsp;·&nbsp;</ListItem>
                                <ListItem>Florencia Gil Bilbao&nbsp;·&nbsp;</ListItem>
                                <ListItem>Graciana Romeo & Juan Capriotti&nbsp;·&nbsp;</ListItem>
                                <ListItem>Amaia Otamendi&nbsp;·&nbsp;</ListItem>
                                <ListItem>Maria Eugenia Brandulo&nbsp;·&nbsp;</ListItem>
                                <ListItem>Inés Gomes</ListItem>
                            </List>
                            <InfoHeading>DJs:</InfoHeading>
                            <List>
                                <ListItem>Bruno de Sousa&nbsp;·&nbsp;</ListItem>
                                <ListItem>Paulo Matos&nbsp;·&nbsp;</ListItem>
                                <ListItem>Fernando Teixeira&nbsp;·&nbsp;</ListItem>
                                <ListItem>Maria Beu&nbsp;·&nbsp;</ListItem>
                                <ListItem>Dani Benson&nbsp;·&nbsp;</ListItem>
                                <ListItem>Lino Silva</ListItem>
                            </List>
                            <InfoHeading>Fotógrafos:</InfoHeading>
                            <List>
                                <ListItem>Manuel Silva&nbsp;·&nbsp;</ListItem>
                                <ListItem>Joâo Filipe Diaz</ListItem>
                            </List>
                            <InfoHeading>Acessórios:</InfoHeading>
                            <List>
                                <ListItem>C.F. TANGO Cristina Ferreira&nbsp;·&nbsp;</ListItem>
                                <ListItem>Ana Francisco&nbsp;·&nbsp;</ListItem>
                                <ListItem>Claire Zhang</ListItem>
                            </List>
                        </Info>
                        <Subtitle>- Programação -</Subtitle>
                        <InfoHeading>Sexta-feira:</InfoHeading>
                        <Schedule>
                            <ScheduleItem>18h: <i>Ritmo de base, exercícios de percussão básicos e aplicações na dança</i> com Amaia</ScheduleItem>
                            <ScheduleItem>19h: <i>Ferramentas da dança, movimento terapia aplicadas ao tango</i> com Marc Hussner</ScheduleItem>
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