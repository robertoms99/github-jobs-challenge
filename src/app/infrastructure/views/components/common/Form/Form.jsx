import style from "./Form.module.scss";
import cn from "classnames";

export default function ({ className, children, ...props }) {
  return (
    <form className={cn(className)} {...props}>
      {children}
    </form>
  );
}
