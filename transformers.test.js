import test from 'ava';
import {
  declarations,
  rule,
  charset
} from './transformers';

test('charset', t => {
  const ctx = '';
  const transform = charset(ctx);
  const a = {};
  const b = { charset: 'UTF-8' };
  const expected = {
    '@charset': 'UTF-8'
  };
  t.deepEqual(transform(a, b), expected);
});

test('declarations (non-src)', t => {
  const ctx = '';
  const transform = declarations(ctx);
  const a = {};
  const b = { property: 'foo', value: 'bar' };
  const expected = {
    foo: 'bar'
  };
  t.deepEqual(transform(a, b), expected);
});

test.todo('declarations (src - remote)');
test.todo('declarations (src - local)');

test('rule', t => {
  const ctx = '';
  const transform = rule(ctx);
  const a = {};
  const b = {
    selectors: ['foo', 'bar', 'baz', 'qux'],
    declarations: [{
      property: 'oof',
      value: '1px',
    }, {
      property: 'rab',
      value: 'center',
    }, {
      property: 'zab',
      value: '100%',
    }, {
      property: 'xuq',
      value: '#fff',
    }]
  };
  const expected = {
    'foo,bar,baz,qux': {
      oof: '1px',
      rab: 'center',
      zab: '100%',
      xuq: '#fff',
    }
  };
  t.deepEqual(transform(a, b), expected);
});

test.todo('media');
test.todo('fontFace');
test.todo('keyframes');

