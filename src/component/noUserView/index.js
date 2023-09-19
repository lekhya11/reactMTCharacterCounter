import './index.css'

const NoUserView = props => {
  const {charList} = props

  const renderingListElements = each => (
    <li key={each.id}>
      <h1>
        {each}: {each.length}
      </h1>
    </li>
  )

  return (
    <div className="container">
      <h1 className="h1-element">
        Count the characters like a <br /> Boss...
      </h1>
      {charList.length === 0 ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        </div>
      ) : (
        <ul>{charList.map(each => renderingListElements(each))}</ul>
      )}
    </div>
  )
}

export default NoUserView
