import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {reviewindex: 0, maxindex: 0}

  updateReviewListLength(reviewsList) {
    const listLength = reviewsList.length - 1
    this.setState({maxindex: listLength})
  }

  prevReview = () => {
    const {reviewindex} = this.state
    if (reviewindex !== 0) {
      this.setState(prevState => ({reviewindex: prevState.reviewindex - 1}))
    }
  }

  nextReview = () => {
    const {reviewindex, maxindex} = this.state
    if (reviewindex !== maxindex) {
      this.setState(prevState => ({reviewindex: prevState.reviewindex + 1}))
    }
  }
  render() {
    const {reviewsList} = this.props
    const {reviewindex, maxindex} = this.state
    if (maxindex === 0) {
      this.updateReviewListLength(reviewsList)
    }
    const review = reviewsList[reviewindex]
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="main-con">
        <h1 className="heading">Reviews</h1>
        <div>
          <div className="carousel">
            <button
              onClick={this.prevReview}
              className="btn"
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="review-details">
              <img src={imgUrl} alt={username} />
              <p className="username">{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              onClick={this.nextReview}
              className="btn"
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
