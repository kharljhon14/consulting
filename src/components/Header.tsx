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
    <Navbar isBordered>
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

      <NavbarMenu>
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
            className="text-blue-500 hover:underline"
            href="/"
          >
            Log In
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="text-purple-500 hover:underline"
            href="/"
          >
            Sign Up
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
