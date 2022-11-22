import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Select from '../../components/base/Select';
import OccupationsJson from '../../utils/data/occupationPTBR.json';
import EducationJson from '../../utils/data/educationLevel.json';
import { fetchMentored, updateMentored } from '../../services/mentored';

const RegisterInMentored = () => {
  const [userData, setUserData] = useState({});
  const [inputAgeValue, setInputAgeValue] = useState(userData.age ? userData.age : '');
  const [inputCPFValue, setInputCPFValue] = useState(userData.document ? userData.document : '');
  const [inputProfessionValue, setInputProfessionValue] = useState(userData.profession ? userData.profession : '');
  const [inputInterestAreaValue, setInputInterestAreaValue] = useState(userData.interestArea ? userData.interestArea : '');
  const [inputMentorshipGoalValue, setInputMentorshipGoalValue] = useState(userData.mentorshipGoal ? userData.mentorshipGoal : '');
  const [inputEducationValue, setInputEducationValue] = useState(userData.education ? userData.education : '');
  const [hasFilled, setHasFilled] = useState(false);
  let history = useNavigate ();

  const handleUpdateMentoredData = async(e) => {
    e.preventDefault();
    const uuid = sessionStorage.getItem("logged");
    const userType = sessionStorage.getItem("type");
    const mentoredData = {
      name: userData.name,
      email: userData.email, 
      password: userData.password,
      age: Number(inputAgeValue), 
      document:inputCPFValue, 
      profession: inputProfessionValue, 
      education:inputEducationValue,
      interestArea: inputInterestAreaValue,
      mentorshipGoal: inputMentorshipGoalValue,
      feedback: userData.feedback,
      userType
    }

  if(inputProfessionValue && inputInterestAreaValue && inputMentorshipGoalValue) {
    const saved = await updateMentored(mentoredData, uuid);
    if(saved.status === 200) {
      history('/feedback');
      setHasFilled(true)
    }
  }
}

useEffect(() => {
  const fetchUserData = async() => {
    const uuid = sessionStorage.getItem("logged");
    const infos = await fetchMentored(uuid);
    setUserData(infos.data);

    if(infos?.data?.feedback) {
      setHasFilled(true);
    }
  }
  fetchUserData();
}, [])
  

  return (    
    <div className="register__group">
      <form onSubmit={(e) => handleUpdateMentoredData(e)} className="register__form">
        <Input
          label="Nome"
          placeholder="nome"
          type="text"
          value={userData.name ? userData.name : ''}
          disabled
          />
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          value={userData.email ? userData.email : ''}
          disabled
          />
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          value={userData.password ? userData.password : ''}
          disabled
          />
        <Input
          label="Idade"
          placeholder="mínimo 2 caracteres"
          type="number"
          onChange= {(e) => setInputAgeValue(e.target.value)}
          value={userData.age ? userData.age : inputAgeValue}
          disabled={userData.age ? true : false}
          required
          />
        <Input
          label="CPF"
          placeholder="11 caracteres"
          type="text"
          onChange= {(e) => setInputCPFValue(e.target.value)}
          value={userData.document ? userData.document : inputCPFValue}
          disabled={userData.document ? true : false}   
          required
          />
        <Select
          label="Área Profissional"
          name="profession"
          options={OccupationsJson}
          placeholder='Escolha sua área profissional'
          onChange= {(e) => setInputProfessionValue(e.target.value)}
          value={userData.profession ? userData.profession : inputProfessionValue}
          disabled={userData.profession ? true : false}   
          required 
        />
        <Select
          label="Escolaridade"
          name="educationLevel"
          options={EducationJson}
          placeholder='Qual sua escolaridade'
          onChange= {(e) => setInputEducationValue(e.target.value)}
          value={userData.education ? userData.education : inputEducationValue}
          disabled={userData.education ? true : false} 
          required
        />
        <Select
          label="Área de Interesse"
          name="interestArea"
          options={OccupationsJson}
          placeholder='Escolha sua área de interesse'
          onChange= {(e) => setInputInterestAreaValue(e.target.value)}
          value={userData.interestArea ? userData.interestArea : inputInterestAreaValue}
          disabled={userData.interestArea ? true : false} 
          required
        />
        <Input
          label="Objetivo da mentoria"
          placeholder="Descreva seus objetivos com a mentoria"
          onChange= {(e) => setInputMentorshipGoalValue(e.target.value)}
          textarea
          required
          value={userData.mentorshipGoal ? userData.mentorshipGoal : inputMentorshipGoalValue}
          disabled={userData.mentorshipGoal ? true : false}
          />
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Cadastar"
          disabled={hasFilled}
        />
      </form>
    </div>
  )
}

export default RegisterInMentored;