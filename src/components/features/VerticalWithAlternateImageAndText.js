import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-red-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-black`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://www.mastersbooking.fr/sites/default/files/styles/img_blog/public/field/image/conseil-strategie-mastersbooking.jpg?itok=Ul7yXKzH",
      subtitle: "Conseil :",
      title: "Conseil :",
      description:
        "Nous  formulons  toujours  nos  recommandations  après  un audit et une évaluation approfondie des besoins spécifiques de chaque client.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/8/5/285e6423d3_50148975_logiciels.jpg",
      subtitle: "Free",
      title: "Création : ",
      description:
        "Dans  la  mesure  du  budget  et  des  délais  impartis,  nous privilégions  la  création  d’objets  exclusifs  sur  mesure, meilleur  gage  d’originalité  et  de  visibilité  pour l’annonceur.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://mycvtheque.com/wp-content/uploads/2016/06/Sourcing.png",
      subtitle: "Exclusive",
      title: "Sourcing :",
      description:
        "Nous réalisons des voyages d’exploration et assistons aux plus importants salons professionnels afin de dénicher les dernières nouveautés; Nous disposons d’autre part d’un accès internet à la plus grande base mondiale de Sourcing d’objets promotionnels existants.",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Notre passion</HeadingTitle>
          <HeadingDescription>
          vous accompagner dans votre développement et vous apporter  les  solutions  les  plus  adaptées  à  vos problématiques. <br />
          La communication est un métier nécessitant rigueur, méthode,  recherche,  réflexion,  créativité…  Et  ce, pour  vous  fournir  des  prestations  de  qualité  et toucher vos cibles.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>Voir plus</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
