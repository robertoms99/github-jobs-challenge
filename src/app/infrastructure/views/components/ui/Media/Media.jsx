import style from "./Media.module.scss";
import cn from "classnames";

export default function ({
  className,
  object,
  objectClassName = "",
  ...props
}) {
  return (
    <figure className={cn(className, style.root)} {...props}>
      <img src={object} className={objectClassName} />
    </figure>
  );
}
