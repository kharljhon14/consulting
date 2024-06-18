import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Divider } from '@nextui-org/react';
export default function Hero() {
  return (
    <div className="my-6">
      <div className=" h-72">
        <h1 className="text-6xl">Uniting Research with Capital</h1>
      </div>
      <Divider className="my-4" />
      <div className="my-4">
        <p className=" leading-6">
          Stem expedites the journey of groundbreaking healthcare solutions from conception to
          global markets.
        </p>
        <Button className="mt-4">Buy Now</Button>
      </div>

      <div>
        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <Image
          isBlurred
          width={240}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
        />
      </div>
    </div>
  );
}
