import React from "react";
import Page404 from "../page/404";

export default class TestProductcard extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div>
        <div className="card carte-full-params p-5 card-min-width card-width">
          <div className="image-size is-align-content-center is-flex-direction-column m-auto">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{props.data.title}</p>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  classNameName="p-4 "
                  src={props.data.images.photos}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="is-flex is-justify-content-center mt-4">
              <button className="button is-info is-rounded mr-2">Prev</button>
              <button className="button is-info is-rounded ml-2">Next</button>
            </div>
          </div>
          <div className="card-content">
            <p className="subtitle is-6 text-center">{props.data.price}</p>
            <div className="content">
              <p>{props.data.description}</p>
            </div>
          </div>
          <button className="button is-info p-5 mt-3">Ajouter au panier</button>
        </div>
      </div>
    );
  }
}
