import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import Link from 'next/link';
import { FaStarOfLife } from 'react-icons/fa6';

export default function News() {
  return (
    <div className="bg-secondary">
      <div className="text-primary mx-4 py-20">
        <h1 className="text-2xl font-semibold lg:text-4xl">Latest News</h1>
        <Divider className="my-8" />
        <div className=" flex flex-col space-y-10">
          <Link href="/">
            <div className="lg:flex lg:space-x-6 lg:py-6 ">
              <div className="lg:flex-1 lg:flex lg:items-center lg:justify-center border-r-2">
                <Image
                  className="lg:w-[30rem]"
                  alt=""
                  src="https://images.unsplash.com/photo-1582719366794-4d27cd0a34a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="mt-6 lg:flex-1 lg:mt-0 lg:flex lg:flex-col">
                <div className="flex justify-between mb-6 lg:justify-start lg:space-x-6">
                  <div className="flex items-center space-x-2">
                    <FaStarOfLife size={12} />
                    <span>News</span>
                  </div>
                  <time className="underline">September 26, 2024</time>
                </div>
                <h1 className="text-xl lg:text-3xl lg:mt-auto">
                  Discovering the next frontier in biomedical research through collaborarion
                </h1>
              </div>
            </div>
          </Link>
          <Divider />
          <Link href="/">
            <div className="lg:flex lg:space-x-6 lg:py-6">
              <div className="lg:flex-1 lg:flex lg:items-center lg:justify-center border-r-2">
                <Image
                  className="lg:w-[30rem]"
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1676325102583-0839e57d7a1f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="mt-6 lg:flex-1 lg:mt-0 lg:flex lg:flex-col">
                <div className="flex justify-between lg:justify-start lg:space-x-6">
                  <div className="flex items-center space-x-2">
                    <FaStarOfLife size={12} />
                    <span>Insight</span>
                  </div>
                  <time className="underline">April 14, 2024</time>
                </div>
                <h1 className="text-xl lg:text-3xl lg:mt-auto">
                  The role of community in accelerating scientific breakthroughs
                </h1>
              </div>
            </div>
          </Link>
          <Divider />
        </div>
      </div>
    </div>
  );
}
