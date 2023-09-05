// Footer.js
import React from 'react';

class Footer extends React.Component {
    // Add any animations or interactions here

    render() {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="social-media">
                        <a href="#" className="social-icon facebook">Facebook</a>
                        <a href="#" className="social-icon twitter">Twitter</a>
                        <a href="#" className="social-icon instagram">Instagram</a>
                        <a href="#" className="social-icon linkedin">LinkedIn</a>
                    </div>
                    <p className="copyright">© 2023 Smash</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
