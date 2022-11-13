import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Sports Desk",
      title:
        "Pakistan vs England Live Score Updates, T20 World Cup 2022: Adil Rashid spins a web after PowerPlay - The Indian Express",
      description:
        "Pakistan vs England Live Score Updates, T20 World Cup 2022: Two years after it hosted the Women's T20 World Cup final, the Melbourne Cricket Ground will see the winners of the 2022 men's competition.",
      url: "https://indianexpress.com/article/sports/cricket/pakistan-vs-england-live-score-updates-t20-world-cup-2022-8265196/",
      urlToImage:
        "https://images.indianexpress.com/2022/11/Pakistan-vs-England-T20-World-Cup-final.jpeg",
      publishedAt: "2022-11-13T08:40:31Z",
      content:
        "The fifth ball of the third over, from Sam Curran to Babar Azam, was wide and angling away. Most of left-armer Sam Curran’s deliveries, apart from a ball that cut back a shade into Mohammad Rizwan, h… [+490 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title: "This is how much Apple iPhone 15 Ultra may cost | Mint - Mint",
      description:
        "Apple iPhone 15 Ultra will be a new iPhone model coming under iPhone 15 series. It is said to replace the iPhone 14 Pro Max.",
      url: "https://www.livemint.com/technology/gadgets/this-is-how-much-apple-iphone-15-ultra-may-cost-11668327149649.html",
      urlToImage:
        "https://images.livemint.com/img/2022/11/13/600x338/Apple-iPhone-14_1668327386441_1668327386765_1668327386765.jpg",
      publishedAt: "2022-11-13T08:17:31Z",
      content:
        "Features of iPhone 15 Ultra have been buzzing the internet for a while now. In a latest, details have leaked about the upcoming iPhone. A latest tweet by industry insider LeaksApplePro suggests that … [+1733 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Shah Rukh Khan Stopped At Mumbai Airport For Hours Over Luxury Watches - NDTV",
      description:
        "Reports said the Bollywood star was stopped by Customs over some expensive watches found in his baggage and had to pay Rs 6.83 lakh in Customs Duty before being allowed to leave the airport",
      url: "https://www.ndtv.com/india-news/shah-rukh-khan-stopped-at-mumbai-airport-for-hours-over-luxury-watches-allowed-to-go-after-paying-rs-6-83-lakh-in-customs-duty-3514104",
      urlToImage:
        "https://c.ndtvimg.com/2022-09/4jpf295o_shah-rukh-khan_625x300_17_September_22.jpg",
      publishedAt: "2022-11-13T07:46:00Z",
      content:
        "Shah Rukh Khan landed at Mumbai Airport after attending the Sharjah International Book Fair\r\nMumbai: Actor Shah Rukh Khan was stopped for hours by the Customs Department at Mumbai Airport last night … [+986 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Tech Desk",
      title:
        "Apple's mixed-reality headset could launch next March for $2000 - The Indian Express",
      description:
        "Apple's long-rumoured mixed-reality headset will come with a dedicated processor and feature two ultra-high-resolution 8K displays.",
      url: "https://indianexpress.com/article/technology/tech-news-technology/apples-mixed-reality-headset-could-launch-next-march-for-2000-usd-8265563/",
      urlToImage:
        "https://images.indianexpress.com/2022/11/Apple-AR-meta-featured.jpeg",
      publishedAt: "2022-11-13T06:51:16Z",
      content:
        "After spending years developing its mixed-reality headset, Apple could finally start mass production of the device in March 2023. Sources told DigiTimes Asia that the headset could enter production e… [+1461 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Pooja Yadav",
      title:
        "What Are The Northern Lights And Are They Disappearing? - Indiatimes.com",
      description:
        "One of the world's most stunning sights is the Northern Lights, which are best seen in the Nordic countries. About 10% of tourists travel to Norway to witness its beauty.There are many claims that they will disappear. Is it possible and if yes, what could be …",
      url: "https://www.indiatimes.com/explainers/news/what-are-the-northern-lights-and-are-they-disappearing-584388.html",
      urlToImage:
        "https://im.indiatimes.in/content/2022/Nov/000_32M23QQ_636ca1bba404e.jpg",
      publishedAt: "2022-11-13T06:42:46Z",
      content:
        "One of the world's most stunning sights is the Northern Lights, which are best seen in the Nordic countries. About 10% of tourists travel to Norway to witness its beauty.\r\nThere are many claims that … [+4154 chars]",
    },
  ];
  constructor() {
    // Always call super()
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Morgan News Top Headlines </h2>
        
        <div className="row">
          {/* Below statement is used to traverse articles array elements */}
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
                <NewsItem
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage} 
                newsUrl={element.url}/>
                </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
