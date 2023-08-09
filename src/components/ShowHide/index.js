import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  firstName = () => {
    this.setState(previousState => ({isFirstName: !previousState.isFirstName}))
  }

  lastName = () => {
    this.setState(previousState => ({isLastName: !previousState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="first-name-card">Joe</p>}
          </div>
          <div>
            <button className="button" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="first-name-card">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
