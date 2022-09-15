import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
import { createMentored } from '../../services/mentored';

const RegisterIn = () => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputAgeValue, setInputAgeValue] = useState('');
  const [inputCPFValue, setInputCPFValue] = useState('');
  const [inputProfessionValue, setInputProfessionValue] = useState('');
  const [inputfieldOfInterestValue, setInputFieldOfInterestValue] = useState('');
  const [inputMentorshipGoalValue, setInputMentorshipGoalValue] = useState('');

  let history = useNavigate ();

  const clickRegister = (e) => {
    e.preventDefault();
      if(inputNameValue && inputEmailValue && inputPasswordValue) {
        createMentored(inputNameValue, 
          inputEmailValue, inputPasswordValue, inputAgeValue, inputCPFValue, inputProfessionValue, 
          inputfieldOfInterestValue, inputMentorshipGoalValue, "mentored");
        history.push('/');
      } else {
        alert('Preencha todos os campos!');
      }
  }

  return (    
    <div className="sign__group">
      <Image
        classNameImage="image__banner"
        src="/logo.png"
        alt="Banner Login"
      />
      <form className="sign__form">
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
          label="Área de Interesse"
          placeholder=""
          type="text"
          onChange= {(e) => setInputFieldOfInterestValue(e.target.value)}/>
        <Input
          label="Objetivo da mentoria"
          placeholder="Descreva seus objetivos com a mentoria"
          onChange= {(e) => setInputMentorshipGoalValue(e.target.value)}
          textarea/>
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Cadastar"
          onClick={(e) => clickRegister(e)}
        />
        <Cta
          classNameCta="cta__primary"
          text="Voltar ao Login"
          href="/"
        /> 
      </form>
    </div>
  )
}

export default RegisterIn;