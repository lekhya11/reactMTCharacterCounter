import './index.css'

const DisplayListItems = props => {
  const {charList} = props
  const {inputValue} = charList
  return (
    <li>
      <p>
        {inputValue} : {inputValue.length}
      </p>
    </li>
  )
}

export default DisplayListItems
