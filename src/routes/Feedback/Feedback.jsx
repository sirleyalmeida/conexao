import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';
import FeedbackMentor from '../../containers/FeedbackMentor';
import FeedbackMentored from '../../containers/FeedbackMentored';

const Feedback = () => {
  const isMentor = sessionStorage.getItem("type") === 'mentor' ? true : false;

  return (    
    <>
      <NavBar />
      <div className="container container__login">
        {isMentor ? <FeedbackMentor/> :  <FeedbackMentored/> }
      </div>
      <Footer />
    </>
  )
}

export default Feedback;