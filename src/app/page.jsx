import Nav from "@/components/Nav";
import PlayingBar from "@/components/PlayingBar";
import PlayingView from "@/components/PlayingView";
import {  } from "module";

export default function Home() {
  return (
    <main className="main-container">
      <Nav />
      <PlayingBar />
      <section className="main-view"></section>
      <PlayingView />
    </main>
  );
}
