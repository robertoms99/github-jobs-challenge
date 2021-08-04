import style from "./Heading.module.scss";
import cn from "classnames";

export default function ({ className, children }) {
  return <h2 className={cn(className, style.root)}>{children}</h2>;
}
