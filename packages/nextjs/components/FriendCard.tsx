import React from "react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface Friend {
  name: string;
  hash: string;
}

const FriendCard = ({ name, hash }: Friend) => {
  return (
    <div className="w-[95vw] border-base-300 border shadow-md shadow-secondary mx-4 mt-4 drop-shadow-lg card card-side bg-base-100 ">
      <div className="avatar">
        <div className="my-auto ml-4 w-32 rounded">
          <UserCircleIcon className="h-32 w-32 yx-auto fill-secondary" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <div className="card-actions justify-start">
          <code className="text-base btn-outline btn">{hash}</code>
          <Link href="/editFriend" className="btn">
            Edit Friend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
