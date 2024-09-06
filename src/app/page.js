import Image from "next/image";
import { default as Header } from "./components/Header";
import { default as LandingPage } from "./components/LandingPage";

export default function Home() {
  return (
    <main>
      <Header />
      <LandingPage />
    </main>
  );
}
