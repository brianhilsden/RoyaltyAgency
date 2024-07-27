import Image from "next/image";
import styles from "./singlePost.module.css";
function SinglePostPage() {
  return (
    <div className={styles.container}>
      {<div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
        </div>
      }
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
            <Image className={styles.avatar} src="https://images.pexels.com/photos/17266857/pexels-photo-17266857/free-photo-of-vase-with-flowers-and-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill/>
        </div>
        <div className={styles.detail}>
          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              Brian Omondi
            </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              28.07.2024            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur modi, hic magni inventore, blanditiis ratione illum dolorum architecto deserunt pariatur. Repudiandae corrupti odio suscipit adipisci beatae quia quis at!</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
