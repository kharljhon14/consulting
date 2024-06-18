import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Divider, Spacer } from '@nextui-org/react';

export default function Hero() {
  return (
    <div className="mt-6 text-[#f8f7f3] mx-4">
      <div className=" h-72">
        <h1 className="text-6xl">Uniting Research with Capital</h1>
      </div>

      <Divider className="my-6 bg-[#f8f7f3]" />
      <div className="pb-8">
        <div className="my-8 flex justify-center flex-col">
          <p className="leading-6 text-center">
            Stem expedites the journey of groundbreaking healthcare solutions from conception to
            global markets.
          </p>
          <Button className="mt-8 bg-[#3f463a] text-[#f8f7f3]">Buy Stem</Button>
        </div>

        <div className="flex flex-col items-end">
          <div className="mr-auto">
            <Image
              width={300}
              alt=""
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <Spacer y={4} />
          <Image
            width={240}
            alt=""
            src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}
