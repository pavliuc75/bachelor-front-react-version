import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onCloseSidebar?: () => void;
}

function NavigationBarSearch(props: Props) {
  const { onCloseSidebar, ...divProps } = props;
  return <div {...divProps}></div>;
}

//todo impl

export default NavigationBarSearch;
