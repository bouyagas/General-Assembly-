import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: 'This is a title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laboriosam, explicabo saepe mollitia praesentium consequatur quasi nemo laborum, quisquam eum. Ab enim maiores iste nemo eum quae asperiores, et ullam!',
      comments: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sed, labore corporis facere deserunt adipisci quisquam explicabo itaque veritatis vel! Adipisci porro, in vel maiores suscipit blanditiis voluptates, iure. A.',
          author: 'Anon1'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sed, labore corporis facere deserunt adipisci quisquam explicabo itaque veritatis vel! Adipisci porro, in vel maiores suscipit blanditiis voluptates, iure. A.',
          author: 'Anon2'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sed, labore corporis facere deserunt adipisci quisquam explicabo itaque veritatis vel! Adipisci porro, in vel maiores suscipit blanditiis voluptates, iure. A.',
          author: 'Anon3'
        },
      ],
    }
  }

  render() {
    const comments = this.state.comments.map((comment, i) => {
      return (
        <Comment
          key={i}
          author={comment.author}
          commentText={comment.text}
        />
      );
    });

    return (
    <div>
        <h2>{this.state.title}</h2>
        <h3>By: {this.props.postAuthor}</h3>
        <p>{this.state.content}</p>
        <h4>Comment Section</h4>
        {comments}
    </div>
    );
  }
}

export default Post;
