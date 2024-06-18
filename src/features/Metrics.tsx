import { Divider } from '@nextui-org/divider';
import { GiCorkedTube } from 'react-icons/gi';
import { RiGitForkFill, RiVerifiedBadgeFill } from 'react-icons/ri';

export default function Metrics() {
  return (
    <div className="text-[#f8f7f3] mx-4 mt-8 mb-16">
      <div>
        <span>Impresive Metrics</span>
      </div>

      <div className="my-8">
        <h1 className="mb-16 text-xl">
          Born from the collective ambition of industry veterans and technology innovators, our
          mission is to expedite the journey of groundbreaking healhcare solutions from conception
          to global markets.
        </h1>

        <div>
          <Divider className="bg-[#f8f7f3]/50" />
          <div className="my-3 flex items-center gap-x-3">
            <div className="border p-1 rounded border-[#f8f7f3]/50">
              <GiCorkedTube size={24} />
            </div>
            <p className="text-md">
              Actionable insights into healthcare market friends and consumer needs.
            </p>
          </div>
          <Divider className="bg-[#f8f7f3]/50" />
          <Divider className="bg-[#f8f7f3]/50" />
          <div className="my-3 flex items-center gap-x-3">
            <div className="border p-1 rounded border-[#f8f7f3]/50">
              <RiGitForkFill size={24} />
            </div>
            <p className="text-md">
              Strategic partnership between institution, biotech companies, and investors.
            </p>
          </div>
          <Divider className="bg-[#f8f7f3]/50" />
          <Divider className="bg-[#f8f7f3]/50" />
          <div className="my-3 flex items-center gap-x-3">
            <div className="border p-1 rounded border-[#f8f7f3]/50">
              <RiVerifiedBadgeFill size={24} />
            </div>
            <p className="text-md">
              Advice on compliance, regulatory processes, and marked entry strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
