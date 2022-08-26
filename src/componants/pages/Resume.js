import React from 'react';
import R from '../../assets/R.pdf';

export default function Resume() {
    return (
      <div className='container text-center'>

        <h2>Resume Page</h2>

            <a href={R} target='download' > Resume PDF </a>

      </div>

    );
};