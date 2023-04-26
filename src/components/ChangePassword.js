import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('The new password and password repetition do not match.');
      setSuccess('');
      return;
    }

    try {
      const checkPassword = await axios.post('/change-password', { oldPassword, newPassword });

      if (checkPassword.data.error) {
        setError('Your current password is incorrect.');
        setSuccess('');
        return;
      }

      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setSuccess('Password changed successfully.');
      setError('');
    } catch (error) {
      console.log(error);
      setError('Something went wrong.');
      setSuccess('');
    }
  };

  
  return (
    <>

      <div className="change_password">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
            <div className="change_password_form">
          <div >
            <label htmlFor="old_password">Old Password:</label>
            <input
            className='input2'
              type="password"
              id="old_password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="new_password">New Password:</label>
            <input
            className='input2'
              type="password"
              id="new_password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
            className='input2'
              type="password"
              id="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Change Password</button>
          <br/><br/>
          <Link to="/portal">Cancel</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;



