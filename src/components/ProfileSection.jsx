import React from 'react'
import classes from "./ProfileSection.module.css";

const ProfileSection = (props) => {
  return (
    <div className={classes.profileSection}>
        <div className={classes.profile}>
            <img className={classes.img} src={props?.data?.avatar_url} alt="user-profile-img" />
            <h1 className={classes.h1Tag}>{props?.data?.name}</h1>
            <h1 className={classes.h1Tag}>{props?.data?.login}</h1>
            <p className={classes.paraTag}>Followers: {props?.data?.followers} Following: {props?.data?.following}</p>
            <p className={classes.paraTag}>{props?.data?.bio}</p>
            <a className={classes.anchorTag} href={props?.data?.html_url}>{props?.data?.html_url}</a>
        </div>
    </div>
  )
}

export default ProfileSection