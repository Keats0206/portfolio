import React from 'react';
import "./socialicons.css";
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function SocialIcons() {
  return (
    <div className='social-container'>
        <IconButton 
            aria-label="linkedin" 
            onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://www.linkedin.com/in/pete-keating-523a9659/';
            }}>
            <LinkedInIcon />
        </IconButton>
        <IconButton 
            aria-label="github"
            onClick={(e) => {
                e.preventDefault();
                window.location.href='https://github.com/Keats0206';
            }}>
            <GitHubIcon />
        </IconButton>
        <IconButton 
            aria-label="twitter" 
            onClick={(e) => {
                e.preventDefault();
                window.location.href='https://twitter.com/thepetekeating';
            }}>
            <TwitterIcon />
        </IconButton>
    </div>
  );
}