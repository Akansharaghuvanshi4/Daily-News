import React, { Component } from 'react'

import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
   static defaultProps={
    country:'us',
    pagesize:8,
    category:'general'
   }
   static PropsTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
   }
  captilizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}

    constructor(props){
        super(props);
        console.log("helllon i am a constructor");
        this.state={
             articles: [],
             loading:false,
             page:1
             
        }
        document.title=`${this.captilizeFirstLetter(this.props.category)} - dailyNews`;
    }


    
async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e4b83360f054ff884a26e5dae505e72&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading:false
    })

}
handlePrevclick=async()=>{
    console.log("previos")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e4b83360f054ff884a26e5dae505e72&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({loading:false})
    this.setState({articles: parsedData.articles})

    this.setState({
        page:this.state.page-1,
     
    })
}
 handleNextclick=async()=>{
    console.log("next")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9e4b83360f054ff884a26e5dae505e72&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({loading:false})
    this.setState({articles: parsedData.articles})
    this.setState({
        page:this.state.page+1,
        
      
    })
}


  render() {
    return (
      

      <div className="container my-3">
        <h1 className="text-center"> Daily News - Top Headlines on {this.captilizeFirstLetter(this.props.category)}</h1>
     { this.state.loading && <Spinner/>}
    
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{

      return <div className="col-md-3" key ={element.url}>
        
       <Newsitems title={element.title}description={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
       </div>
        })}

      
      
       
       </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr;Previous</button>
      <button type="button" className="btn btn-dark" onClick={this.handleNextclick}> Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
