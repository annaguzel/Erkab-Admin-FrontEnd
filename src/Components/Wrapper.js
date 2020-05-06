import React, { Component } from "react";
import WrapperTemplate from "./PageTemplate/WrapperTemplate";

const Wrapper = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <WrapperTemplate {...this.props}>
          <WrappedComponent {...this.props} />
        </WrapperTemplate>
      );
    }
  };
};
export default Wrapper;
