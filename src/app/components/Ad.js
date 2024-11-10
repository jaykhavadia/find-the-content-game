import { useEffect } from 'react';

const Ad = ({ slotId, layout }) => {
  useEffect(() => {
    const adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
        width: layout === 'horizontal' ? '100%' : layout === 'vertical' ? '160px' : '300px',
        height: layout === 'horizontal' ? '90px' : layout === 'vertical' ? '600px' : '250px',
        margin: '10px',
      }}
      data-ad-client="ca-pub-2825016877369969" // Replace with your AdSense publisher ID
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ad;
