import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
import Radio from '../../components/base/Radio';
import { createMentor } from '../../services/mentor';
import { createMentored } from '../../services/mentored';

const RegisterIn = () => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputUserType, setInputUserTypeValue] = useState('');
  let history = useNavigate();

  const handleRegisterIn = async (e) => {
    e.preventDefault();
      if(inputNameValue && inputEmailValue && inputPasswordValue && inputUserType) {
        let hasResponse = ''
        if(inputUserType === 'mentor') {
          hasResponse = await createMentor(inputNameValue, inputEmailValue,inputPasswordValue, "mentor");
        } else {
          hasResponse = await createMentored(inputNameValue, inputEmailValue,inputPasswordValue, "mentored");
        }
        sessionStorage.setItem("logged", hasResponse.data.uuid);
        sessionStorage.setItem("type", hasResponse.data.userType);
        history('/profile');
      }
  }
  
  return (    
    <div className="sign__group">
      <Image
        classNameImage="image__banner"
        src="/logo2x.png"
        alt="Banner Login"
      />
      <form onSubmit={(e) => handleRegisterIn(e)} className="sign__form">
        <Input
          label="Nome"
          placeholder="seu nome"
          type="name"
          name="nome"
          onChange= {(e) => setInputNameValue(e.target.value)}
          required
          />
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          name="email"
          onChange= {(e) => setInputEmailValue(e.target.value)}
          required
          />
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          name="senha"
          onChange= {(e) => setInputPasswordValue(e.target.value)}
          required
        />
        <div className="sign__form__radio">
          <Radio
              label="Mentor"
              id="mentor"
              name="user_type"
              onChange= {(e) => setInputUserTypeValue(e.target.value)}
              required
            />
          <Radio
            label="Mentorado"
            id="mentored"
            name="user_type"
            onChange= {(e) => setInputUserTypeValue(e.target.value)}
          />
        </div>
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Cadastrar"
        />
        <Cta
          classNameCta="cta__primary"
          text="Já sou cadastrado"
          href="/signin"
        />
        
      </form>
    </div>
  )
}

export default RegisterIn;