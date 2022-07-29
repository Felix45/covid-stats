import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux';
import NavBar from '../components/NavBar';

describe('Test if navBar renders correctly', () => {
  test('Test if navBar renders correctly', () => {
    const Tree = renderer.create(
      <Provider store={store()}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(Tree).toMatchSnapshot();
  });
});
