import test from 'ava';
import parse from './parse';

test('basic rules', t => {
  const opts = { root: '' };
  const input = `
  /* comment should be ignored */
  .foo {
    /* this one too */
    width: 100%;
  }`;
  const output = parse(opts)(input);
  t.snapshot(output);
});

test('throws', t => {
  const opts = { root: '' };
  const input = `
  @import 'foo.css';`;
  t.throws(() => {
    parse(opts)(input);
  }, Error);
});

test('@keyframes', t => {
  const opts = { root: '' };
  const input = `
  @keyframes bounce {
    0%, 50% { blah: .5; }
    to   { lol: 100vh; }
  }`;
  const output = parse(opts)(input);
  t.snapshot(output);
});

test('@media', t => {
  const opts = { root: '' };
  const input = `
  @media(min-width: 100px; max-width: 1000px) {
    .foo {
      bar: 88px;
    }
  }`;
  const output = parse(opts)(input);
  t.snapshot(output);
});

test('@font-face', t => {
  const opts = { root: '' };
  const input = `
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans'),
         local('OpenSans'),
         url('https://fonts.gstatic.com/s/...');
  }`;
  const output = parse(opts)(input);
  t.snapshot(output);
});


