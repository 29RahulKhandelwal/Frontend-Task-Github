import React from 'react'
import "./Pagination.css"

const Pagination = ({repoPerPage,totalRepo,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalRepo/repoPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <nav className='paginate'>
        <ul className="pagination">
            {pageNumbers.map(number=>{
                return <li key={{number}} className="page-item">
                    <a onClick={()=>paginate(number)} className='page-link'>
                        {number}
                    </a>
                </li>
            })}
        </ul>
    </nav>
  )
}

export default Pagination