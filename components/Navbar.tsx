import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="w-full mx-auto top-0 left-0 right-0 sticky bg-white z-50">
      <div className="flex justify-between items-center md:w-4/6 mx-auto">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>
        <ul className="hidden md:flex text-black font-bold">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="mx-4">
              {link.label}
            </Link>
          ))}
        </ul>
        {/* <div className="md:hidden border-2 border-black rounded-lg bg-gray-200">
          <button type="button">
            <Image
              src="/bx-menu-alt-right.svg"
              alt="boton"
              width={50}
              height={50}
            />
          </button>
        </div> */}
        <div className="md:hidden border-2 border-black rounded-lg bg-gray-200">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button type="button">
                <Image
                  src="/bx-menu-alt-right.svg"
                  alt="boton"
                  width={50}
                  height={50}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen left-0 right-0 bg-white">
              <DropdownMenuLabel className="hidden">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="hidden" />
              {NAV_LINKS.map((link) => (
                <DropdownMenuItem className="w-full">
                  <Link href={link.href} key={link.key} className="text-4xl mx-auto mb-5">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

