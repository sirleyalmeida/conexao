import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
import { createMentor } from '../../services/mentor';

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

  let history = useNavigate ();

  const clickRegister = (e) => {
    e.preventDefault();
      if(inputNameValue && inputEmailValue && inputPasswordValue) {
        createMentor(inputNameValue, inputEmailValue, 
          inputPasswordValue, inputAgeValue, inputCPFValue, inputProfessionValue, 
          inputPraticeAreaValue, inputPraticeTimeValue, inputEducationValue, "mentor");
        history('/');
      } else {
        alert('Preencha todos os campos!');
      }
  }

  return (    
    <div className="register__group">
      <Image
        classNameImage="image__banner"
        src="/logo2x.png"
        alt="Banner Login"
      />
      <form className="register__form">
        <Input
          label="Nome"
          placeholder="nome"
          type="text"
          onChange= {(e) => setInputNameValue(e.target.value)}/>
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          onChange= {(e) => setInputEmailValue(e.target.value)}/>
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          onChange= {(e) => setInputPasswordValue(e.target.value)}/>
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
        {/* <Cta
          classNameCta="cta__primary"
          text="Voltar ao Login"
          href="/"
        />  */}
      </form>
    </div>
  )
}

export default RegisterInMentor;