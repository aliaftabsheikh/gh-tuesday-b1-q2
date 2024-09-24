import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
      <Link href="/"><li>Home</li></Link>
      <Link href="/about-us"><li>About</li></Link>
      <Link href="/career">
      <li>Career</li>
      <Link href="/about-us/ali/education"><li>Ali</li></Link>
      </Link>
    </ul>
    <h1>This is home page</h1>
    </div>
  );
}
