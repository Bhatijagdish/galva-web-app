import React, { useState } from 'react';

interface ProfilePictureUploaderProps {
  initialImage?: string;
  onImageUpload: (image: string | ArrayBuffer | null) => void;
}

const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({ initialImage, onImageUpload }) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(initialImage || '');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-picture-uploader">
      <label htmlFor="file-input">
        <img
          src={typeof image === 'string' ? image : undefined}
          alt="Profile"
          className="profile-picture rounded-full object-cover w-[150px] h-[150px] border-2 border-white shadow-lg cursor-pointer"
        />
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePictureUploader;