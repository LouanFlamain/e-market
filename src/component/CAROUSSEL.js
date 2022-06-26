import React from "react";

export default class Caroussel extends React.Component {
  state = {
    $number: 0,
  };

  constructor(props) {
    super(props);

    this.btnPrev = this.btnPrev.bind(this);
    this.btnNext = this.btnNext.bind(this);
  }
  btnPrev() {
    this.setState((state) => {
      if (this.state.$number == 0) {
        return {
          $number: this.props.data.length - 1,
        };
      } else {
        return {
          $number: this.state.$number - 1,
        };
      }
    });
  }
  btnNext() {
    this.setState((state) => {
      if (this.state.$number == this.props.data.length - 1) {
        return {
          $number: 0,
        };
      } else {
        return {
          $number: this.state.$number + 1,
        };
      }
    });
  }
  PhotosChoice() {}
  render(props) {
    return (
      <div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              classNameName="p-4"
              src={this.props.data[this.state.$number]}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="is-flex is-justify-content-center mt-4">
          <button
            onClick={this.btnPrev}
            className="button is-info is-rounded mr-2"
          >
            Prev
          </button>
          <button
            onClick={this.btnNext}
            className="button is-info is-rounded ml-2"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
