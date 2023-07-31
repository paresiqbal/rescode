import Link from "next/link";
import Image from "next/image";

// assets
import logo from "../../../public/logo.png";

export default function Nav() {
  return (
    <nav>
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-20" />
      </Link>
    </nav>
  );
}
