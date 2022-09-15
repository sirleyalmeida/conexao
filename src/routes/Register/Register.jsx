import RegisterIn from '../../containers/RegisterIn';
import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';


const Regsiter = () => {

  return (   
    <>
      <NavBar />
      <div className="container container__login">
        <RegisterIn />
      </div>
      <Footer />
    </>
  )
}

export default Regsiter;