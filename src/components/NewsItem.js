import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    // Here we are doing destructuring, we are pulling title and description from props object
    let {title,description, imgUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} style={{width: "100%", height:"150px"}}className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,80):""}...</h5>
            <p className="card-text">{description?description.slice(0,88):""}...</p>
            {/* target = "_blank"  is used for opening the content in new tab*/}
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem