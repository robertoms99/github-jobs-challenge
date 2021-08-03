import style from "./Input.module.scss";
import cn from "classnames";

export default function ({ className, ...props }) {
  return <input className={cn(className)} {...props} />;
}
