import cn from "classnames";
import style from "./Pagination.module.scss";
import Button from "../../ui/Button";
import Icon from "../../ui/Icon";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ({ className, count = 0 }) {
  return (
    <div className={cn(className, style.root)}>
      <Button className={cn(style.control, style.controlPrev)}>
        <Icon icon={faAngleLeft} />
      </Button>
      <div className={style.pagesGroup}>
        <Button className={style.buttonPage}>1</Button>
        <Button className={cn(style.buttonPage, style.buttonPageActive)}>
          2
        </Button>
        <Button className={style.buttonPage}>3</Button>
        ...
        <Button className={style.buttonPage}>10</Button>
      </div>
      <Button className={cn(style.control, style.controlNext)}>
        <Icon icon={faAngleRight} />
      </Button>
    </div>
  );
}
