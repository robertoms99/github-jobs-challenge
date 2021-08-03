import style from "./InputDecorated.module.scss";
import cn from "classnames";
import Input from "../Input";
import Icon from "../Icon";

export default function ({ className, icon, ...props }) {
  return (
    <div className={cn(className, style.root)}>
      <Icon className={style.icon} icon={icon} />
      <Input className={style.input} {...props} />
    </div>
  );
}
