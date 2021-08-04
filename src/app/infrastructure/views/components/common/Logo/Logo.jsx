import style from "./Logo.module.scss";
import cn from "classnames";
export default function ({ className }) {
  return (
    <h1 className={cn(style.root, className)}>
      <span className={style.firstPart}>github</span>
      <span className={style.secondPart}>Jobs</span>
    </h1>
  );
}
