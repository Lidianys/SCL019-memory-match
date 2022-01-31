import AppR from './AppR.js';

describe('AppR', () => {
  it('should render without crashing', () => {
    const el = AppR();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

/*
describe('checkCards', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof checkCards).toBe('function');
  });
});*/
