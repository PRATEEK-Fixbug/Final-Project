import React from 'react';
import './help.css'
function Help() {
  return (
    <div className="wrapper2">
      <div className="bg">Help</div>
      <div className="fg">Help</div>
    <section>
        <h1>Feedback & Complaint</h1>
        
        <div className="form-container">
            <h1 className="form-header">Enter Your Information</h1>
            <form id="myForm" action="submit.php" method="post">
                <label className="form-label" htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="text-input" required /><br /><br />

                <label className="form-label" htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="text-input" required /><br /><br />

                <label className="form-label" htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" className="text-input" rows="4" required></textarea><br /><br />

                <button type="submit" className="submit-button">Submit</button>
            </form>
</div>
    </section>
    <section id="container3">
        <h2>Ways to Use the Website</h2>
        <ul>
            <li>Register for an account to access exclusive features.</li>
            <li>Submit feedback or complaints using the form above.</li>
            <li>Explore our products and services.</li>
            <li>Read blog posts and articles on various topics.</li>
            <li>Contact our support team for assistance.</li>
        </ul>
    </section>


    </div>
  );
}

export default Help;
