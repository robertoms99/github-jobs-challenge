import style from "./Job.module.scss";
import Media from "../../ui/Media";
import TaggedIcon from "../../ui/TaggedIcon";

export default function ({ job }) {
  return (
    <div className={style.root}>
      <div className={style.contentLeft}>
        <Media className={style.media} />
      </div>
      <div className={style.contentRight}>
        <div className={style.description}>
          <h6 className={style.company}>lev</h6>
          <h3 className={style.career}>software developer</h3>
          <span className={style.indicator}> full time</span>
        </div>
        <div className={style.detail}>
          <TaggedIcon className={style.city}>New York</TaggedIcon>
          <TaggedIcon className={style.accessTime}>5 days ago</TaggedIcon>
        </div>
      </div>
    </div>
  );
}
