export function getTranslationWithKey(
  object: {[key: string]: any},
  namespace: string,
  path: string | string[],
): any {
  if (object == null) {
    return null;
  }
  if (!Array.isArray(path)) {
    return getTranslationWithKey(object[namespace], namespace, path.split('.'));
  }
  if (path.length === 1) {
    return object[path[0]];
  }
  return getTranslationWithKey(object[path[0]], namespace, path.splice(1));
}

function replaceAll(str: string, pattern: string, value: string): string {
  let newStr = str;
  do {
    newStr = newStr.replace(pattern, value);
  } while (newStr.includes(pattern));
  return newStr;
}

export function applyParametersToString(result: string, params: {[key: string]: any}): string {
  let newResult = result;
  Object.keys(params).forEach((param: string) => {
    const value = params[param];
    newResult = replaceAll(newResult, `{${param}}`, value);
  });
  return newResult;
}
