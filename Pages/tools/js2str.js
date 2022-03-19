/**
 *func2str
 * @param {Function} func
 * @return {[string], string}
 */

export function func2str(func) {
  let functionStr = func.toString().replace(/(\n|\r|\r\n)/g, "");
  let args = functionStr.match(/(?<=\()[^\)]*(?=\))/g)[0].split(",");
  let body = functionStr.match(/(?<=\{).*(?=\})/g)[0];
  return { args, body };
}
