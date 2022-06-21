import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Login () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValidation = () => {
    const regEx = /abc@gmail.com/g;
    const regEx2 = /1234/g;
    if (regEx.test(email)) {
      if (regEx2.test(password)) {
       navigate('/home');}
    }

  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setPassword(e.target.value);
  };


  return (
      <form className='auth-inner'>
        <h3 style={{textAlign: "center"}}>Giriş Yap</h3>
        <div className="mb-3">
          <label>E-posta</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="E-postanızı giriniz"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label>Şifre</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Şifrenizi giriniz"
            value={password}
            onChange={handleOnChange2}
          />
        </div>
        <div className="mb-3">
          
        </div>
        <div className="d-grid">
          <button className="btn btn-success" onClick={emailValidation}>
          Giriş Yap
          </button>
        </div>
      </form>
    )
  }
export default  Login;