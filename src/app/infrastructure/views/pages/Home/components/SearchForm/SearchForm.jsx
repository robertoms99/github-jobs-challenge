import cn from 'classnames'
import Form from '../../../../components/common/Form/Form'
import Button from '../../../../components/ui/Button'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import buttonStyle from '../../../../components/ui/Button/Button.module.scss'
import InputDecorated from '../../../../components/ui/InputDecorated'
import style from './SearchForm.module.scss'
import { useContext } from 'react'
import FilterContext from '../../../../context/FilterContext'

const SearchForm = (props) => {
  const { description, actions } = useContext(FilterContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    actions.onChangeDescription(e.target.value)
  }

  return (
    <Form className={cn(props.className, style.root)} onSubmit={handleSubmit}>
      <InputDecorated
        className={style.inputGroup}
        placeholder="Title, companies, expertise or benefits"
        icon={faBriefcase}
        value={description}
        onChange={handleChange}
      />
      <Button className={cn(buttonStyle.primary)}>search</Button>
    </Form>
  )
}

export default SearchForm
