import style from "./TaggedIcon.module.scss";
import cn from "classnames";
import Icon from "../Icon";

export default function ({ className, icon, children }) {
  return (
    <div className={cn(className, style.root)}>
      <Icon className={cn(style.icon)} icon={icon} />
      <span>{children}</span>
    </div>
  );
}
