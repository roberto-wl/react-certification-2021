import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import VideoCard from './VideoCard.component';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('VideoCard component tests', () => {
  it('VideoCard component test', () => {
    const fakeCard = {
      image: 'http://images.com/myimage.jpg',
      title: 'test title',
      desc: 'this is a test',
    };
    act(() => {
      render(
        <VideoCard image={fakeCard.image} title={fakeCard.title} desc={fakeCard.desc} />,
        container
      );
    });
    expect(container.querySelector('h2').textContent).toBe(fakeCard.title);
    expect(container.querySelector('p').textContent).toBe(fakeCard.desc);
  });
});
