import React from "react";

function RightFooter(props) {
  return (
    <footer className="footer  ">
      <div className="row ">
        <ul className="nav">
          <li className="nav-item">
            <a
              href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
              className="nav-link"
            >
              CREATIVE TIM
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.creative-tim.com/presentation?ref=bdr-user-archive-footer&_ga=2.193936869.931601879.1598867425-752177021.1598867425"
              className="nav-link"
            >
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.creative-tim.com/blog?ref=bdr-user-archive-footer"
              className="nav-link"
            >
              BLOG
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default RightFooter;