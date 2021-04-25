export let isReactNative = true;
export let Text: any;

try {
  const { Text: _Text } = require("react-native");
  Text = _Text
} catch (_) {
  isReactNative = false
}
