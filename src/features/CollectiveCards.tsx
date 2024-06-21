import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { AiOutlineStock } from 'react-icons/ai';
import { CiPill } from 'react-icons/ci';
import { TbPigMoney } from 'react-icons/tb';

export default function CollectiveCards() {
  return (
    <div className="text-primary bg-secondary">
      <div className="mx-4 pt-10 pb-16">
        <div className="my-8 lg:max-w-xl">
          <h1 className="text-2xl text-center lg:text-4xl lg:text-start">
            Born form the collective ambition of industry veterans and technology innovators.
          </h1>
        </div>
        <Divider className="my-8" />
        <div className="flex flex-col gap-y-4 lg:gap-x-8 lg:flex-row lg:justify-between">
          <Card className="flex-1 h-52 bg-accent text-primary ">
            <CardHeader>
              <TbPigMoney size={24} />
            </CardHeader>
            <CardBody className="flex justify-end">
              <p className="text-lg">Strategic Funding</p>
            </CardBody>
          </Card>
          <Card className="flex-1 h-52 bg-accent text-primary">
            <CardHeader>
              <CiPill size={24} />
            </CardHeader>
            <CardBody className="flex justify-end">
              <p className="text-lg">Regulatory Guidance</p>
            </CardBody>
          </Card>
          <Card className="flex-1 h-52 bg-accent text-primary">
            <CardHeader>
              <AiOutlineStock size={24} />
            </CardHeader>
            <CardBody className="flex justify-end">
              <p className="text-lg">Impact Amplification</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
