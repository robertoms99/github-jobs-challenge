import Logo from "../../components/common/Logo/Logo";
import style from "./Career.module.scss";
import cn from "classnames";
import CustomLink from "../../components/ui/CustomLink";
import Icon from "../../components/ui/Icon";
import {
  faLongArrowAltLeft,
  faClock,
  faGlobeAfrica,
} from "@fortawesome/free-solid-svg-icons";
import SubHeading from "../../components/ui/SubHeading";
import Heading from "../../components/ui/Heading/Heading";
import Tag from "../../components/ui/Tag";
import TaggedIcon from "../../components/ui/TaggedIcon";
import Media from "../../components/ui/Media";
import notFoundImage from "../../../../../assets/images/not_found.jpg";
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Loader from '../../components/ui/Loader/Loader';
import jobsService from '../../../../domain/services/jobs.service';
import useImageFallback from '../../hooks/useImageFallback/useImageFallback';

export default function () {
  const {slug} =useParams()
  const [job, setJob] = useState(null)
  const {imageWithFallback} = useImageFallback('',notFoundImage)

  useEffect(()=>{
    const slugArray = slug.split('-')
    const id = +(slugArray[slugArray.length - 1])
    ;(async ()=>{
      setJob(await jobsService.getJobById(id))
    })()
  },[])

  return (
    <main className="container">
      <div className={style.root}>
        <Logo className="logo" />
        {job !== null ? (
          <section className={style.content}>
          <article className={style.leftContent}>
            <CustomLink className={style.back} to="/">
              <Icon icon={faLongArrowAltLeft} className={style.iconLink} /> back
              to search
            </CustomLink>
            <div className={style.instructions}>
              <SubHeading className={style.instructionHeading}>
                how to apply
              </SubHeading>
              <p className={style.paragraph}>
                {job.instructions}
                {/*Please email a copy of your resume and online portfolio to{" "}
                <CustomLink to="#">wes@kasisto.com</CustomLink> & CC{" "}
        <CustomLink to="#"> eric@kasisto.com</CustomLink> */}
              </p>
            </div>
          </article>
          <article className={style.rightContent}>
            <Heading className={style.heading}>
              {job.career}
            </Heading>
            {job.isFullTime && (<Tag>full time</Tag>)}
            <TaggedIcon icon={faClock} className={style.time}>
              5 days ago
            </TaggedIcon>
            <div className="description">
              <div className={style.company}>
                <Media className={style.companyMedia} object={imageWithFallback} />
                <h3 className={style.companyName}>{job.company}</h3>
                <TaggedIcon
                  icon={faGlobeAfrica}
                  className={style.companyLocation}
                >
                  {job?.location?.city}
                </TaggedIcon>
              </div>
              <p className={style.detail}>
                {job.description}
              </p>
            </div>
          </article>
        </section>
        ) : <Loader />}
      </div>
    </main>
  );
}
