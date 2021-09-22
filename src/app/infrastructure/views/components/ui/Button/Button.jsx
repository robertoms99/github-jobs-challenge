import style from "./Button.module.scss";
import cn from "classnames";

export default function ({ className, children ,...restProps}) {
  return <button className={cn(className, style.root)} {...restProps}>{children}</button>;
}
