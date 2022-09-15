import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';
import RegisterInMentor from '../../containers/RegisterInMentor';
import RegisterInMentored from '../../containers/RegisterInMentored';

const Regsiter = () => {
  const isMentor = false; //it can be on context got from response
  return (    
    <>
      <NavBar />
      <div className="container container__login">
        {isMentor ? <RegisterInMentor/> :  <RegisterInMentored/> }
      </div>
      <Footer />
    </>
  )
}

export default Regsiter;