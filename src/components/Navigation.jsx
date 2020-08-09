import React, { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

function Navigation() {
  useEffect(() => {
    document.body.addEventListener('mousemove', eyeball);
    function eyeball(e) {
      const eye = document.querySelectorAll('.eye');
      eye.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 100;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    }
  }, []);

  return (
    <header>
      <div className="header-container">
        <nav>
          <NavLink to="/" exact>
            <i
              className="fas fa-book"
              onClick={() => <Redirect to="./"></Redirect>}
            ></i>
          </NavLink>
          <NavLink
            to={{
              pathname: `/about`,
            }}
          >
            <i className="fas fa-book-open"></i>
          </NavLink>
        </nav>
        <div className="face">
          <div className="eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
