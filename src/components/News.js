import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: '6',
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult: 0,
    };
    document.title=`${this.props.category}-NewsMonkey`;
  }

  async UpdateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.UpdateNews();
  }

  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
      loading: false,
    });
  }
 

  capital=(string )=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className="container my 3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}> NewsMonkey - Top {this.capital(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResult}
            loader={<Spinner/>}
          >
        <div className="row my 3">
          { this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} urlToImage={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              );
            })}
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
