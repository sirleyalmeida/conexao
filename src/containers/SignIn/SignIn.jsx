import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Radio from '../../components/base/Radio';
import Cta from '../../components/base/Cta';
import { SignInMentor } from '../../services/mentor';
import { SignInMentored } from '../../services/mentored';

const SignIn = () => {
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [inputUserType, setInputUserTypeValue] = useState('');
  let history = useNavigate();

const handleSignIn = async (e) => {
  e.preventDefault();
  if (inputUserType === 'mentor') {
    const responseMentor = await SignInMentor(inputEmailValue);
    sessionStorage.setItem("logged", responseMentor?.data.uuid);
    sessionStorage.setItem("type", responseMentor?.data.userType);
    history('/feedback');

    if(responseMentor?.data?.mentoreds.length > 0) {
      alert('vc tem mentorade(s), dê seu feedback');
    }
    history('/feedback');

  } else if (inputUserType === 'mentorado') {
    const responseMentored = await SignInMentored(inputEmailValue);
    sessionStorage.setItem("logged", responseMentored?.data.uuid);
    sessionStorage.setItem("type", responseMentored?.data.userType);

    if(responseMentored?.data?.mentor) {
      alert('vc tem um mentor, aguarde o feedback');
    }
    history('/feedback');

  } else {
    alert('Dados incorretos! Tente novamente');
    sessionStorage.removeItem("logged");
    sessionStorage.removeItem("type");
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