import { FC, useState } from "react";
import { Button } from "../shared/ui/Button";
import { Card } from "../shared/ui/Card";
import { Typography } from "../shared/ui/Typography";

interface CompProps {
  title: string;
}

export const BasketItem: FC<CompProps> = function BasketItem(props) {
  const [count, setCount] = useState<number>(0);

  return (
    <li>
      <Card>
        <Typography size={20} align={"center"} className={"mb-3"}>
          {props.title}
        </Typography>
        <div className={"flex"}>
          <Button mode={"dark"} onClick={() => setCount(count - 1)}>
            {"-"}
          </Button>
          <Typography className={"flex justify-center items-center w-full"}>
            {count}
          </Typography>
          <Button mode={"dark"} onClick={() => setCount(count + 1)}>
            {"+"}
          </Button>
        </div>
      </Card>
    </li>
  );
};
