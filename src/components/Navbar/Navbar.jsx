import Link from "next/link"
import Links from "./links/links"
import styles from "./navbar.module.css"

const Navbar = async () => {


  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Royalty inc.</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar