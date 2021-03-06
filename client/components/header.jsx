import React from 'react';

export default function Header(props) {
  return (
    <header>
      <nav className="">
        <div className="btn-toolbar justify-content-between navbar-header pt-2 pb-5 pl-2 pr-2" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button id="home-btn" type="button" className="btn btn-light" onClick={() => { props.mainMenu('main-menu'); }}>
              <img className="home-icon" src="./images/hr-buddy-icon.png" alt=""/>
            </button>
            <button id="view-emp-btn" type="button" className="btn btn-light ml-1" onClick={() => { props.employees('view-employees'); }}>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>
          <div className="btn-log-out d-flex align-items-center" role="group" aria-label="second group">
            <span className="mr-2 current-user">
              <h5 id="user-name" className="my-auto">{props.user.name}<span id="user-status" className="badge badge-pill badge-danger ml-1 ml-2">ADMIN</span></h5>
            </span>

            <button id="log-out-btn" type="button" className="btn btn-light ml-1 log-out" onClick={() => { props.logout('log-in'); }}>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-door-open-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
