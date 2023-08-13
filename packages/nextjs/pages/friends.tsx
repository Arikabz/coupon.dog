import Link from "next/link";
import type { NextPage } from "next";
import FriendCard from "~~/components/FriendCard";
import { MetaHeader } from "~~/components/MetaHeader";

const Friends: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex-col">
        <div className="w-[100vw] flex flex-row">
          <h2 className="container mx-4 font-bold text-4xl py-4 px-4">Your Friends</h2>
          <div className="mr-8 mt-4 justify-items-end">
            <Link href="addFriend.tsx" className="btn justify-end basis-1/2">
              Add Friend
            </Link>
          </div>
        </div>
        <div className="my-4 w-full overflow-scroll h-[80vh] ">
          <FriendCard name="John McCain" hash="B19CAFAF13EFAF6CEEC55967F38AAA28" />
          <FriendCard name="Eva Stone" hash="67BD533378A9D19A348DC1D9469D0381" />
          <FriendCard name="Steve Hoth" hash="105553A428D4BE5D95EC526E216935D2" />
          <FriendCard name="Anthony Roth" hash="BBCA3A2B8C6FAFBC8EDA29314EFE968A" />
        </div>
      </div>
    </>
  );
};

export default Friends;
