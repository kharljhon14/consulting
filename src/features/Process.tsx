import { Card, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Avatar } from '@nextui-org/react';
import { FaStarOfLife } from 'react-icons/fa6';

export default function Process() {
  return (
    <div className="bg-secondary text-primary">
      <div className="mx-4 pt-16 mb-8">
        <h1 className="text-2xl font-semibold mb-8">Our Process</h1>

        <div className="mb-8">
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

        <div>
          <h2 className="font-semibold  text-xl mb-8 flex items-center space-x-2">
            <FaStarOfLife size={12} />

            <span>Client Experience</span>
          </h2>
          <Card className="bg-accent">
            <CardBody>
              <div className="flex items-center space-x-4 mb-4">
                <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className="flex  flex-col text-sm">
                  <span className="font-semibold">David Kahn</span>
                  <span className="text-xs text-gray-500">Chief Executive Officer</span>
                </div>
              </div>
              <p className="font-serif">
                &ldquo;Working with Stem has been transformative experience. They occupy the
                impossible space between medical research and responsible capitalism.&rdquo;
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
