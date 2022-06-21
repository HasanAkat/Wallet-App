import React from "react";
import { Button } from "react-bootstrap";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="islemTuru"
          required="required"
          placeholder="İşlem Türü"
          value={editFormData.islemTuru}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
            type="number"
            name="tutar"
            required="required"
            placeholder="İşlem Tutarı..."
          value={editFormData.tutar}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="tarih"
          required="required"
          placeholder="İşlem Tarihi..."
          value={editFormData.tarih}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <Button variant="success" type="submit">Kaydet</Button>
      <Button variant="secondary" type="button" onClick={handleCancelClick}>İptal</Button>
      </td>
    </tr>
  );
};

export default EditableRow;