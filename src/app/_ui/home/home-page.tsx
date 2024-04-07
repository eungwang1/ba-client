import { useCounterStore } from "@/app/_providers/counter-store-provider";
import { Button } from "antd";
import React from "react";

interface HompageProps {}

const Hompage: React.FC<HompageProps> = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );
  return (
    <div>
      Count: {count}
      <hr />
      <Button onClick={() => void incrementCount()}>Increment Count</Button>
      <Button onClick={() => void decrementCount()}>Decrement Count</Button>
    </div>
  );
};

export default Hompage;
