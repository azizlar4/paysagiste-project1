import Cardd from "components/cards/ThreeColSlider";
import Headerr from "components/headers/light";
import AboutUs from "pages/AboutUs";
import Hero from "components/hero/FullWidthWithImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import tw from "twin.macro";

import Featuress from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Featuresss from "components/features/TwoColSingleFeatureWithStats2";

import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import TabGrid from "components/cards/TabCardGrid.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import Featuressss from "components/features/ThreeColWithSideImageWithPrimaryBackground";



const HighlightedText = tw.span`text-primary-500`


export default function Explore() {
  return (
    <div className="Youssef">

{/* <Headerr /> */}
<Hero />
<Features />
{/* <Cardd /> */}
{/* <Portfolio />

<Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      /> */}
     
<Featuressss />
<Featuresss />
      <Featuress />
<Cardd />
<TabGrid />
<Testimonial />
<FAQ />

<Footer />
{/* <Footer /> */}
{/* <AboutUs /> */}
    </div>
  );
}

