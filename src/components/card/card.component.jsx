import React, { Component } from 'react'
import './card.css'

function Card({imageUrl, title, body, git, url, skill1, skill2, skill3}) {
    return(  
        <div class="card"><img src={imageUrl}/>
          <div class="skills">
            <h3>
              {skill1}
            </h3>
            <h3>
              {skill2}
            </h3>
            <h3>
              {skill3}
            </h3>
          </div>
          <div class="info">
            <h1>{title}</h1>
            <p>{body}</p>
            <div className="card_buttons">
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href=git;
                  }}
                >Github</button>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href=url;
                  }}
                >Live Site</button>
            </div>
          </div>
        </div>
    )
}

export default Card
