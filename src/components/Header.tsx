import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';

export default function Header() {
  return (
    <Navbar
      isBordered
      isBlurred={false}
      className="bg-[#20261d] text-[#f8f7f3] border-b-[#f8f7f3]"
    >
      <NavbarBrand>
        <Link
          className="text-lg flex items-center"
          href="/"
        >
          <FaLocationArrow />
          <span>Arrow Consulting</span>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-[#f8f7f3] text-[#20261d] backdrop-blur-xl">
        <NavbarMenuItem>
          <Link
            className="hover:underline"
            href="/"
          >
            Explore
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="hover:underline"
            href="/"
          >
            Translate
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="hover:underline"
            href="/"
          >
            Search
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="hover:underline"
            href="/"
          >
            Cart
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className=" hover:underline"
            href="/"
          >
            Log In
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-blue-500 hover:underline"
            href="/"
          >
            Sign Up
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
