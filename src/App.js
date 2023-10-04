//COMPONENTS
import NavBar from "./container/NavBar";
import Header from "./container/Header";
import TeamSection from "./container/team/TeamSection";
import OurWorkSection from "./container/work/OurWorkSection";
import ContactUs from "./container/contactus/ContactUs";
import FollowUs from "./container/FollowUs";

import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <TeamSection />
      <OurWorkSection />
      <ContactUs />
      <FollowUs />
    </div>
  );
}

export default App;
