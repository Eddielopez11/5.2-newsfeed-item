import React from 'react'

export default React.createClass({
  render() {
    return (
      <section className="comment__section">
        <img className="comment__avatar" src={this.props.authorSelfie} alt="commenters avatar"/>
        <div className="comment__div">
          <h3 className="comment__author">{ this.props.commentAuthor }</h3>
          <p className="comment__p">{ this.props.comment }</p>
          <time className="comment__time">{ this.props.time }</time>
        </div>
      </section>
    )
  }
})
