
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import RightMenuButton from './user-submenu/UserSubmenu';
import UserDetails from './userdetails/UserDetails';
import './UserPreferences.scss';

const UserPreferences = () => {
  const navigate = useNavigate();
  const user = useAppSelector(({ user }) => user);

  const handleClickNavigate = async () => {
    navigate('/dashboard/user-preferences');
  };

  // useEffect(() => {
  //   console.log('backgroundColor', backgroundColor)
  // }, [backgroundColor]);

  return (
    <div className='entire-user-preferences'>
      <div className='container-user-settings'>
        <h1>User Details</h1>
        <div className='details'>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
        <span>{user.email}</span>
        <span>{user.twitterToken ? 'Connected to Twitter' : ''}</span>
        <button className='right-menu-slide-right' >
          <RightMenuButton />
        </button>
        <div className='current-user-settings' onClick={handleClickNavigate}>
          <label className='current-preferences-user' htmlFor='user-name'>
            Current Preferences
          </label>
          <div className='frequency-tweet-posting'>
            <p>Daily posting frequency:</p>
            {user.frequencyTweetPosting}
          </div>
          <div className='selected-hours'>
            <p>Posting hours:</p>
            {user.postingHours.map((hour: number) => (
              <p key={hour}>{hour < 10 ? `0${hour}:00 h` : `${hour}:00 h`}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='user-details'>
        <UserDetails />
      </div>
    </div>
  );
};

export default UserPreferences;
