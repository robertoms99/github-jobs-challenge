import style from "./Job.module.scss";
import mediaStyle from "../../ui/Media/Media.module.scss";
import Media from "../../ui/Media";
import TaggedIcon from "../../ui/TaggedIcon";
import notFoundImage from "../../../../../../assets/images/not_found.jpg";
import cn from "classnames";
import { faGlobeAfrica, faClock } from "@fortawesome/free-solid-svg-icons";
import Tag from "../../ui/Tag";

export default function ({ job }) {
  return (
    <div className={style.root}>
      <div className={style.contentLeft}>
        <Media
          className={style.media}
          object={notFoundImage}
          objectClassName={mediaStyle.objectCover}
        />
      </div>
      <div className={style.contentRight}>
        <div className={style.description}>
          <h6 className={style.company}>lev</h6>
          <h3 className={style.career}>software developer</h3>
          <Tag> full time</Tag>
        </div>
        <div className={style.detail}>
          <TaggedIcon
            className={cn(style.city, style.itemDetail)}
            icon={faGlobeAfrica}
          >
            New York
          </TaggedIcon>
          <TaggedIcon
            className={cn(style.accessTime, style.itemDetail)}
            icon={faClock}
          >
            5 days ago
          </TaggedIcon>
        </div>
      </div>
    </div>
  );
}
