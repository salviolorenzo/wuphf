import React from 'react';
import './Main.scss';
import Connect from '../Connect/Connect';

export default function Main({ socials }) {
  return (
    <div className="mainContainer">
      {socials.map(item => {
        return <Connect item={item} />;
      })}
    </div>
  );
}
