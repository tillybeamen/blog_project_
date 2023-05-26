import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Footer() {
  return (
    <footer class="p-5 bg-dark text-white text-center position-relative">
    <div class="container">
        <li class="list-group-item">
            
        <a href="https://www.facebook.com/ttpugh/"><i className="topIcon fa-brands fa-square-facebook text-light"></i></a>
                <a href="https://twitter.com/15Beamen36264"><i className="topIcon fa-brands fa-twitter text-light"></i></a>
                <a href="https://www.linkedin.com/in/tillmanthomaspughiii/"><i className="topIcon fa-brands fa-linkedin-in text-light"></i></a>
                <a href="https://github.com/tillybeamen"><i className="topIcon fa-brands fa-github text-light"></i></a>
                            
        </li>
        <p class="lead text-white">Copyright &copy; 2023 Pugh Blog Site</p>
    </div>
</footer>
  )
}
