import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/codenamenoah" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://linkedin.com/in/codenamenoah" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://twitter.com/CodeNameNoahH" target="blank">
            <li>
              <FaTwitterSquare />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
