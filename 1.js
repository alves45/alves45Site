// import babel from "@babel/core";
// console.log(
//   babel.transformSync("()=>{console.log('123')}", {
//     plugins: ["@babel/plugin-transform-arrow-functions"],
//   })
// );

import { promises as fs } from "fs";
import path from "path";
async function crLfToLf(dirPath) {
  var list = await fs.readdir(dirPath);
  list.map(async (pathElement) => {
    pathElement = path.resolve(dirPath, pathElement);
    var that = await fs.lstat(pathElement);
    if (that.isFile()) {
      console.log(pathElement);
      fs.writeFile(
        pathElement,
        (await fs.readFile(pathElement, "utf8")).replace(
          /(\r\n)|\n|\r|(\n\n)/g,
          "\n"
        )
      );
    } else {
      crLfToLf(pathElement);
    }
  });
}
crLfToLf("./");
