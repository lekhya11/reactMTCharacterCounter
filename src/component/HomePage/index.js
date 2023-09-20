import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import DisplayListItems from '../DisplayListItems'

import './index.css'

class HomePage extends Component {
  state = {
    list: [],
    inputElement: '',
  }

  onChangeInputValue = event => {
    this.setState({inputElement: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {inputElement} = this.state
    const newChar = {
      id: uuidv4(),
      inputValue: inputElement,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newChar],
      inputElement: '',
    }))
  }

  renderNoListView = () => {
    const {list} = this.state
    return (
      <div className="container">
        <h1 className="h1-element">
          Count the characters like a <br /> Boss...
        </h1>
        {list.length === 0 ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          </div>
        ) : (
          <ul>
            {list.map(each => (
              <DisplayListItems charList={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    const {inputElement, list} = this.state
    console.log(inputElement)
    console.log(list)
    return (
      <div className="white-container">
        {this.renderNoListView()}
        <div className="input-container">
          <h1>Character counter</h1>
          <form className="flex-container" onSubmit={this.onAddButton}>
            <input
              className="input-element"
              type="text"
              value={inputElement}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInputValue}
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default HomePage
