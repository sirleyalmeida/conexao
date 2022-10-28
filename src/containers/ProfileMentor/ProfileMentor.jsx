import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Select from '../../components/base/Select';
import AreasJson from '../../utils/data/areas.json';
import OccupationsJson from '../../utils/data/occupationPTBR.json';
import EducationJson from '../../utils/data/educationLevel.json';
import PracticeTimeJson from '../../utils/data/practiceTime.json';
import { fetchMentor, updateMentor } from '../../services/mentor';

const RegisterInMentor = () => {
  const [userData, setUserData] = useState({});
  const [inputAgeValue, setInputAgeValue] = useState(userData.age ? userData.age : '');
  const [inputCPFValue, setInputCPFValue] = useState(userData.document ? userData.document : '');
  const [inputProfessionValue, setInputProfessionValue] = useState(userData.profession ? userData.profession : '');
  const [inputPraticeAreaValue, setInputPraticeAreaValue] = useState(userData.practiceArea ? userData.practiceArea : '');
  const [inputPraticeTimeValue, setInputPraticeTimeValue] = useState(userData.practiceTime ? userData.practiceTime : '');
  const [inputEducationValue, setInputEducationValue] = useState(userData.education ? userData.education : '');
  const [hasFilled, setHasFilled] = useState(false)
  let history = useNavigate ();
  
  const handleUpdateMentorData = async(e) => {
    e.preventDefault();
    const uuid = sessionStorage.getItem("logged");
    const userType = sessionStorage.getItem("type");
    const mentorData = {
      name: userData.name,
      email: userData.email, 
      password: userData.password,
      age: Number(inputAgeValue), 
      document:inputCPFValue, 
      profession: inputProfessionValue, 
      practiceArea: inputPraticeAreaValue, 
      practiceTime: inputPraticeTimeValue, 
      education: inputEducationValue,
      userType
    }
    if(inputProfessionValue && inputPraticeAreaValue && inputPraticeTimeValue && inputEducationValue) {
      const saved = await updateMentor(mentorData, uuid);
      if(saved.status === 200) {
        history('/feedback');
        setHasFilled(true)
      }
    }
  }

  useEffect(() => {
    const fetchUserData = async() => {
      const uuid = sessionStorage.getItem("logged");
      const infos = await fetchMentor(uuid);
      setUserData(infos.data);
      console.log('infos', infos.data)
      if(infos?.data.practiceArea) {
        setHasFilled(true)
      }
    }
    fetchUserData();
  }, [])

  return (    
    <div className="register__group">
      <form onSubmit={(e) => handleUpdateMentorData(e)} className="register__form">
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
          onChange = {(e) => setInputAgeValue(e.target.value)}
          value={userData.age ? userData.age : inputAgeValue}
          disabled={userData.age ? true : false}
          required
        />
        <Input
          label="CPF"
          placeholder="11 caracteres"
          type="text"
          onChange = {(e) => setInputCPFValue(e.target.value)}
          value={userData.document ? userData.document : inputCPFValue}
          disabled={userData.document ? true : false}   
          required       
        />
        <Select
          label="Área Profissional"
          name="interestArea"
          options={AreasJson}
          placeholder='Qual sua área profissional'
          onChange = {(e) => setInputPraticeAreaValue(e.target.value)}
          value={userData.practiceArea ? userData.practiceArea : inputPraticeAreaValue}
          disabled={userData.practiceArea ? true : false} 
          required
        />
        <Select
          label="Área Profissional"
          name="profession"
          options={OccupationsJson}
          placeholder='Qual sua área de conhecimento'
          onChange = {(e) => setInputProfessionValue(e.target.value)}
          value={userData.profession ? userData.profession : inputProfessionValue}
          disabled={userData.profession ? true : false}   
          required    
        />
        <Select
          label="Tempo de Profissão"
          name="practiceTime"
          options={PracticeTimeJson}
          placeholder='Tempo de atuação'
          onChange = {(e) => setInputPraticeTimeValue(e.target.value)}
          value={userData.practiceTime ? userData.practiceTime : inputPraticeTimeValue}
          disabled={userData.practiceTime ? true : false}
          required
        />
        <Select
          label="Escolaridade"
          name="educationLevel"
          options={EducationJson}
          placeholder='Qual sua escolaridade'
          onChange = {(e) => setInputEducationValue(e.target.value)}
          value={userData.education ? userData.education : inputEducationValue}
          disabled={userData.education ? true : false}
          required
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

export default RegisterInMentor;