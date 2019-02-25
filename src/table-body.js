import React from "react";

const TableBody = props => { 
  const rows = props.characterData.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>
}

export default TableBody;