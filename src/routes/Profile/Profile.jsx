import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';
import ProfileMentor from '../../containers/ProfileMentor';
import ProfileMentored from '../../containers/ProfileMentored';

const Profile = () => {
  const isMentor = sessionStorage.getItem("type") === 'mentor' ? true : false;

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