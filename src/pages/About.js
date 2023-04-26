import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function About() {
  return (
    <>
      <div className='about'>
        <Sidebar />
        <div className='about_content'>
          <h1>User Profile</h1>
          <br/>
          <h4>Changing Password</h4>
          <p>You can change your password by clicking <Link to="/change-password">here</Link>.</p>
<br/>
          <h4>Changing Application</h4>
          <p>You can edit your application by clicking <Link to="/edit-application">here</Link>.</p>

          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    </>
  );
}

export default About;