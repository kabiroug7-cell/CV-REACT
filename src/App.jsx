import "./App.css";
import InfosPerso from "./components/InfosPerso";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";

export default function App() {
  return (
    <div className="cv">
      <InfosPerso />
      <Competences />
      <Experiences />
    </div>
  );
}