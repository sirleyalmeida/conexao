import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
import { SignInMentor } from '../../services/mentor';
import { SignInMentored } from '../../services/mentored';

const SignIn = () => {
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  let history = useNavigate();

const handleSignIn = async (e) => {
  e.preventDefault();
  const responseMentor = await SignInMentor(inputEmailValue);
  const responseMentored = await SignInMentored(inputEmailValue);
  if (responseMentor?.data.userType === 'mentor') {
    sessionStorage.setItem("logged", responseMentor?.data.uuid);
    sessionStorage.setItem("type", responseMentor?.data.userType);
    history('/feedback');
  } else if (responseMentored?.data.userType === 'mentored') {
    sessionStorage.setItem("logged", responseMentored?.data.uuid);
    sessionStorage.setItem("type", responseMentored?.data.userType);

    if(responseMentored?.data?.mentor) {
      alert('vc tem um match, aguarde o feedback')
    } else {
      history('/feedback');
    }
  } else {
    alert('Dados incorretos! Tente novamente');
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
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Entrar"
          onClick={(e) => handleSignIn(e)}
        />
        <Cta
          classNameCta="cta__primary"
          text="Não sou cadastrado"
          href="/"
        />
      </form>
    </div>
  )
}

export default SignIn;