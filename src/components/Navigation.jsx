const Navigaton = () =>{
 return(
    <nav className = "container">
    <div className="logo">
      <img src = "/public/images/brand_logo.png" />
    </div>
    <div className = "components">
      <ul>
        <li href = "#">Menu</li>
        <li href = "#">Location</li>
        <li href = "#">About</li>
        <li href = "#">Contact</li>
      </ul>
    </div>
      <button>Login</button>
  </nav>
 );
};
export default Navigaton;