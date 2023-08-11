import Link from "next/link";
import type { NextPage } from "next";
import CouponCard from "~~/components/CouponCard";
import { MetaHeader } from "~~/components/MetaHeader";

const Friends: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="container">
        <div className="w-[100vw] flex flex-row">
          <h2 className="container mx-4 font-bold text-4xl py-4 px-4">Your Friends</h2>
          <div className="basis-1/2 justify-items-end">
            <Link href="addFriend.tsx" className="btn justify-end basis-1/2">
              Add Friend
            </Link>
          </div>
        </div>
        <div className="my-4 container h-[90vh] overflow-y-scroll ">
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </div>
      </div>
    </>
  );
};

export default Friends;