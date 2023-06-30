const fs = require("fs");
const sourceMap = require("source-map");

const rawSourceMap = fs.readFileSync("./main.3bb9d231.js.map", "utf8");

sourceMap.SourceMapConsumer.with(rawSourceMap, null, (consumer) => {
  console.log(consumer.originalPositionFor({ line: 2, column: 2148216 }));
  console.log(consumer.originalPositionFor({ line: 2, column: 2149187 }));
  console.log(consumer.originalPositionFor({ line: 2, column: 1830323 }));
  console.log(consumer.originalPositionFor({ line: 2, column: 2150001 }));
  console.log(consumer.originalPositionFor({ line: 2, column: 1293601 }));
  console.log(consumer.originalPositionFor({ line: 2, column: 1824358 }));
});
