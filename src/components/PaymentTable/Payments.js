import React, { Fragment, useState } from 'react'
import {Table, Button} from 'react-bootstrap'
import {nanoid} from "nanoid"
import data from "../transaction-data.json";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
function Odemeler(){

    const [transactions, setTransactions] = useState(data);
    const [addFormData, setAddFormData] = useState({
      tutar: "",
      islemTuru: "",
      tarih: ""
    });
  
    const [editFormData, setEditFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editIslemId, setEditIslemId] = useState(null);

    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        tutar: addFormData.tutar,
        islemTuru: addFormData.islemTuru,
        tarih: addFormData.tarih,
      }; const newTransactions = [...transactions, newContact];
      setTransactions(newTransactions);
    };

    const handleDeleteClick = (transactionId) => {
      const newContacts = [...transactions];
  
      const index = transactions.findIndex((contact) => contact.id === transactionId);
  
      newContacts.splice(index, 1);
  
      setTransactions(newContacts);
    };

    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editIslemId,
        tutar: editFormData.tutar,
        islemTuru: editFormData.islemTuru,
        tarih: editFormData.tarih
      };
  
      const newContacts = [...transactions];
  
      const index = transactions.findIndex((contact) => contact.id === editIslemId);
  
      newContacts[index] = editedContact;
  
      setTransactions(newContacts);
      setEditIslemId(null);
    };
  
    const handleEditClick = (event, islem) => {
      event.preventDefault();
      setEditIslemId(islem.id);
  
      const formValues = {
        fullName: islem.fullName,
        address: islem.address,
        phoneNumber: islem.phoneNumber,
        email: islem.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditIslemId(null);
    };

    return (
      <div>
        <form onSubmit={handleEditFormSubmit}>
  <div className="tablo">
      <form onSubmit={handleAddFormSubmit}>
     
      <select
          type="text"
          name="islemTuru"
          required="required"
          placeholder="İşlem Türü"
          onChange={handleAddFormChange}>
            <option value="">İşlem Türü</option>
          <option value="Elektrik">Elektrik</option>
          <option value="Doğal Gaz">Doğal Gaz</option>
          <option value="Su">Su</option>
          <option value="İnternet">İnternet</option>
          <option value="Kira">Kira</option>
          <option value="Alışveriş">Alışveriş</option>
          <option value="EFT">EFT</option>
          <option value="Havale">Havale</option>
        </select>
        
        <input
          type="number"
          name="tutar"
          required="required"
          placeholder="İşlem Tutarı..."
          onChange={handleAddFormChange}/>

        <input
          type="text"
          name="tarih"
          required="required"
          placeholder="İşlem Tarihi..."
          onChange={handleAddFormChange}/>
        
        <Button type='submit' variant="success" size='sm' onClick={handleAddFormSubmit}>Ekle</Button>
        </form> </div>
        <Table striped hover bordered>
          <thead >
            <tr className='tablo'>
              
              <th>İşlem Türü</th>
              <th>Tutar (₺)</th>
              <th>Tarih</th>
              <th/>
            </tr>
          </thead>
          <tbody>
          {transactions.map((islem)=>(
            <Fragment>
            {editIslemId === islem.id ? (
              <EditableRow
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleCancelClick={handleCancelClick}
              />
            ) : (
              <ReadOnlyRow
                islem={islem}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            )}
          </Fragment> ) )}
          </tbody>
        </Table></form>
        
      </div>
    )
  }export default Odemeler;
