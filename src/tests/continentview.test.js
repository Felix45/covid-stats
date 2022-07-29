import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux';
import ContinentView from '../components/ContinentView';

describe('Test Continent view renders correctly', () => {
  test('Test Continent view renders correctly', () => {
    const Tree = renderer.create(
      <Provider store={store()}>
        <BrowserRouter>
          <ContinentView />
        </BrowserRouter>
      </Provider>,
    );
    expect(Tree).toMatchSnapshot();
  });
});
