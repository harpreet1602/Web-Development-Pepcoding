import {Link} from "react-router-dom";

function Navbar() {
  // Dom manipulation for highlighting part , we should do it by hooks actually but for now use dom
  let navItems = document.querySelectorAll(".nav-link");
  console.log(navItems);
  for(let  i = 0 ; i <navItems.length; i++)
  {
    navItems[i].addEventListener("click",function(e){
        for(let j=0 ; j<navItems.length ; j++)
        {
          navItems[j].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    })
  }


  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Movie Rentals</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li class="nav-item">
              <Link class="nav-link" to="/">Movies</Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/Customers">Customers</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Rentals">Rentals</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
         </div>
      </div>
    </nav>
  );
}

export default Navbar;