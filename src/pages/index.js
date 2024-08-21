import Headerpage from "../../component/headerpage";
import Homepage from "../../component/homepage";
import Aboutpage from "../../component/aboutpage";
import Testtimonials from "../../component/testimonials";
import Pricingpage from "../../component/pricingpage";
import Workpage from "../../component/workpage";
import Talkpage from "../../component/talkpage";
import Footerpage from "../../component/footerpage";

export default function Home() {
  return (
    <>
      <Headerpage />
      <Homepage />
      <Aboutpage />
      <Testtimonials />
      <Pricingpage />
      <Workpage />
      <Talkpage />
      <Footerpage/>
    </>
  );
}
