import React from 'react'
import Comments from './comments'

export default React.createClass({
  getInitialState() {
    return {
      comments: [
        {
          id: 1,
          authorSelfie: "https://kafflick22.files.wordpress.com/2014/03/demi-l.jpg",
          commentAuthor: "Demi",
          time: "right meow",
          comment: "this article isnt that good"
        },
        {
          id: 2,
          authorSelfie: "http://40.media.tumblr.com/95d6fe6e181be2d0a998cd28c79d3b28/tumblr_nd7y7fmxuG1r3i26so1_400.jpg",
          commentAuthor: "Too Fabulous 4 U",
          time: "ten minutes ago",
          comment: "i like dogs"
        },
        {
          id: 3,
          authorSelfie: "http://data.whicdn.com/images/254835513/large.jpg",
          commentAuthor: "pizza is life",
          time: "this morning",
          comment: "this article is not lit"
        }
      ]
    }
  },
  render() {
    return (
      <section>
        <article>
          <img className="articleAvatar" src="http://straightfromthea.com/wp-content/uploads/2013/07/random-selfie.jpg" alt="best article author ever"/>
          <h2>Mileeeeeeey</h2>
          <time>August 30, 2016</time>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </article>
        <div>
          <span> like </span>
          <span> comment </span>
        </div>
        {
          this.state.comments.map((comment) => {
            return <Comments key={comment.id} id={comment.id} authorSelfie={comment.authorSelfie} commentAuthor={comment.commentAuthor} time={comment.time} comment={comment.comment}/>
          })
        }
      </section>
    )
  }
})
