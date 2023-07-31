// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEquals(a: any, b: any): boolean {
  if(typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'object') {
    for(const key in a) {
      if (!Object.hasOwn(b, key) || !isEquals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}
