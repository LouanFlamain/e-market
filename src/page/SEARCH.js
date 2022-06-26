import React from "react";
import Mainpage from "../component/TOPDISCOUNT";

export default class Search extends React.Component {
  state = {
    load: false,
  };
  constructor() {
    super();
  }
  render() {
    return (
      <div className="p-2 mt-5">
        <Mainpage />
      </div>
    );
  }
}
