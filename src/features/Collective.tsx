import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { AiOutlineStock } from 'react-icons/ai';
import { CiPill } from 'react-icons/ci';
import { TbPigMoney } from 'react-icons/tb';

export default function Collective() {
  return (
    <div className="text-[#20261d] bg-[#f8f7f3]">
      <div className="mx-4 py-10">
        <div className="my-8">
          <h1 className="text-2xl text-center">
            Born form the collective ambition of industry veterans and technology innovators.
          </h1>
        </div>
        <Divider className="my-8" />
        <div className="flex flex-col gap-y-4">
          <Card className="h-36 bg-[#ebe3d8] text-[#20261d]">
            <CardHeader>
              <TbPigMoney size={24} />
            </CardHeader>
            <CardBody className="flex justify-end">
              <p className="text-lg">Strategic Funding</p>
            </CardBody>
          </Card>
          <Card className="h-36 bg-[#ebe3d8] text-[#20261d]">
            <CardHeader>
              <CiPill size={24} />
            </CardHeader>
            <CardBody className="flex justify-end">
              <p className="text-lg">Regulatory Guidance</p>
            </CardBody>
          </Card>
          <Card className="h-36 bg-[#ebe3d8] text-[#20261d]">
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
