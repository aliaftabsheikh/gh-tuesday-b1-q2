import Link from "next/link";

function Header() {
  return (
    <ul className="bg-red-600 flex justify-center gap-4 text-sm px-4">
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/about-us">
        <li>About</li>
      </Link>
      <Link href="/career">
        <li>Career</li>
      </Link>
      
    </ul>
  );
}

export default Header;
