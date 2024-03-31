import Image from 'next/image';
import React from 'react';
import styles from "./about.module.css"
const AboutPage = () => {
  return (
        <div >
      <div>

      {/* Use the imported image directly */}
      <Image className={styles.img} src="/about.png" alt="about" width={500} height={500} />
      </div>
    </div>
  );
};

export default AboutPage;
