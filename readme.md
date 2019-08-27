# stakit-test-writer
A small writer utility for testing Stakit modules

## Installation
```
npm i stakit-test-writer
```

## Example

```javascript
var tape = require('tape') // with tape-promise in reality
var stakit = require('stakit')
var testWriter = require('stakit-test-writer')

test('it works with stakit', async function (t) {
  t.plan(1)

  var kit = stakit()
    .routes(() => ['/'])
    .render((route, state) => `${route}`)

  var writer = testWriter()

  await kit.output(writer)

  t.ok(typeof writer.get('/index.html') === 'string', 'string was returned')
})
```

## API
### `writer = testWriter()`
Returns a new test writer instance.

### `writer.write`
Stakit compatible write method.

### `writer.get(filepath)`
Returns the mocked value of the "written" file at `filepath`.
