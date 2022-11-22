import React, { useState, useEffect} from 'react';
import { fetchMentored } from '../../services/mentored';


const FeedbackMentored = () => {
    const [feedbackMentor, setFeedbackMentor] = useState({});
    const uuid = sessionStorage.getItem("logged");
    
    useEffect(() => {
        const fetchUserData = async() => {
            const user = await fetchMentored(uuid);
            setFeedbackMentor(user.data);
        }
        fetchUserData();
    }, [uuid]);

    if(!feedbackMentor.feedBacks){
        return <p className="feedback__wait">Aguardando feedback de um mentor.</p>
    }

    return(
        <div className="feedback__item">
            <h3>Feedback do seu mentor:</h3>
            <p><strong>{feedbackMentor.feedBacks}</strong></p>
            <hr></hr>
            <p>{`Profissional com atuação em: ${feedbackMentor.mentor.profession}`}</p>
            <p>{`Tempo de profissão: ${feedbackMentor.mentor.practiceTime}`}</p>
        </div>
    );
}
export default FeedbackMentored;