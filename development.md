# Working on React-translation

## Starting the examples

### React (examples/react)
From the root project, run:
```shell
# Setup the library
npm install
npm run build
npm link

# Link it to the example
cd examples/react
npm install
npm link @psyycker/react-translation

# Start the example
npm start
```

### React Native (examples/reactnative)
Expo for some reason is unable to resolve the library if doing a link or use "file:../.." </br>
The solution is instead to pack the lib as a tgz and use it instead <br/>
This is for development only. The library itself works.
```shell
# Setup the library and pack
npm install
npm run build
./pack-for-expo.sh

# Setup the expo project
cd examples/reactnative
npm install
```
