import React from 'react'
import classes from "./RepositoryCard.module.css"

const RespositoryCard = (props) => {
  const description = props?.data?.description
  return (
    <div className={classes.respositoryCard} key={props?.id}>
      <div id={classes.card} className="card">
        <h5 className="card-header">{props.data.name}</h5>
        <div className="card-body">
          <h6 className={classes.h6Tag}>{props.data.full_name}</h6>
          <p className="card-text">{props?.data?.description?.substr(0, 45)}...</p>
          <p className="card-text">{props.data.homepage}</p>
          <a className={classes.anchorTag} href={props.data.html_url}>{props.data.html_url}</a>
        </div>
      </div>
    </div>
  )
}

export default RespositoryCard