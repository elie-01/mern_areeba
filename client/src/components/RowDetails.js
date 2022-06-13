import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({Name, Address, Number, Id, OnDelete}) {
 
  return (
    <tr>
    <th>{Name}</th>
    <td>{Address}</td>
    <td>{Number}</td>
    <td className="gap__actions">
      <span className="badge bg-info">
        <Link to={`/${Id}`} className="text-white">
          <i className="fas fa-edit"></i>
        </Link>
      </span>

      <span className="badge bg-danger" onClick={()=>OnDelete(Id)}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </td>
  </tr>
  )
}

export default RowDetails