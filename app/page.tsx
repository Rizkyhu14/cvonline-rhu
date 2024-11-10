import Hero from "./components/hero";
import PersonalInfo from "./components/PersonalInfo";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import Skills from "./components/skills";
import "./rizkyhu-style.css"

export default function Gallery() {
  return (
    <section className="text-center">
      <Hero />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
    </section>
  );
}