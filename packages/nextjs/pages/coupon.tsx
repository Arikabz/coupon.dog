import { useRouter } from "next/router";
import type { NextPage } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import FullCouponCard from "~~/components/FullCouponCard";
import { MetaHeader } from "~~/components/MetaHeader";
import SmallCouponCard from "~~/components/SmallCouponCard";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <MetaHeader />
      <div className="flex flex-row">
        <div className="basis-3/5 my-4 mx-4">
          <button className="mx-4 btn btn-outline" onClick={() => router.back()}>
            <ArrowLeftIcon className="h-8 w-8 fill-secondary" />
          </button>
          <h2 className=" mx-4 font-bold inline text-4xl py-4 px-4">McArthys</h2>
          <div className="my-4 container h-[90vh]  overflow-y-scroll mx-4">
            <FullCouponCard />
          </div>
        </div>
        <div className="my-4 container h-[90vh] basis-2/5 overflow-y-scroll mx-4 ">
          <h2 className=" mx-4 font-bold text-4xl py-4 px-4">More by {"McArthys"}</h2>
          <SmallCouponCard />
          <SmallCouponCard />
          <SmallCouponCard />
          <SmallCouponCard />
          <SmallCouponCard />
          <SmallCouponCard />
        </div>
      </div>
    </>
  );
};

export default Home;
