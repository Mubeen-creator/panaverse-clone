import Link from "next/link"
import Logo from "@/assets/images/panaverse-logo.webp"
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
        <Wrapper>
            <div className="flex justify-between py-4 items-center">
                {/* Logo */}
                <div>
                    <Image src={Logo} alt="Logo" width={100} height={100}/>
                </div>
                {/* Navigation Bar */}
                <ul className="flex space-x-8 font-medium">
                    <li>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/courses"}>
                            Courses
                        </Link>
                    </li>
                </ul>
            </div>
        </Wrapper>
    </header>
  )
}

export default Header