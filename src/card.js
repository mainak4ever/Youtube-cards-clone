function Card(props) {
  const card = props.obj;
  if (card.title.length > 27) {
    card.title = card.title.substring(0, 27) + "...";
  }
  return (
    <div className="card">
      <div className="tumbnail">
        <img
          src={card.thumbnailUrl}
          className="thumbnail-img"
          alt={"thumbnail" + card.id}
        ></img>
      </div>
      <div className="video-details">
        <div>
          <img
            className="logo"
            src={card.channelLogoUrl}
            alt={"thumbnail" + card.id}
          ></img>
        </div>
        <div className="details">
          <h3 className="video-title">{card.title}</h3>
          <div className="data">
            <p>{card.channelName}</p>
            <p>
              Likes: {card.likes / 1000}k <span className="space">•</span>{" "}
              Views: {card.views / 1000}k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
