import Cardd from "components/cards/ThreeColSlider";
import Card from "components/cards/TwoTrendingPreviewCardsWithImage";

import Hero from "components/hero/BackgroundAsImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Services from "components/features/ThreeColSimple";
import NewsLetter from "components/forms/SimpleSubscribeNewsletter";
import Footer from "components/footers/SimpleFiveColumn.js";

import Blog from "components/blogs/GridWithFeaturedPost.js";
import Blogg from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";

import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";

export default function Explore() {
  return (
    <div className="Youssef">

{/* <Headerr /> */}
<Hero />

<Services/>

<Features />
<Blog />
<NewsLetter/>

{/* <Cardd /> */}
{/* <Portfolio />

<Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      /> */}
     
{/* <Featuressss />
<Featuresss /> */}
      {/* <Featuress /> */}
      




{/* <TabGrid /> */}



{/*<FAQ />/}
{/* <div style={{display:'flex', justifyContent:'center'}}>

<HeadingTitle>Nos Partenaires</HeadingTitle>
</div> */}
{/* <div style={{display:'flex', justifyContent:'center'}}>

<img src={partenaire} />
</div> */}
<Footer />
{/* <Footer /> */}
{/* <AboutUs /> */}
    </div>
  );
}

