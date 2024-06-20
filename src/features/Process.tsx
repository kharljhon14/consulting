import { Divider } from '@nextui-org/divider';
import { FaStarOfLife } from 'react-icons/fa6';

export default function Process() {
  return (
    <div className="bg-[#f8f7f3] text-[#20261d]">
      <div className="mx-4 pt-16 mb-8">
        <h1 className="text-2xl font-semibold mb-8">Our Process</h1>

        <div>
          <Divider />
          <div className="my-4 flex flex-col space-y-8">
            <div className="flex items-center space-x-2">
              <FaStarOfLife size={12} />
              <span className="font-bold">01</span>
            </div>
            <h2 className="text-lg">Discovery and Assessment</h2>
            <p>
              The journey begins with proactive search for promising medical research projects. Our
              team conducs a thorough assessment, evaluating eac project&apos;s innovation,
              potential impact, and feasibility. This involves rigorous scientific review, potential
              market analysis and preliminary discussions with research teams to understand their
              vision, capabilities, and needs.
            </p>
          </div>
          <Divider />

          <Divider />
          <div className="my-4 flex flex-col space-y-8">
            <div className="flex items-center space-x-2">
              <FaStarOfLife size={12} />
              <span className="font-bold">02</span>
            </div>
            <h2 className="text-lg">Due Diligence and Selection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam possimus atque
              culpa, molestias rerum incidunt, vero voluptatibus dicta sunt blanditiis nobis
              excepturi. Modi necessitatibus cumque, doloribus rerum dignissimos sed.
            </p>
          </div>
          <Divider />

          <Divider />
          <div className="my-4 flex flex-col space-y-8">
            <div className="flex items-center space-x-2">
              <FaStarOfLife size={12} />
              <span className="font-bold">03</span>
            </div>
            <h2 className="text-lg">Matching with Investors</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias velit non nisi
              sapiente quod. Explicabo corrupti labore voluptate in maxime error, est illo
              voluptatibus recusandae similique quam, autem, expedita quaerat! Praesentium, alias!
              Officiis veniam placeat deleniti enim, laboriosam earum eligendi modi porro asperiores
              a et, itaque adipisci consequatur dolor incidunt inventore necessitatibus repellendus
              debitis fugiat. Nam officia autem quaerat beatae!
            </p>
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
}
