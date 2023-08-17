import React from 'react'



const Header = () => {
    
    return (
        <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'brown'}}>
  <div className="container-fluid">
    <div className="mx-4 px-2 fw-bold fs-5 text-white rounded-1" style={{backgroundColor:'brown',border:'2px'}} href="#">
        █▓▒▒░░░Handicraft░░░▒▒▓█
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex" role="search">
        <input
          className="form-control "
          type="search"
          placeholder="Search"

          aria-label="Search"
          style={{width:'600px', marginLeft:'100px'}}/>
        <button className="btn btn-outline-none" style={{marginLeft:'-60px'}}>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      
     
     
    </div>
  </div>
</nav>

    </div>
    )
}
export default Header