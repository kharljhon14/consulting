import { Divider } from '@nextui-org/divider';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="text-secondary mx-4 py-10">
      <div className="lg:flex lg:justify-evenly">
        <div className="flex flex-col">
          <Link
            className="text-lg flex items-center mb-8 w-fit"
            href="/"
          >
            <FaLocationArrow />
            <span>Arrow Consulting</span>
          </Link>

          <div className="flex flex-col space-y-4">
            <div>
              <h2>1234 Wellington Road Windsor, Vic 3181 Austrailia</h2>
            </div>

            <div>
              <h2>Email</h2>
              <span className="text-secondary/60">hello@arrowconsulting.com</span>
            </div>
            <div>
              <h2>Phone</h2>
              <span className="text-secondary/60">+613 1234 5678</span>
            </div>
          </div>
        </div>

        <Divider className="bg-secondary my-6 lg:hidden" />

        <div className="flex justify-between lg:justify-end lg:space-x-10">
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="mb-4">Product</h2>
              <div className="flex flex-col space-y-2">
                <Link href="/">
                  <span className="text-secondary/60">Landing 1</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Landing 2</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Landing 3</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Pricing 1</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Pricing 2</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Pricing 3</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Process</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="mb-4">Company</h2>
              <div className="flex flex-col space-y-2">
                <Link href="/">
                  <span className="text-secondary/60">About</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Blog 1</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Blog 2</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Blog 3</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Careers</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Contact</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Legal</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="mb-4">Account</h2>
              <div className="flex flex-col space-y-2">
                <Link href="/">
                  <span className="text-secondary/60">Sign Up</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Log in</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">Reset password</span>
                </Link>
                <Link href="/">
                  <span className="text-secondary/60">User account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className="bg-secondary mt-6 mb-8" />
      <div>
        <p className="text-center">&copy; 2024 Arrow Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
