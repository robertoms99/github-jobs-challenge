import FilterContext from '../../../context/FilterContext'
import useFilter from '../../../hooks/useFilter'

const FilterContextProvider = (props) => {
  const filterCurrentValue = useFilter()

  return (
    <FilterContext.Provider value={filterCurrentValue}>
      {props.children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider
