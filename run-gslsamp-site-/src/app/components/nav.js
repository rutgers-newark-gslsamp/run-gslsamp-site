import Link from "next/link";

export default function Nav() {
    return (
      <>
        <ul className="flex px-5">
          <li><Link href="/">Index</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/membership">Membership</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </>
    );
  }