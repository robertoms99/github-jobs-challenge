import Logo from "../../components/common/Logo/Logo";
import style from "./Career.module.scss";
import cn from "classnames";
import CustomLink from "../../components/ui/CustomLink";
import Icon from "../../components/ui/Icon";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import SubHeading from "../../components/ui/SubHeading";

export default function () {
  return (
    <main className="container">
      <div className={style.root}>
        <Logo />
        <CustomLink className={style.back}>
          <Icon icon={faLongArrowAltLeft} className={style.iconLink} /> back to
          search
        </CustomLink>
        <section className={style.content}>
          <article className={style.leftContent}>
            <div className={style.instructions}>
              <SubHeading className={style.instructionHeading}>
                how to apply
              </SubHeading>
              <p className={style.paragraph}>
                Please email a copy of your resume and online portfolio to{" "}
                <CustomLink>wes@kasisto.com</CustomLink> & CC{" "}
                <CustomLink> eric@kasisto.com</CustomLink>
              </p>
            </div>
          </article>
          <article className={style.rightContent}></article>
        </section>
      </div>
    </main>
  );
}
