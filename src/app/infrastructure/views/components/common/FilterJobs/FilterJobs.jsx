import Input from "../../ui/Input";
import InputDecorated from "../../ui/InputDecorated";
import Form from "../Form/Form";
import cn from "classnames";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

import style from "./FilterJobs.module.scss";

export default function ({ className }) {
  return (
    <div className={cn(className, style.root)}>
      <div className={style.inputGroup}>
        <Input type="checkbox" id="filter-full" className={style.checkbox} />
        <label htmlFor="filter-full" className={style.inputLabel}>
          Full time
        </label>
      </div>
      <div className={style.locationGroup}>
        <Form className={style.formLocation}>
          <h4 className={style.headingLocation}>location</h4>
          <InputDecorated
            placeholder="City, state, zip code or country"
            icon={faGlobeAfrica}
            className={style.inputCity}
          />
          <div className={style.radioGroup}>
            {["london", "amsterdam", "New york", "Berlin"].map((ele, index) => (
              <div className={style.inputGroup}>
                <Input
                  defaultChecked={index === 0}
                  type="radio"
                  name="filter-locations-default"
                  id={`filter-locations-default-${index}`}
                  key={`filter-locations-default-${index}`}
                  className={style.radio}
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
