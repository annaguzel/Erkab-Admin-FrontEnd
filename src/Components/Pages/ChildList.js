import React from "react";

const ChildList = ({ child }) => (
  <tr>
    <td>{child.name}</td>
    <td>{child.dob}</td>
  </tr>
);

export default ChildList;
