import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';

export default function Ambitions() {
  return (
    <div className=" mx-4 text-secondary py-8">
      <h1 className="text-xl">
        Born form the collective ambition of industry veterans and technology innovators.
      </h1>
      <Divider className="bg-secondary mt-16 mb-8" />

      <div>
        <div className="flex flex-col space-y-14">
          <p>
            We recognize the intricate dance between pioneering science and the necessity of robust
            funding-an interplay where many promising ideas have faltered on the path to
            realization. Stem is designed as the conduit through which research meets resources,
            ensuring that no potential for human advancement is left unexplored due to financial
            constraints.
          </p>

          <ul className="ml-4 list-disc space-y-6">
            <li>
              <span>Commited to developing and updating sustainable practices</span>
            </li>
            <li>
              <span>
                We believe that the built enviroment plays an important role in achieving these
                goals
              </span>
            </li>
            <li>
              <span>Committed to developing and upholding sustainable practices</span>
            </li>
          </ul>
        </div>

        <Image
          className="mt-16"
          alt=""
          src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
