import cn from "classnames";
import style from "./Pagination.module.scss";
import Button from "../../ui/Button";

export default function ({ className, count = 0 }) {
  return (
    <div className={cn(className, style.root)}>
      <Button className={cn(style.control, style.controlPrev)}>{`<`}</Button>
      <div className={style.pagesGroup}>
        {[1, 2, 3, 4, 5].map((el) => (
          <Button className={style.buttonPage}>{el}</Button>
        ))}
      </div>
      <Button className={cn(style.control, style.controlNext)}>{`>`}</Button>
    </div>
  );
}
