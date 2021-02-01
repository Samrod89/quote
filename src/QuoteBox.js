import './App.css';
import React from "react"

const QuoteBox = ({quote,author, color, func}) => {
    return (
        <div className="container" style={{backgroundColor:color}}>
            <div className="card">
                <div style={{color:color}} className="quote">
                    <p><i className="fas fa-quote-left"></i>{quote}</p>
                </div>
            <div style={{color:color}} className="author">
              <p>{author}</p>
            </div>
            <div className="bird">
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" ><i className="fab fa-twitter" style={{color: color}}></i></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <button style={{backgroundColor:color}} onClick={func}> Next Quote</button>
            </div>
         </div>
        </div>
         
     ); 
     

}

export default QuoteBox;
