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
          comment: "The Iron Yard?? i thought they were a coding school lol im pretty sure the pizza place was next to their billboard!"
        },
        {
          id: 2,
          authorSelfie: "http://40.media.tumblr.com/95d6fe6e181be2d0a998cd28c79d3b28/tumblr_nd7y7fmxuG1r3i26so1_400.jpg",
          commentAuthor: "Too Fabulous 4 U",
          time: "ten minutes ago",
          comment: "I like dogs!!!"
        },
        {
          id: 3,
          authorSelfie: "http://data.whicdn.com/images/254835513/large.jpg",
          commentAuthor: "pizza is life",
          time: "this morning",
          comment: "OMG YEEEESSS they make the BEST pizza!!"
        }
      ]
    }
  },
  render() {
    return (
      <section className="article__section">
        <div className="article__div">
          <article>
            <img className="article__avatar" src="http://straightfromthea.com/wp-content/uploads/2013/07/random-selfie.jpg" alt="best article author ever"/>
            <div className="article__authorNtime">
              <h2 className="article__author">Mileeeeeeey</h2>
              <time className="article__time">August 30, 2016</time>
            </div>
            <p className="article__p">I just totally had the best pizza every!! It was made by The Iron Yard... at least i think? Anyways, the pizza was Bomb dot com!</p>
          </article>
          <div className="article__likeNcomment">
            <span> like </span>
            <span> comment </span>
          </div>
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
