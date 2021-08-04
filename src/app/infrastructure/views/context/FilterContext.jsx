import { createContext } from "react";
import { CONTEXT_STATE_FILTERS } from "../../../domain/setting/constants";

const FilterContext = createContext(CONTEXT_STATE_FILTERS);

const FilterProvider = function () {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};

export default FilterProvider;
