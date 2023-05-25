import "../../styles.css";
import "./UserDisplayPage.css";
import Header from "../../components/Header/Header";
import Spotlight from "../../components/Spotlight/Spotlight";
import SpotlightTitle from "../../components/Spotlight/SpotlightTitle";
import FanDisplay from "../../components/FanDisplay/FanDisplay";

export default function UserDisplayPage() {
  return (
    <>
      <Header />
      <SpotlightTitle user="Rohan" employeeName="X" />
      <Spotlight />
      <FanDisplay />
    </>
  );
}
