import React from "react"

function LeftFooter (props){
    return(
        <div className="row">
        <p> © 2020 made with"</p>
        <i className="far fa-heart"></i>
        by
        <a
          href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
          target="_blank"
        >
          Creative Tim
        </a>
        <p> for a better web</p>
      </div>
    )
}
export default LeftFooter;