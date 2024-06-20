import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';

export default function Header() {
  return (
    <Navbar
      isBlurred={false}
      className="bg-primary text-secondary"
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

      <NavbarContent
        className="hidden lg:flex"
        justify="center"
      >
        <NavbarItem>
          <Link href="#">Explore</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Translate</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Search</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Cart</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex"
        justify="end"
      >
        <NavbarItem>
          <Link href="#">Login</Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            variant="flat"
            className="bg-primary_dark text-secondary"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="lg:hidden"
      >
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="text-primary lg:hidden">
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
            className=" hover:underline"
            href="/"
          >
            Sign Up
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
