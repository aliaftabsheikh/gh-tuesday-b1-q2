import Link from "next/link";

export default function GHouse() {
  return (
    <div>
     <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about-us"><li>About</li></Link>
            <Link href="/career">
            <li>Career</li>
            </Link>
          </ul>

      <h1>About us</h1>

    </div>
  );
}
// create a folder in app directory with name career
// create a file with name "page.tsx"
// create a function of tsx with default export
