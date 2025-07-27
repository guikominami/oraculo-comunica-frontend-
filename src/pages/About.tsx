import Section from "../components/UI/Section";
import Paragraph from "../components/UI/Paragraph";
import Container from "../components/UI/Container";
import Title from "../components/UI/Title";

const About = () => {
  return (
    <Section>
      <Container>
        <Title title='Sobre o sistema base de línguas' />
        <div>
          <Paragraph>
            Esse sistema foi desenvolvido para manter uma base de línguas
            criadas pelos usuários de acordo com a ligação que desejarem.
          </Paragraph>
          <Paragraph>
            Ao selecionar o perfil cadastrado, o sistema irá carregar as línguas
            disponíveis. Ao selecionar uma língua, o sistema irá carregar as
            palavras disponíveis para tradução.
          </Paragraph>
          <Paragraph>
            <img
              src='/linguas/images/list-example.jpg'
              alt='Exemplo de listas de línguas'
              className='mb-4 mt-4'
            />
          </Paragraph>
          <Paragraph>
            Foi desenvolvido para efetuar uma carga por um arquivo excel em que
            cada língua esteja em uma coluna e cada palavra com suas traduções
            na mesma linha.
          </Paragraph>
          <Paragraph>
            <img
              src='/linguas/images/excel-example.jpg'
              alt='Exemplo de Excel'
              className='mb-4 mt-4'
            />
          </Paragraph>
          <Paragraph>
            Um exemplo de arquivo em formato csv pode ser baixado clicando no
            link abaixo. O formato csv é o mesmo do excel, mas com as colunas
            separadas por vírgulas.
          </Paragraph>
          <Paragraph>
            Você pode carregar o mesmo arquivo diversas vezes para criar novas
            línguas ou atualizar as existentes. O sistema está desenvolvido para
            não duplicar as línguas e palavras já existentes.
          </Paragraph>
          <Paragraph>
            Caso queria atualizar tudo, você pode excluir o perfil e carregar
            novamente o arquivo.
          </Paragraph>
          <Paragraph>
            <a
              className='text-blue-800'
              href='/linguas/data/data-example.csv'
              download
            >
              Click to download
            </a>
          </Paragraph>
        </div>
        <div></div>
      </Container>
    </Section>
  );
};

export default About;
