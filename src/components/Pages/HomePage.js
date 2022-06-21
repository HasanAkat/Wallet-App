import React, { useState } from 'react'
import {Button,Modal,ProgressBar} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Past from '../PaymentTable/Payments';

function HomePage() {
  const navigate = useNavigate();
  navigate('/Login');

  const [hedef, setHedef] = useState(10000);
  const [yHedef, setyHedef] = useState(hedef);
  function changeHedef(){
    
    setHedef(yHedef);
    handleClose2();
  }

  const [total, setTotal] = useState(4000);
  const [number1, setNumber1] = useState(total);
  
  function changeTotal() {
    setTotal(number1);
    handleClose();
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  
    return (
    <>   <Button style={{float: 'right'}} variant="danger" onClick={navigate}><i class="fa-solid fa-right-from-bracket"></i> Çıkış Yap</Button>
    <div className='background'>
    <h1>Net Varlık</h1>
    <h1>{total} <i class="fa-solid fa-turkish-lira-sign"></i></h1>
    </div>    
      <div style={{marginBottom:"50px"}} className='Butonlar'>
        <Button variant="success" onClick={handleShow}><i class="fa-solid fa-wallet"></i> Bakiyeyi Güncelle </Button>{'  '}
        <Modal centered show={show} onHide={handleClose}>
       
        <Modal.Header closeButton>
        Nakit Bakiyeniz: {total}
        </Modal.Header>

        <Modal.Body >   
        <input
          type="number"
          onChange={(e) => setNumber1(+e.target.value) }
          placeholder="Yeni bakiyenizi giriniz"
        /> <i class="fa-solid fa-turkish-lira-sign"></i>
        </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
          <Button variant="success" onClick={changeTotal}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>   

       <Button variant='success' onClick={handleShow2}><i class="fa-solid fa-money-bill-trend-up"></i> Hedef Belirle </Button>{'  '}
       <Modal centered show={show2} onHide={handleClose2}>
       
        <Modal.Header closeButton>
        Birikim yapmak için hedef belirleyiniz.
        </Modal.Header>

        <Modal.Body >   
        <input
          type="number"
          onChange={(e) => setyHedef(e.target.value) }
          placeholder="Hedefinizi giriniz"
        /> <i class="fa-solid fa-turkish-lira-sign"></i>
        </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            İptal
          </Button>
          <Button variant="success" onClick={changeHedef}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <div style={{marginBottom:"50px"}} className='background'>
       HEDEF: {hedef}₺
      <ProgressBar striped variant="success" now={total*100/hedef} label={`${total*100/hedef}%`} />
      </div>
      <Past />
    
      </>
    )
  }
export default HomePage;


