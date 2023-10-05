import React from "react";

const Table = ({ tableData, tableHeaders }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          {tableHeaders.map(({ header }, index) => (
            <th scope="col" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            {Object.keys(data).map((key, index) => (
              <td>{data[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
