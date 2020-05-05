import React, { Component } from "react";
// import { connect } from "react-redux";
// import { deleteBus } from "../store/actions";

class BusList extends Component {
  render() {
    const bus = this.props.bus;

    return (
      <div className=" mx-auto mt-2 text-center">
        <table className="table table-borderless bg-light table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              {/* <th scope="col"></th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bus.driver_name}</td>
              {/* <td>
                {" "}
                <button
                  type="button"
                  class="btn btn-danger  "
                  onClick={() => this.props.deleteBus(bus)}
                >
                  DELETE
                </button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteBus: (bus) => dispatch(deleteBus(bus)),
//   };
// };
export default BusList;
