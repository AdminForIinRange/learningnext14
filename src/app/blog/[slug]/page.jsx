import Image from 'next/image'
import React from 'react'
import styles from './singlePost.module.css'
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
   
      <div className={styles.imgContainer}>
        <Image  src="https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
      </div>

    <div className={styles.textContainer}>
      <h1 className={styles.title}>saqadcwdv wefd </h1>
      <div className={styles.detail}>
{/*   
//add userpost img */}
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>aUTHOR</span>
          <span className={styles.detailValue}>
          detailValue
          </span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>
          detailValue
          </span>
        </div>
      </div>
      <div className={styles.content}>SSWEFWEFWEFQWVETQV3TGVQWERTG1QVEWG1V3RGI 9 GIG98 G9UG 9UG 9UG UG P9</div>
    </div>
  </div>
  )
}

export default SinglePostPage