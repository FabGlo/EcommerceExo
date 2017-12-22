require("sepia");
const api_call = require ("../api_call.js");

test("sum ok",() => {
  expect(api_call.sum(1,1)).toEqual(2)
});
