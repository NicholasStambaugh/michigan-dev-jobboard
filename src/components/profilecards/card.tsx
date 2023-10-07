import React from 'react';
import ProfileCard from './index';

const Card: React.FC = () => {
    return (
        <div className="grid-container">
          <ProfileCard
            name={'Nick S.'}
            image={'./public/73977662.png'}
            title={'BI Developer'}
            description={''}
          />
        </div>
      );
};

export default Card;