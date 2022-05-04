import React from 'react';
import { render } from '@testing-library/react';

import Application from '../components/Application';

describe('Application', () => {
  const { findByText, findAllByText } = render(<Application />);

  const texts = [
    '15 полезных однострочных выражений JavaScript',
    'Насколько JavaScript сильный?',
    'Девшахта-подкаст',
    'Help page',
    'Home',
  ];

  it(`found text on page`, async () => {
    expect(await findByText(texts[0])).toBeTruthy();
    expect(await findByText(texts[1])).toBeTruthy();
    expect(await findByText(texts[2])).toBeTruthy();
    expect(await findByText(texts[3])).toBeTruthy();
    expect(await findByText(texts[4])).toBeTruthy();
  });
  it(`found text on page`, async () => {
    expect(await findAllByText(texts[0])).toBeTruthy();
    expect(await findAllByText(texts[1])).toBeTruthy();
    expect(await findAllByText(texts[2])).toBeTruthy();
    expect(await findAllByText(texts[3])).toBeTruthy();
    expect(await findAllByText(texts[4])).toBeTruthy();
  });
  console.log(texts[0]);
});
