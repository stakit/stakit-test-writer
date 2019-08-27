var tape = require('tape')
var tapePromise = require('tape-promise').default
var test = tapePromise(tape)
var stakit = require('stakit')
var testWriter = require('.')

var HTML = `
<!DOCTYPE html><html><head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
  </head><body></body></html>
`

test('has write and get functions', function (t) {
  t.plan(2)

  var writer = testWriter()

  t.ok(typeof writer.write === 'function', 'has write')
  t.ok(typeof writer.get === 'function', 'has get')
})

test('it works with stakit', async function (t) {
  t.plan(1)

  var kit = stakit()
    .routes(() => ['/'])
    .render((route, state) => `${route}`)

  var writer = testWriter()

  await kit.output(writer)

  t.ok(writer.get('/index.html').trim() === HTML.trim(), 'returns correct value')
})
