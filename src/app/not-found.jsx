import Link from "next/link"

const NotFound = () => {
  return (
    <>
    <h2>not-found</h2>
    <p>Sorry, the page you are looking for does not exist</p>
    <Link href="/">Return home</Link>
    </>
  )
}
export default NotFound
