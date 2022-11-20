import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div class="rounded-social-buttons">
        <a
          class="social-button facebook"
          href="https://www.facebook.com/artem.dubovik.56/"
          target="_blank"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          class="social-button twitter"
          href="https://www.twitter.com/"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          class="social-button linkedin"
          href="https://www.linkedin.com/in/artem-dubovyk-739340187/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          class="social-button youtube"
          href="https://www.youtube.com/"
          target="_blank"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          class="social-button instagram"
          href="https://instagram.com/dubovyk.a"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
