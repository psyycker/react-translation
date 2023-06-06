#!/bin/bash

DIR="example"
BUILD_DIR="build"
REMOVE_EXAMPLE_DIR_PROMPT="Example directory exists already. Delete it? (y/N) "
BUILD_PROMPT="The build folder doesn't exists. However you'll need to build it to use the lib from the example project"
BUILD_PROMPT2="Would you like to build the library? (Y/n)"
Y_DEFAULT="y"
N_DEFAULT="n"

execute() {
  "$@"
  local status=$?

  if [ $status -ne 0 ]; then
      echo "Error with $1" >&2
      exit $status
    fi
    return $status
}

if [ ! -d "$BUILD_DIR" ]; then
  echo $BUILD_PROMPT
  read -p "$BUILD_PROMPT2" -e answer
  answer=${answer:-$Y_DEFAULT}

  case $answer in
      [Yy]* ) execute npm install; execute npm run build;;
      [Nn]* );;
      * ) echo "Invalid response."; exit 1;;
  esac

fi

if [ -d "$DIR" ]; then
  read -p "$REMOVE_EXAMPLE_DIR_PROMPT" -e answer
  answer=${answer:-$N_DEFAULT}

  case $answer in
    [Yy]* ) echo "Removing existing directory"; rm -rf $DIR;;
    [Nn]* ) exit 1;;
    * ) echo "Invalid response."; exit 1;;
  esac
fi

npm run example:create

npm link

cp -r example-templates/* example

cd example || (echo "Error when accessing the $DIR directory"; exit 1)

execute sed -i '' 's/module.exports = {/module.exports = {root:true,/g' .eslintrc.cjs

npm install

npm install @psyycker/react-translation -S

npm link @psyycker/react-translation

