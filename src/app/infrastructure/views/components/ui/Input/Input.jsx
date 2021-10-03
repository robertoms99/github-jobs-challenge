import style from "./Input.module.scss";
import cn from "classnames";
import { forwardRef } from 'react';

export default forwardRef(function ({ className, ...props },ref) {
  return <input className={cn(className, style.root)} {...props} ref={ref}/>;
})
