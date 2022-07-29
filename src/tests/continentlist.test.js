import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux';
import ContinentList from '../components/ContinentList';
import continents from '../mock/data';

describe('Test continent list renders correctly', () => {
  test('Test continent list renders correctly', () => {
    const Tree = renderer.create(
      <Provider store={store()}>
        <BrowserRouter>
          <ContinentList regions={continents} />
        </BrowserRouter>
      </Provider>,
    );
    expect(Tree).toMatchSnapshot();
  });
});
