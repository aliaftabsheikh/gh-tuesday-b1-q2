import Link from "next/link"

function Footer() {
  return (
   <div className="bg-blue-500 ">
    <ul>
        <Link href="/">
        <li>Home</li>
        </Link>

        <Link href="/about-us">
        <li>About-us</li>
        </Link>

        <Link href="/career">
        <li>Career</li>
        </Link>

        <Link href="/about-us/education">
        <li>Education</li>
        </Link>
        
        <Link href="/terms">
        <li>Terms & Condition</li>
      </Link>
      <Link href="/terms">
        <li>Privacy and Policy</li>
      </Link>
    </ul>
   </div>   
  )
}

export default Footer