import React, { useState, useEffect} from 'react';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import { fetchMentor } from '../../services/mentor';
import { createFeedback } from '../../services/mentored';

const FeedbackMentor = () => {
  const [mentoredsList, setMentoredsList] = useState([]);
  const [feedbackValue, setFeedbackValue] = useState('');
  const [hasReplied, setHasReplaied] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const uuid = sessionStorage.getItem("logged");

  const handleMentorship = (e, index) => {
    e.preventDefault();
    setHasReplaied(!hasReplied);
    if (activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  
  const handleSubmitMentorship = async(e, uuidMentored) => {
    e.preventDefault();
    await createFeedback(uuidMentored, feedbackValue);
    setHasReplaied(true);
  }
  
  useEffect(() => {
    const fetchUserData = async() => {
      const user = await fetchMentor(uuid);
      setMentoredsList(user.data.mentoreds);
    }
    fetchUserData();
  }, [uuid])
  
  if(!mentoredsList){
    return <p className="feedback__wait">Ainda não existem mentorados para mentorar.</p>
  }
  
  return (    
    <>
    {mentoredsList?.map((item, index) => {
      return (
        <form key={index} className="feedback__item">
          <h3>{`Solicitação ${index + 1}`}</h3>
          <p>{`Área de atuação: ${item.profession}`}</p>
          <p>Área de interesse: <strong>{item.interestArea}</strong></p>
          <p>Objetivo: <strong>{item.mentorshipGoal}</strong></p>
          {!hasReplied && activeIndex === index ?
            <>
              <Button
              classNameBtn="btn__primary--closer"
              text="Mentorar"
              onClick={(e) => handleMentorship(e, index)}
              />
              <Input
              placeholder="Inicie a mentoria"
              onChange= {(e) => setFeedbackValue(e.target.value)}
              textarea
              />
              <Button 
              type="submit"
              classNameBtn="btn__tertiary"
              text="Enviar para mentorado"
              onClick={(e) => handleSubmitMentorship(e, item.uuid)}
              />
            </>
            :
            <p>Sua mentoria: <strong>{item.feedBacks}</strong></p>
          }
        </form>
        );
      })}
      </>
      )
    }
    
    export default FeedbackMentor;