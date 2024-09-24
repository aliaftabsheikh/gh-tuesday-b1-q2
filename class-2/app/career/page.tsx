import Link from "next/link";

export default function Career(){
    return(
        <div>

            <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about-us"><li>About</li></Link>
            <Link href="/career">
            <li>Career</li>
            </Link>
          </ul>
            <h1>Career</h1>
        </div>
    )
}