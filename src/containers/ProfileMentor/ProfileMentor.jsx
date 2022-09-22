import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import { createMentor, fetchMentor } from '../../services/mentor';

const RegisterInMentor = () => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputAgeValue, setInputAgeValue] = useState('');
  const [inputCPFValue, setInputCPFValue] = useState('');
  const [inputProfessionValue, setInputProfessionValue] = useState('');
  const [inputPraticeAreaValue, setInputPraticeAreaValue] = useState('');
  const [inputPraticeTimeValue, setInputPraticeTimeValue] = useState('');
  const [inputEducationValue, setInputEducationValue] = useState('');
  const [userData, setUserData] = useState({});


  let history = useNavigate ();

  const clickRegister = (e) => {
   console.log('click')
  }

  useEffect(() => {
    const fetchUserData = async() => {
      const uuid = sessionStorage.getItem("logged");
      const infos = await fetchMentor(uuid);
      setUserData(infos.data);
    }
    fetchUserData();
  }, [])

  return (    
    <div className="register__group">
      <form className="register__form">
        <Input
          label="Nome"
          value={userData.name}
          placeholder="nome"
          type="text"
          onChange= {(e) => setInputNameValue(e.target.value)}
          disabled
          />
        <Input
          label="E-mail"
          value={userData.email}
          placeholder="seuemail@exemplo.com"
          type="email"
          onChange= {(e) => setInputEmailValue(e.target.value)}
          disabled
          />
        <Input
          label="Senha"
          value={userData.password}
          placeholder="mínimo 6 caracteres"
          type="password"
          onChange= {(e) => setInputPasswordValue(e.target.value)}
          disabled
          />
        <Input
          label="Idade"
          placeholder="mínimo 2 caracteres"
          type="number"
          onChange= {(e) => setInputAgeValue(e.target.value)}/>
        <Input
          label="CPF"
          placeholder="11 caracteres"
          type="text"
          onChange= {(e) => setInputCPFValue(e.target.value)}/>
        <Input
          label="Profissão"
          placeholder=""
          type="text"
          onChange= {(e) => setInputProfessionValue(e.target.value)}/>
        <Input
          label="Área Profissional"
          placeholder=""
          type="text"
          onChange= {(e) => setInputPraticeAreaValue(e.target.value)}/>
        <Input
          label="Tempo de Profissão"
          placeholder=""
          type="text"
          onChange= {(e) => setInputPraticeTimeValue(e.target.value)}/>
        <Input
          label="Escolaridade"
          placeholder=""
          type="text"
          onChange= {(e) => setInputEducationValue(e.target.value)}/>
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Cadastar"
          onClick={(e) => clickRegister(e)}
        />
      </form>
    </div>
  )
}

export default RegisterInMentor;