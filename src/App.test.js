import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import store from './store'





describe('<App />', () => {
  it('renders without crashing', () => {
    // Create a DOM element to render the component into
    const div = document.createElement('div');

    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(< App store = {store} />, div);

    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });
});