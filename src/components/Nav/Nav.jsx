import "./Nav.css"

const Nav = ({ handlePageNavigation }) => {

  return (
    <nav>
      <h2>Starwars API</h2>
      <ul>
        <li><button onClick={() => { handlePageNavigation("films") }}>Films</button></li>
        <li><button onClick={() => { handlePageNavigation("people") }}>People</button></li>
        <li><button onClick={() => { handlePageNavigation("species") }}>Species</button></li>
        <li><button onClick={() => { handlePageNavigation("planets") }}>Planets</button></li>
      </ul>
    </nav>
  )
}

export default Nav;