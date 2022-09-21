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
  const [mentorados, setMentorados] = useState([]);
  let history = useNavigate();

  const handleRegisterIn = async (e) => {
    e.preventDefault();
      if(inputNameValue && inputEmailValue && inputPasswordValue && inputUserType) {
        let hasResponse = ''
        if(inputUserType === 'mentor') {
          await createMentor(inputNameValue, inputEmailValue,inputPasswordValue, "mentor");
          history('/profile');
        } else {
          await createMentored(inputNameValue, inputEmailValue,inputPasswordValue, "mentored");
          history('/profile');
        }
        
        // console.log(hasResponse.data.uuid)
        // if(hasResponse.status === 200)
       

      } else {
        alert('Preencha todos os campos!');
      }
  }
  
  return (    
    <div className="sign__group">
      <Image
        classNameImage="image__banner"
        src="/logo2x.png"
        alt="Banner Login"
      />
      <form className="sign__form">
      <Input
          label="Nome"
          placeholder="seu nome"
          type="name"
          name="nome"
          onChange= {(e) => setInputNameValue(e.target.value)}/>
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          name="email"
          onChange= {(e) => setInputEmailValue(e.target.value)}/>
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          name="senha"
          onChange= {(e) => setInputPasswordValue(e.target.value)}
        />
        <div className="sign__form__radio">
          <Radio
              label="Mentor"
              id="mentor"
              name="user_type"
              onChange= {(e) => setInputUserTypeValue(e.target.value)}
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
          onClick={(e) => handleRegisterIn(e)}
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