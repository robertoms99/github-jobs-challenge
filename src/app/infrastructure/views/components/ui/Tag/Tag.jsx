import style from "./Tag.module.scss";
import cn from "classnames";

export default function ({ className, children }) {
  return <span className={cn(className, style.root)}>{children}</span>;
}
