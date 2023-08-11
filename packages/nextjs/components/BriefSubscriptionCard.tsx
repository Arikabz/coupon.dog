import React from "react";

const BriefSubscriptionCard = () => {
  return (
    <div className="mt-4 mx-4 flex h-[10vh]">
      <div className="avatar drop-shadow-xl">
        <div className="w-36 rounded">
          <img src="https://images.ctfassets.net/3vz37y2qhojh/5ovxftNE5jbkvWUqcnohYk/472f2dbf2ec1eb26b1e9a5b879dca535/Korean_Burgers.jpg?w=750&fit=fill&fm=webp" />
        </div>
      </div>
      <div className="card-body basis-1/2">
        <h2 className="card-title">Burger Joint</h2>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">3 Coupons</button>
        </div>
      </div>
    </div>
  );
};

export default BriefSubscriptionCard;
