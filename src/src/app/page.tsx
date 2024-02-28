import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={style.container}>
      <a href="/example">こちら</a>
      <p>name : Takumi OKAYASU</p>
      <p>birthday : 1997/03/06</p>
      <p>Language</p>
      <ul>
        <li>C++</li>
        <li>Java</li>
        <li>C#</li>
        <li>VB.NET</li>
        <li>TypeScript</li>
      </ul>
      <Image
        src="/backgnd.jpg"
        alt={"background"}
        layout="fill"
        objectFit="cover"
      />
    </main>
  );
}
