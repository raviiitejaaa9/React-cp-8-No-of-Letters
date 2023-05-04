// Write your code here.

import {Component} from 'react'

import {className} from 'postcss-selector-parser'

import './index.css'

const inputEl = document.getElementById('search-input')
// let inputValue = inputEl.value

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeInput = event => {
    console.log(event.target.value)

    const noOfLetters = event.target.value.length

    console.log(noOfLetters)
    this.setState({count: noOfLetters})
  }

  onClickBtn = () => {
    console.log('btn clicked')
    // inputValue = ''
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="left-container">
          <h1 className="head"> Calculate the Letters you enter </h1>
          <div className="search-container">
            <label htmlFor="search-input" className="label">
              Enter the phrase
            </label>
            <input
              type=" search"
              onChange={this.onChangeInput}
              placeholder="Enter the phrase"
              className="search1"
              id="search-input"
            />
          </div>
          <p type="button" className="button" onClick={this.onClickBtn}>
            No.of letters: {count}
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
