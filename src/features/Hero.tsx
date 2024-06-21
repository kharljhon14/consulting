import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Divider } from '@nextui-org/react';

export default function Hero() {
  return (
    <div className="mt-10 text-secondary mx-4">
      <div className="h-72">
        <h1 className="text-6xl lg:text-8xl">
          Uniting Research <span className="lg:block">with Capital</span>
        </h1>
      </div>

      <Divider className="my-6 bg-secondary" />
      <div className="pb-8 lg:flex items-center justify-between">
        <div className="my-8 flex justify-center lg:flex-1 lg:items-start flex-col">
          <div className="text-center lg:text-start lg:text-lg lg:max-w-sm">
            <p className="leading-6 ">
              Stem expedites the journey of groundbreaking healthcare solutions from conception to
              global markets.
            </p>
          </div>
          <Button className="mt-8 bg-primary text-secondary px-10">Buy Stem</Button>
        </div>

        <div className="flex flex-col items-end lg:flex-row lg:space-x-4 lg:space-y-2 lg:items-center">
          <div className="mr-auto space-y-2 ">
            <Image
              width={300}
              alt=""
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          <Image
            width={200}
            alt=""
            src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}
