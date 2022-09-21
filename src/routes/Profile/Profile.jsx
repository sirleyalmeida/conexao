import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';
import ProfileMentor from '../../containers/ProfileMentor';
import ProfileMentored from '../../containers/ProfileMentored';

const Profile = () => {
  const isMentor = false; //it can be on context got from response
  return (    
    <>
      <NavBar />
      <div className="container container__login">
        {isMentor ? <ProfileMentor/> :  <ProfileMentored/> }
      </div>
      <Footer />
    </>
  )
}

export default Profile;