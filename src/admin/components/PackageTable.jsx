import React from "react";
import Rating from "../../modules/Ratings";
const PackageTable = props => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Img </th>
          <th>Category</th>
          <th>Location</th>
          <th>Name</th>
          <th>Price</th>
          <th>Rating </th>
        </tr>
      </thead>
      <tbody>
        {props.packages.map(item => (
          <tr key={item.id}>
            <td style={{ height: "100px", width: "100px" }}>
              <img
                style={{ width: "100%" }}
                src={item.bg_img}
                alt={item.name}
              />
            </td>
            <td>{item.category.name}</td>
            <td>{item.location.name}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <Rating rating={item.rating} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PackageTable;
