import Contact from "./Contact";
import Features from "./Features";
import Header from "./Header";
import OurTeam from "./OurTeam";
import TopProperties from "./TopProperties";
import Whatwedo from "./Whatwedo";

export default function Home() {
  return (
    <div>
        <Header />
        <TopProperties />
        <Features />
        <Whatwedo />
        <OurTeam />
        <Contact />
    </div>
  )
}
