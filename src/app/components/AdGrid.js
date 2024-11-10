import React from 'react';
import Ad from './Ad';

const AdGrid = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '10px',
      padding: '20px'
    }}>
      <Ad slotId="3535750518" layout="vertical" />
      <Ad slotId="5427416684" layout="horizontal" />
      <Ad slotId="8217231559" layout="vertical" />
      <Ad slotId="4581238872" layout="horizontal" />
      <Ad slotId="4070965389" layout="square" />
    </div>
  );
};

export default AdGrid;
