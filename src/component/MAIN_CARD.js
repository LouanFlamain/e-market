import { Link } from "react-router-dom";

export default function MainCard(props) {
  let attributPrice = props.data.priceDiscount;
  if (props.data.priceDiscount === null) {
    attributPrice = "";
  } else {
    attributPrice = " -> " + props.data.priceDiscount;
  }
  return (
    <div className="card m-6 carte card-min-width">
      <div className="card-image p-6 is-128x128">
        <figure className="image">
          <img src={props.data.images.photos} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.data.title}</p>
          </div>
        </div>
        <div className="content">
          <p>Prix : {props.data.price + attributPrice} </p>
          <p>Note moyenne du produit : {props.data.rating}</p>
          <Link to={"product/" + props.data.id}>
            <button className="button is-info p-5">Plus d'information</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
