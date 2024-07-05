import React from "react";

function Article(props) {
  return (
    <div className="article">
      <img src={"/" + props.image} alt="" className="article-img" />

      <div className="article-text">
        <div className="article-text-location">
          <i className="aritcle-text-location-icon"></i>
          <p className="aritcle-text-location-country">{props.location}</p>
          <a
            href={props.mapsLink}
            target="_blank"
            className="article-location-link"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="article-text-name">{props.title}</h2>
        <h3 className="article-text-date">
          {props.startDate} - {props.endDate}
        </h3>

        <p className="article-text-info">{props.desc}</p>
      </div>
    </div>
  );
}

export default Article;
