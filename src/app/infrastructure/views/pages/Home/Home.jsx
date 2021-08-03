import Logo from "../../components/common/Logo/Logo";
import style from "./Home.module.scss";

export default function () {
  return (
    <main className="container">
      <div className={style.root}>
        <Logo />
        <div className={style.banner}>
          <form action="" className={style.form}></form>
        </div>
      </div>
    </main>
  );
}
