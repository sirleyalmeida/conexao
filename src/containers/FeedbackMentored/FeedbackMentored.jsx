import React, { useState, useEffect} from 'react';
import { fetchMentored } from '../../services/mentored';


const FeedbackMentored = () => {
    const [feedbackMentor, setFeedbackMentor] = useState({});
    const uuid = sessionStorage.getItem("logged");

    const fetchUserData = async() => {
        const user = await fetchMentored(uuid);
        setFeedbackMentor(user.data);
    }
    
    useEffect(() => {
        fetchUserData();
    }, []);

    if(!feedbackMentor.feedBacks){
        return <p className="feedback__wait">Aguardando feedback de um mentor.</p>
    }

    return(
        <div className="feedback__item">
            <h3>Feedback do seu mentor:</h3>
            <p>{feedbackMentor.feedBacks}</p>
        </div>
    );
}
export default FeedbackMentored;