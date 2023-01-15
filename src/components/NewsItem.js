import React from 'react'

const NewsItem =(props)=>{
    let {title,description,urlToImage,newsUrl,author,date,source}=props;
    return (
      <div className='my 3'>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span class="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
          </div>
          <img src={urlToImage?urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc_yKpiUAcTdbL4IO71IP5sBzYsjw_BApV1xi91OmtaT_xNU0zvT2_xA6-xYykf7a_wE&usqp=CAU"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description}... </p>
            <p className='card-text'><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More...</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem