import React from "react";
import { Button } from "react-bootstrap";

const ReadOnlyRow = ({ islem, handleEditClick, handleDeleteClick }) => {
  return (  
    <tr className="tablo" key={islem.tarih}>
      
      <td>{islem.islemTuru}</td>
      <td>{islem.tutar}</td>
      <td>{islem.tarih}</td>
    
      <td>
        <Button variant="primary"
          type="button"
          onClick={(event) => handleEditClick(event, islem)}><i class="fa-solid fa-pen-to-square"></i></Button>{" "}
        <Button variant="danger"  onClick={(event)=>handleDeleteClick(islem.id)}><i class="fa-solid fa-trash-can"></i></Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;