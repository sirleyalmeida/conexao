import React, { useState, useEffect} from 'react';
import Button from '../../components/base/Button';
import { listMatches } from '../../services/mentor';
import Input from '../../components/base/Input';

const FeedbackMentor = () => {
  const [matchesList, setMatchesList] = useState([]);
  const [mentorshipValue, setMentorshipValue] = useState('');
  const [hasResponse, setHasResponse] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleMentorship = (e, index) => {
    e.preventDefault();
    setHasResponse(!hasResponse);
    if (activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  const handleSubmitMentorship = (e) => {
    e.preventDefault();
    console.log('do stg with', mentorshipValue)
  }

  useEffect(() => {
    const fetchMatches = async() => {
      const matches = await listMatches();
      if (matches.data.length > 0) setMatchesList(matches.data);
      
    }
    fetchMatches();
  }, [])
  
  return (    
    <>
      {matchesList.length === 0 ? 
        <p className="feedback__wait">Não existem mentorados ainda para sua área de atuação</p>
        :
        matchesList?.map((item, index) => {
          return (
            <form key={item.id} className="feedback__item">
              <h3>{`Solicitação ${item.id}`}</h3>
              <p>{item.body}</p>
              <Button
                classNameBtn="btn__primary--closer"
                text="Mentorar"
                onClick={(e) => handleMentorship(e, index)}
              />
              {hasResponse && activeIndex === index &&
                <>
                  <Input
                      placeholder="Inicie a mentoria"
                      onChange= {(e) => setMentorshipValue(e.target.value)}
                      textarea
                    />
                  <Button 
                    type="submit"
                    classNameBtn="btn__tertiary"
                    text="Enviar para mentorado"
                    onClick={(e) => handleSubmitMentorship(e)}
                  />
                </>
              }
            </form>
          );
        })
      }
    </>
  )
}

export default FeedbackMentor;