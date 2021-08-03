import Form from "../../components/common/Form/Form";
import Logo from "../../components/common/Logo/Logo";
import style from "./Home.module.scss";

export default function () {
  return (
    <main className="container">
      <div className={style.root}>
        <Logo />
        <div className={style.banner}>
          <Form className={style.form}>
            <Button>search</Button>
          </Form>
        </div>
      </div>
    </main>
  );
}
