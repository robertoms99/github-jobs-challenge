import style from "./Logo.module.scss";

export default function () {
  return (
    <h1 className={style.root}>
      <span className={style.firstPart}>github</span>
      <span className={style.secondPart}>Jobs</span>
    </h1>
  );
}
