import style from "./TaggedIcon.module.scss";
import cn from "classnames";

export default function ({ className, children }) {
  return (
    <div className={cn(className, style.root)}>
      <i className={cn(className)}>ico</i>
      <span>{children}</span>
    </div>
  );
}
