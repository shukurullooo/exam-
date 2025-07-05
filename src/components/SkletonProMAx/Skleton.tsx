import React from "react";
import { Skeleton } from "antd";

const Skleton = () => {
  return (
    <div className="container w-full mb-8">
      <div className="w-full h-[500px] relative overflow-hidden rounded">
        <Skeleton.Image
          active
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
        />
        <div className="absolute bottom-10 left-10 max-w-xl">
          <Skeleton active paragraph={{ rows: 2 }} title={{ width: "60%" }} />
          <Skeleton.Button active style={{ marginTop: 10, width: 120 }} />
        </div>
      </div>
      <div className="mt-4 px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Skeleton.Image
                key={index}
                active
                style={{ width: "100%", height: 100, borderRadius: "8px" }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Skeleton);
