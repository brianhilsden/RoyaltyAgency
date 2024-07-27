import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {<div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>28.07.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptatum voluptates, exercitationem repudiandae sint quia laboriosam saepe iste dicta, nam accusantium tempora, libero necessitatibus laborum recusandae rem delectus magnam? Harum.;</p>
        <Link className={styles.link} href={`/blog/post`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard