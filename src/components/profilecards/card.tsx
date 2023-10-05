import React from 'react';
import ProfileCard from './index';

const Card: React.FC = () => {
    return (
        <div className="grid-container">
          {Array.from({ length: 24 }).map((_, index) => (
            <ProfileCard
              key={index}
              name={'Nick S.'}
              image={'./public/73977662.png'}
              title={'BI Developer'}
              description={''}
            />
          ))}
        </div>
      );
};

export default Card;