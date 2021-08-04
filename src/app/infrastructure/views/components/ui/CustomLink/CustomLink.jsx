import style from "./CustomLink.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

export default function ({ className, children, ...props }) {
  return (
    <Link className={cn(className, style.root, style.accent)} {...props}>
      {children}
    </Link>
  );
}
