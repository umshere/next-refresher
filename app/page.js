import Link from "next/link";
// import Header from "./components/header";
import Header from "@/components/header";

export default function Home() {
  console.log("Hello from the Home page!");
  return (
    <main>
      <Header></Header>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/about">About this App</Link>
    </main>
  );
}
