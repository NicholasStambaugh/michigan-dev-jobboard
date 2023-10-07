import React from 'react';

interface ProfileCardProps {
  name: string;
  image: string;
  title: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, title, description }) => {
  return (
    <div className="grid-container">
      <div className="profile-card">
        <img src={image} alt={name} />
        <h2 className="text-lg leading-6 font-medium text-gray-900">{name}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;