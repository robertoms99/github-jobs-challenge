import style from "./SubHeading.module.scss";
import cn from "classnames";

export default function ({ className, children }) {
  return <h4 className={cn(className, style.root)}>{children}</h4>;
}
