import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitleThunk } from '../redux/slices/navbarSlice';

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitleThunk('World'));
  }, []);

  const { title } = useSelector((state) => state.title);

  return (
    <header>
      <nav className="d-flex justify-content-between p-3">
        <ul>
          <li>
            <NavLink to="/">
              <span className="fa fa-chevron-left fa-lg" />
            </NavLink>
          </li>
        </ul>
        <div>
          <span>
            <strong>{title}</strong>
          </span>
        </div>
        <div>
          <span className="fa fa-microphone fa-lg mx-3" />
          <span className="fa fa-cog fa-lg" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
