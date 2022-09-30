import React from 'react'
import logo from '../Assets/logo.png'
import { BsSearch } from 'react-icons/bs';

export const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ms-4">
    <a className="navbar-brand" href="#"><img src={logo} alt="" width='40px'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
          <select style={{width: "250px", height: "50px"}} className="p-2 border border-dark border-2 rounded" placeholder="waqas">
                <option value="Pakistan">Pakistan</option>
                <option value="Punjab">Punjab</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Sindh">Sindh</option>
                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
            </select>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><input style={{width: "700px", height: "50px"}} className="border border-dark border-2 rounded" type="text" name="" id="" placeholder="Find Cars, Mobile Phones and more..."/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-3" href="#" BsSearch>&nbsp;&nbsp;</a>
        </li>
        <li className="nav-item">
          <a style={{fontWeight: "bold", textDecoration: "underline"}} className="nav-link fs-5 mt-2" href="#">login</a>
        </li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li className="nav-item">
          <a style={{fontWeight: "bold", backgroundColor: "white", width: "100px", textAlign: "center"}} className="nav-link fs-4 border rounded-pill border-primary border-4" href="#">+sell</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}