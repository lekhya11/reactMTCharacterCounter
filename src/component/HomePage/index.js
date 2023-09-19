import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import NoUserView from '../noUserView'

import './index.css'

class HomePage extends Component {
  state = {
    list: [],
    inputElement: '',
  }

  onChangeInputValue = event => {
    this.setState({inputElement: event.target.value})
  }

  onAddButton = () => {
    const {inputElement} = this.state
    const newChar = {
      id: uuidv4(),
      inputValue: inputElement,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newChar],
      inputElement: ' ',
    }))
  }

  render() {
    const {inputElement, list} = this.state
    console.log(inputElement)
    console.log(list)
    return (
      <div className="white-container">
        <NoUserView charList={list} />
        <div className="input-container">
          <h1>Character counter</h1>
          <div className="flex-container">
            <input
              className="input-element"
              type="text"
              value={inputElement}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInputValue}
            />
            <button type="button" className="button" onClick={this.onAddButton}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
