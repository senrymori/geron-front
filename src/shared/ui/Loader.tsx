import { CircularProgress, CircularProgressProps } from "@mui/material";
import { FC } from "react";

interface Props extends CircularProgressProps {
  isFull?: boolean;
}

export const Loader: FC<Props> = function Loader(props) {
  const { isFull, ...restProps } = props;
  if (isFull) {
    return (
      <div className={"flex flex-col h-screen justify-center items-center"}>
        <CircularProgress />
      </div>
    );
  }
  return <CircularProgress {...restProps} />;
};
