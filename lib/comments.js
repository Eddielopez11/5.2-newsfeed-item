import React from 'react'

export default React.createClass({
  render() {
    return (
      <section>
        <img className="commentAvatar" src={this.props.authorSelfie} alt="commenters avatar"/>
        <h3>{ this.props.commentAuthor }</h3>
        <time>{ this.props.time }</time>
        <p>{ this.props.comment }</p>
      </section>
    )
  }
})
