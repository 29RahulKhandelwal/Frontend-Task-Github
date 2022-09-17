import React from 'react'
import Pagination from './Pagination'
import classes from "./RepositorySection.module.css"
import RespositoryCard from './RespositoryCard'

const RepositorySection = (props) => {
  return (
    <div className={classes.repositorySection}>
        <div className={classes.repository}>
          <h1 className={classes.h1Tag}>Repositories</h1>
          <div className={classes.cards}>
          {props.data.length > 0 && props.data.map(data=>{
            if(data?.id){
              return <RespositoryCard data={data} key={data.id} />
              }
            })}
          </div>
        </div>
        <Pagination repoPerPage={props.repoPerPage} totalRepo={props.totalRepo} paginate={props.paginate} />
    </div>
  )
}

export default RepositorySection