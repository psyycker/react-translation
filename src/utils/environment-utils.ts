export function isReactNative() {
  try {
    require("react-native")
  } catch (_) {
    return false;
  }
  return true;
}
