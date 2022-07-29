import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux';
import Continent from '../components/Continent';
import continents from '../mock/data';

describe('Test single continent renders correctly', () => {
  test('Test single continent view renders correctly', () => {
    const Tree = renderer.create(
      <Provider store={store()}>
        <BrowserRouter>
          <Continent region={continents[0]} />
        </BrowserRouter>
      </Provider>,
    );
    expect(Tree).toMatchSnapshot();
  });
});
