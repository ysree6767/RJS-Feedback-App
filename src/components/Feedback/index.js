// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  thankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankYouContainer">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="thankYou"> Thank You </h1>
        <p>
          {' '}
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img src={each.imageUrl} alt={each.name} className="emoji" />
                <p>{each.name} </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="container">
        <div className="feedback-container">
          {isFeedbackSelected ? this.thankYou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
