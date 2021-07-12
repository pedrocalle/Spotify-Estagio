import React from 'react';
import useAuth from './useAuth'
import FilterDropDown from './Filters'
import FilterRange from './Range'
import './index.css'

export default function Dashboard({code}) {
    const acessToken = useAuth(code);

    return (<div className="container">
    <div>
        <header>
            <img src="./images/logo-spotify-2048.png" className="logo" alt="playlist"/>
        </header>
    </div>
      <main>
        <FilterDropDown className="filter"/>
        <FilterRange className="filter"/>
          <div>
              <div className="row center">
                <div className="card">
                  <a href="https://google.com">
                    <img class="medium" src="./images/911HkSkbPcL._AC_UY218_.jpg" alt="Playlist"/>
                  </a>
                  <div className="card-body">
                    <a href="https://google.com">
                      <h2>Playlist</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          <div>
              <div className="row center">
                <div className="card">
                  <a href="https://google.com">
                    <img className="medium" src="./images/911HkSkbPcL._AC_UY218_.jpg" alt="playlist"/>
                  </a>
                  <div className="card-body">
                    <a href="https://google.com">
                      <h2>Playlist</h2>
                    </a>
                  </div>
                </div>
                </div>
                </div>
          <div>
              <div className="row center">
                <div className="card">
                  <a href="https://google.com">
                    <img className="medium" src="./images/911HkSkbPcL._AC_UY218_.jpg" alt="playlist"/>
                  </a>
                  <div className="card-body">
                    <a href="https://google.com">
                      <h2>Playlist</h2>
                    </a>
                  </div>
                </div>
                </div>
                </div>
          <div>
              <div className="row center">
                <div className="card">
                  <a href="https://google.com">
                    <img className="medium" src="./images/911HkSkbPcL._AC_UY218_.jpg" alt="playlist"/>
                  </a>
                  <div className="card-body">
                    <a href="https://google.com">
                      <h2>Playlist</h2>
                    </a>
                  </div>
                </div>
                </div>
          </div>
      </main>
  </div>
  )
}