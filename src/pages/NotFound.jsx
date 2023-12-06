import './../styles/notfound.css'
import { Link } from 'react-router-dom'
import NotFound from './../img/notfound.png'

function NotFoundPage() {
  return (
    <>

      <section className="home">
        <div className="image">
          <img src={NotFound} alt="Scarecrow.png" />
        </div>

        <div className="content">
          <h1>Ooooops...</h1>
          <p>Страница которую вы искали не найдена :(</p>

          <Link to="/" class="btn">Go Homepage</Link>
        </div>


      </section>

    </>


  )
}



export { NotFoundPage };