import React, { useState } from "react";

function CommentSection() {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  return (
    <section className="comment-section">
      <h2>Comments</h2>
      <div className="comments-list">
        {commentsList.map((c, index) => (
          <div key={index} className="comment">
            {c}
          </div>
        ))}
      </div>
      <div className="comment-input">
        <textarea
          placeholder="Add your comment..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={handleSubmitComment}>Submit</button>
      </div>
    </section>
  );
}

const userGuideItems = [
  {
    title: "Getting Started",
    content: "Learn how to create an account and get started with our platform.",
  },
  {
    title: "FAQs",
    content: "Find answers to common questions about our services.",
  },
  // Add more user guide items here
];

function UserGuideSection() {
  return (
    <section className="user-guide-section">
      <h2>User Guide</h2>
      <ul className="user-guide-list">
        {userGuideItems.map((item, index) => (
          <li key={index} className="user-guide-item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


const HelpComponents = {
    CommentSection,
    UserGuideSection,
  };
  
  export default HelpComponents;
