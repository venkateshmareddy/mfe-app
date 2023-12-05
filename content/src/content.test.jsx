import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Content from './Content';
import { loadUsersDetailsStart } from './redux/actions/usersDetailsActions';

// Mocking modules
jest.mock('./redux/actions/usersDetailsActions', () => ({
  loadUsersDetailsStart: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Content Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      usersDetails: {
        data: {
          photos: [
            {
              url: 'https://example.com/photo1.jpg',
              user: 'John Doe',
              title: 'Photo Title 1',
              description: 'Photo Description 1',
            },
          ],
        },
      },
    });
    store.dispatch = jest.fn();
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Content />
      </Provider>
    );

    expect(screen.getByText(/Data from Content-MFE/i)).toBeInTheDocument();
  });

  it('dispatches loadUsersDetailsStart on mount', () => {
    render(
      <Provider store={store}>
        <Content />
      </Provider>
    );

    expect(loadUsersDetailsStart).toHaveBeenCalled();
  });

  it('renders user data correctly', async () => {
    render(
      <Provider store={store}>
        <Content />
      </Provider>
    );

    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText('Photo Title 1')).toBeInTheDocument();
    expect(screen.getByText('Photo Description 1')).toBeInTheDocument();
    expect(screen.getByAltText('green iguana')).toBeInTheDocument();
  });
});
