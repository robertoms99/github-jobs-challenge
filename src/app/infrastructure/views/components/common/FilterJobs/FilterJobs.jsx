import Input from "../../ui/Input";
import InputDecorated from "../../ui/InputDecorated";
import Form from "../Form/Form";
import cn from "classnames";
import style from "./FilterJobs.module.scss";

export default function ({ className }) {
  return (
    <div className={cn(className, style.root)}>
      <div className={style.inputGroup}>
        <Input type="checkbox" id="filter-full" />
        <label htmlFor="filter-full" className={style.inputLabel}>
          Full time
        </label>
      </div>
      <div className={style.locationGroup}>
        <h4>location</h4>
        <Form className={style.formLocation}>
          <InputDecorated placeholder="City, state, zip code or country" />
          <div className={style.checkboxGroup}>
            {["london", "amsterdam", "New york", "Berlin"].map((ele, index) => (
              <div className={style.inputGroup}>
                <Input
                  defaultChecked={index === 0}
                  type="radio"
                  name="filter-locations-default"
                  id={`filter-locations-default-${index}`}
                  key={`filter-locations-default-${index}`}
                />
                <label
                  htmlFor={`filter-locations-default-${index}`}
                  className={style.inputLabel}
                >
                  {ele}
                </label>
              </div>
            ))}
          </div>
        </Form>
      </div>
    </div>
  );
}
