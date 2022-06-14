
function Navigation({nav}) {

  return (

    <div className="nav-container">
    <div className="nav">
      <div className="logo">
        <img src={nav[0].menu_logo.url}></img>
      </div>
      <ul className="nav-items">
        {nav[0].menu_items.menu_item.map((item) => {return <li key={item} className="nav-item">{item}</li>})}
      </ul>

      <div className="nav-buttons">
        <button className="button-light">Sign In</button>
        <button className="button-dark">Sign Up</button>
      </div>
    </div>
    </div>
  );
}
export default Navigation;