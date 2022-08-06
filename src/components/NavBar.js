import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchTitleThunk } from '../redux/slices/navbarSlice';

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitleThunk('World'));
  }, []);

  const { title } = useSelector((state) => state.title);

  return (
    <header>
      <Container className="px-md-0">
        <nav className="d-flex justify-content-between p-3 px-0">
          <ul>
            <li>
              <NavLink to="/" role="button">
                <span className="fa fa-chevron-left fa-lg" />
              </NavLink>
            </li>
          </ul>
          <div>
            <span>
              <strong>{title || 'World'}</strong>
            </span>
          </div>
          <div>
            <span className="fa fa-microphone fa-lg mx-3" />
            <span className="fa fa-cog fa-lg" />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default NavBar;
