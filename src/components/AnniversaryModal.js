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
    text-gray-200
`;

const Paragraph = tw.p`
    mb-4
    text-base
    md:text-lg
    
`;

const Day = tw(Paragraph)`
    font-bold
`;

const List = tw.div`
    text-center
    mb-4
`;

const ListItem = tw.span`
    mb-2
    text-lg
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
`

const Intro = tw.div`
    text-justify
`

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
                            <Paragraph>Depois de alguns anos de pausa, vamos retomar este grande evento com uma "Especial Edition" !!</Paragraph>
                            <Paragraph>Durante mais de 10 edições Portugal[em]Tango abriu as portas a centenas de artistas, de todas as áreas do Tango, sempre foi uma verdadeira FESTA, vivido num ambiente amigável, de convívio e partilha entre os que trabalhamos do Tango de Portugal…e não esperamos menos desta próxima edição.</Paragraph>
                            <Paragraph>Este ano, o evento será realizado dentro do âmbito das celebrações dos 20 anos em que Graciana Romeo & Juan Capriotti trabalham juntos em Portugal.</Paragraph>
                        </Intro>
                        <Subtitle>- Artistas Confirmados -</Subtitle>
                        <Paragraph>Professores e Bailarinos:</Paragraph>
                        <List>
                            <ListItem>Alexandra Baldaque & Fernando Jorge · </ListItem>
                            <ListItem>Sonia Aires & Paulo Bernardo · </ListItem>
                            <ListItem>Miriam Nielly · </ListItem>
                            <ListItem>Samatha Garcia e Patricio Rodriguez · </ListItem>
                            <ListItem>Rui Barroso · </ListItem>
                            <ListItem>Janice Iandristky · </ListItem>
                            <ListItem>Solange Galvão · </ListItem>
                            <ListItem>Marc Hussner · </ListItem>
                            <ListItem>Flor Razzari · </ListItem>
                            <ListItem>Florencia Gil Bilbao · </ListItem>
                            <ListItem>Graciana Romeo & Juan Capriotti · </ListItem>
                            <ListItem>Amaia Otamendi · </ListItem>
                            <ListItem>Maria Eugenia Brandulo · </ListItem>
                            <ListItem>Inés Gomes</ListItem>
                        </List>
                        <Paragraph>DJs:</Paragraph>
                        <List>
                            <ListItem>Bruno de Sousa · </ListItem>
                            <ListItem>Paulo Matos · </ListItem>
                            <ListItem>Fernando Teixeira · </ListItem>
                            <ListItem>Maria Beu · </ListItem>
                            <ListItem>Dani Benson · </ListItem>
                            <ListItem>Lino Silva</ListItem>
                        </List>
                        <Paragraph>Fotógrafos:</Paragraph>
                        <List>
                            <ListItem>Manuel Silva · </ListItem>
                            <ListItem>Joâo Filipe Diaz</ListItem>
                        </List>
                        <Paragraph>Acessórios:</Paragraph>
                        <List>
                            <ListItem>C.F. TANGO Cristina Ferreira · </ListItem>
                            <ListItem>Ana Francisco · </ListItem>
                            <ListItem>Claire Zhang</ListItem>
                        </List>
                        <Subtitle>- Programação -</Subtitle>
                        <Day>Sexta-feira:</Day>
                        <Schedule>
                            <ScheduleItem>18h: RITMO DE BASE, EXERCÍCIOS DE PERCUSSÃO BÁSICOS E APLICAÇÕES NA DANÇA com Amaia</ScheduleItem>
                            <ScheduleItem>19h: FERRAMENTAS DA DANÇA, MOVIMENTO TERAPIA APLICADAS AO TANGO com Marc Hussner</ScheduleItem>
                            <ScheduleItem>20h: Samantha & Patricio</ScheduleItem>
                            <ScheduleItem>Das 21h às 2.00h: Milonga de Apertura: DJ Fernando Teixeira e Dani Benson | Show: Janice Iandristky & Rui Barroso, Samantha & Patricio</ScheduleItem>
                        </Schedule>
                        <Day>Sábado:</Day>
                        <Schedule>
                            <ScheduleItem>14h: ESCUTA ATIVA, CONEXÃO, SOCIABILIDADE E EXPRESSÃO com M. Eugenia Brandulo</ScheduleItem>
                            <ScheduleItem>15h: BOLEOS PARA LA PISTA com Solange Galvão</ScheduleItem>
                            <ScheduleItem>16h: CAMINHADAS, PAUSAS E SILÊNCIOS com Alexandra Baldaque & Fernando Jorge</ScheduleItem>
                            <ScheduleItem>17h: MILONGA com Miriam Nielli</ScheduleItem>
                            <ScheduleItem>18h: LA MAGIA DEL ABRAZO com L.E.TANGO Flor Razzari, Graciana Romeo e Juan Capriotti</ScheduleItem>
                            <ScheduleItem>Das 21h às 2.00h: Milonga de Gala: DJs Paulo Matos, Bruno de Sousa | Show: Sonia Aires & Paulo Bernardo, Alexandra Baldaque & Fernando Jorge</ScheduleItem>
                        </Schedule>
                        <Day>Domingo:</Day>
                        <Schedule>
                            <ScheduleItem>14h: DIÁLOGO E COMUNICAÇÃO NA DANÇA com Inês Gomes</ScheduleItem>
                            <ScheduleItem>15h: BARRIDAS Y MORDIDAS EN GIRO Y CAMINATA com Florencia Gil Bilbao</ScheduleItem>
                            <ScheduleItem>16h: Rui Barroso</ScheduleItem>
                            <ScheduleItem>17h: ESTRUCTURAS DE VALS com Janice Iandristky</ScheduleItem>
                            <ScheduleItem>18h: A MILONGA NÃO É UM TANGO RÁPIDO. PASSOS CLÁSSICOS E VARIAÇÕES CRIATIVAS com Sonia Aires & Paulo Bernardo</ScheduleItem>
                            <ScheduleItem>19h: AULA MAGISTRAL com jantar convívio</ScheduleItem>
                            <ScheduleItem>Das 20h às 24h: Praktica milonguera: DJs Maria Beu e Lino Silva | Show: L.E.TANGO com Flor Razzari, Graciana Romeo & Juan Capriotti</ScheduleItem>
                        </Schedule>
                        <Paragraph>Passe Livre:</Paragraph>
                        <Paragraph>PROMOCÃO ESPECIAL até 17 de Novembro €60</Paragraph>
                        <Paragraph>A partir desta data o preço vai ser €80</Paragraph>
                        <Info>
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
