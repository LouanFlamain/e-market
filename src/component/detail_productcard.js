import Page404 from "../page/404";
import Caroussel from "./CAROUSSEL";

export default function DetailProductcard(props) {
  /*  function btnSkip() {
    $number++;
    console.log($number);
  }
  function btnPrev() {
    $number -= 1;
    console.log($number);
  } */
  var $raters = "";
  if (props.data.raters == null) {
    $raters = "0";
  } else {
    $raters = props.data.raters;
  }
  var $rating = "";
  if (props.data.rating == null) {
    $rating = "Pas de notes pour ce produit";
  } else {
    $rating = props.data.rating;
  }
  var $priceFinal = "";
  var $price = props.data.price;
  var $priceDiscount = props.data.priceDiscount;
  if (props.data.priceDiscount != null) {
    $priceFinal = "Prix : " + $price + " -> " + $priceDiscount;
  } else {
    $priceFinal = "Prix : " + $price;
  }
  return (
    <div>
      <div className="card carte-full-params p-5 card-min-width card-width">
        <div className="image-size is-align-content-center is-flex-direction-column m-auto">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.data.title}</p>
            </div>
          </div>
          <Caroussel data={props.data.images.photos} />
        </div>
        <div className="card-content">
          <p className="subtitle is-6 text-center">{$priceFinal}</p>
          <div className="content">
            <p>{props.data.description}</p>
          </div>
          <p className="mt-2 mb-2">Catégorie : {props.data.category}</p>
          <p className="mt-2 mb-2">
            Nombre de produits en stock : {props.data.stock}
          </p>
          <p className="mt-2 mb-2">Note du Produit : {$rating}</p>
          <p className="mt-2 mb-2">Nombre de notes : {$raters}</p>
        </div>
        <button className="button is-info p-5 mt-3">Ajouter au panier</button>
      </div>
    </div>
  );
}
/*          <div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  classNameName="p-4 "
                  src={props.data.images.photos[$number]}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="is-flex is-justify-content-center mt-4">
              <button
                onClick={btnPrev}
                className="button is-info is-rounded mr-2"
              >
                Prev
              </button>
              <button
                onClick={btnSkip}
                className="button is-info is-rounded ml-2"
              >
                Next
              </button>
            </div>
          </div> */
