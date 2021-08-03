import style from "./Icon.module.scss";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ({ className, icon }) {
  return <FontAwesomeIcon className={cn(className, style.root)} icon={icon} />;
}
