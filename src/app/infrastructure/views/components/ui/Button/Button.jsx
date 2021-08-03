import style from "./Button.module.scss";
import cn from "classnames";

export default function ({ className, children }) {
  return <button className={cn(className)}>{children}</button>;
}
