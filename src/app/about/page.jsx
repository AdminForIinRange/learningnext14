import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      {/* Use the imported image directly */}
      <Image src="/about.png" alt="about" width={500} height={500} />
    </div>
  );
};

export default AboutPage;
