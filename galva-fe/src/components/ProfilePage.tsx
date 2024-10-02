import React, { useState, useEffect } from 'react';
import ProfilePictureUploader from './ProfilePictureUploader';
import { signIn } from '../services/authService';
import './styles/ProfilePage.css';

const ProfilePage: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string | ArrayBuffer | null>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [currentPlan, setCurrentPlan] = useState<string>('Free');

  useEffect(() => {
    // Fetch user data from auth service
    const fetchUserData = async () => {
      try {
        const response = await signIn({ email: 'user@example.com', password: 'password' }); // Example credentials
        setUserName(response.user_id?.toString() || ''); // Assuming `user_id` is userName
        setEmail('user@example.com'); // Example email
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleUpdateClick = () => {
    // Handle profile update logic here
    alert('Profile updated successfully!');
  };

  const handleCancelPlanClick = () => {
    // Handle cancel plan logic here
    alert('Plan cancelled!');
  };

  const handleUpgradePlanClick = () => {
    // Handle upgrade plan logic here
    alert('Plan upgraded!');
  };

  return (
    <div className="profile-page-container flex flex-col items-center justify-center p-8 gap-6 max-w-md mx-auto">
      <ProfilePictureUploader initialImage={profilePicture as string} onImageUpload={setProfilePicture} />
      <form className="w-full">
        <div className="form-group mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="currentPlan" className="block text-sm font-medium text-gray-700">Current Plan</label>
          <input
            type="text"
            id="currentPlan"
            value={currentPlan}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={handleUpdateClick}
            className="w-full bg-blue-500 text-white p-2 rounded-md shadow-lg hover:bg-blue-600"
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleCancelPlanClick}
            className="w-full bg-red-500 text-white p-2 rounded-md shadow-lg hover:bg-red-600"
          >
            Cancel Plan
          </button>
          <button
            type="button"
            onClick={handleUpgradePlanClick}
            className="w-full bg-green-500 text-white p-2 rounded-md shadow-lg hover:bg-green-600"
          >
            Upgrade Plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;