import Input from "../../ui/Input";
import InputDecorated from "../../ui/InputDecorated";
import Form from "../Form/Form";
import cn from "classnames";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import style from "./FilterJobs.module.scss";
import SubHeading from "../../ui/SubHeading";
import { DEFAULT_LOCATIONS } from "../../../../../domain/setting/constants";
import { useContext } from 'react';
import FilterContext from '../../../context/FilterContext';

export default function ({ className}) {
  const {location:locationFilter,isFullTime,actions:{onChangeIsFullTime,onChangeLocation}} = useContext(FilterContext)


  return (
    <div className={cn(className, style.root)}>
      <div className={style.inputGroup}>
        <Input type="checkbox" id="filter-full" checked={isFullTime} className={style.checkbox} onChange={({target})=>{
            const isChecked = target.checked
            onChangeIsFullTime(isChecked)
        }}/>
        <label htmlFor="filter-full" className={style.inputLabel}>
          Full time
        </label>
      </div>
      <div className={style.locationGroup}>
        <Form className={style.formLocation}>
          <SubHeading>location</SubHeading>
          <InputDecorated
            placeholder="City, state, zip code or country"
            icon={faGlobeAfrica}
            className={style.inputCity}
            onChange={({target})=> onChangeLocation(target.value)}
          />
          <div className={style.radioGroup}>
            {DEFAULT_LOCATIONS.map((location, index) => (
              <div className={style.inputGroup}  key={index}>
                <Input
                  checked={location === locationFilter}
                  onChange={({target})=>{
                    const isChecked = target.checked
                    if(isChecked) onChangeLocation(location)
                  }}
                  type="radio"
                  name="filter-locations-default"
                  id={`filter-locations-default-${index}`}
                  className={style.radio}
                  value={location}
                />
                <label
                  htmlFor={`filter-locations-default-${index}`}
                  className={style.inputLabel}
                >
                  {location.toLowerCase()}
                </label>
              </div>
            ))}
          </div>
        </Form>
      </div>
    </div>
  );
}
