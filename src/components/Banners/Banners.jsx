import React from 'react';
import './_styles.scss';
import ad1 from '../../assets/img/main/ad1.png';
import ad2 from '../../assets/img/main/ad2.png';

export default function Banner() {
  return (
    <section>
      <div className="container banner__container">
        <img src={ad1} alt="ad" width={625} />
        <img src={ad2} alt="ad" />
      </div>
    </section>
  );
}
