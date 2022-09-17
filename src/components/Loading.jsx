import React from 'react'
import "./Loading.css"

const Loading = () => {
    return (
        <div class="spinner-border text-primary loading center" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}

export default Loading