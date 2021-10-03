import style from "./InputDecorated.module.scss";
import cn from "classnames";
import Input from "../Input";
import Icon from "../Icon";
import { forwardRef } from 'react';

export default forwardRef(function ({ className, icon, ...props },ref) {
  return (
    <div className={cn(className, style.root)}>
      <Icon className={style.icon} icon={icon} />
      <Input className={style.input} {...props} ref={ref}/>
    </div>
  );
})
