import useFilter from '../../../hooks/useFilter'
import FilterContext from '../../../context/FilterContext.js'

const FilterContextProvider = (props) => {
  const filterCurrentValue = useFilter()

  return (
    <FilterContext.Provider value={filterCurrentValue}>
      {props.children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider
