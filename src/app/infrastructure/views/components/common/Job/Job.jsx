import style from "./Job.module.scss";
import mediaStyle from "../../ui/Media/Media.module.scss";
import Media from "../../ui/Media";
import TaggedIcon from "../../ui/TaggedIcon";
import notFoundImage from "../../../../../../assets/images/not_found.jpg";
import cn from "classnames";
import { faGlobeAfrica, faClock } from "@fortawesome/free-solid-svg-icons";
import Tag from "../../ui/Tag";
import { Link, useHistory } from "react-router-dom";
import useImageFallback from '../../../hooks/useImageFallback/useImageFallback';

export default function ({ job }) {
  const {imageWithFallback}= useImageFallback(job.urlImage, notFoundImage)
  const { id,career,company } = job

  return (
    <Link className={style.root} to={`/career/${company}-${career}-${id}`}>
      <div className={style.contentLeft}>
        <Media
          className={style.media}
          object={imageWithFallback}
          objectClassName={mediaStyle.objectCover}
        />
      </div>
      <div className={style.contentRight}>
        <div className={style.description}>
          <h6 className={style.company}>{job.company}</h6>
          <h3 className={style.career}>{job.career}</h3>
          {job.isFullTime && (<Tag> full time</Tag>)}
        </div>
        <div className={style.detail}>
          <TaggedIcon
            className={cn(style.city, style.itemDetail)}
            icon={faGlobeAfrica}
          >
            {job.location.city}
          </TaggedIcon>
          <TaggedIcon
            className={cn(style.accessTime, style.itemDetail)}
            icon={faClock}
          >
            5 days ago
          </TaggedIcon>
        </div>
      </div>
    </Link>
  );
}
