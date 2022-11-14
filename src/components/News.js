import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    // Always call super()
    super();
    this.state = {
      articles: [],
      loading: false,
      // As when we fetch articles from url only few articles are shown
      // rest are shown in next page
      page: 1,
      pageSize: props.pageSize, // Number of items displayed per page
    };
  }
  // It is lifecycle method and it runs after the render method
  // async method is used for synchronization
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=720434ac23664ab197957d1eaca906ba&pagesize=${this.state.pageSize}`;
    // Fetch API is used to fetch data from the url
    let data = await fetch(url); // await will help  us to wait until data is loaded completely
    // now the data is compeletely loaded
    let parseData = await data.json(); // parsing data into json format
    this.setState({
      articles: parseData.articles, // updating the articles array
      totalResults: parseData.totalResults,
      loading: false,
    }); // No. of articles
  }

  // Function for Next button to display news items for next page
  handleNextClick = async () => {
    if (
      Math.ceil(this.state.totalResults / this.state.pageSize) > this.state.page
    ) {
      this.setState({ loading: true });
      // &pageSize => number of articles we want to dispaly in page
      // &page => The page in which we are currently in.
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=720434ac23664ab197957d1eaca906ba&pagesize=${
        this.state.pageSize
      }&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  // Function for Previous button to display news items for previous page
  handlePreviousClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=720434ac23664ab197957d1eaca906ba&pagesize=${
      this.state.pageSize
    }&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Morgan News Top Headlines</h1>

        {/* Here we are displaying spinner whenever content is being loading in the website */}
        {this.state.loading && <Spinner />}

        {/*Navigation Buttons ont top */}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.totalResults / this.state.pageSize <= this.state.page
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
        
        {/* Displaying news items fetched from url using looping */}
        {/* The news item will become invisible when the page is loading next news item */}
        {!this.state.loading &&<div className="row">
          {/* Below statement is used to traverse articles array elements */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.indianexpress.com/2022/11/Pakistan-vs-England-T20-World-Cup-final.jpeg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>}
        
        {/*Navigation Buttons at bottom which will be invisble when loading occurs otherwise 2 buttons will be there */}
        {!this.state.loading &&<div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.totalResults / this.state.pageSize <= this.state.page
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>}
      </div>
    );
  }
}

export default News;
