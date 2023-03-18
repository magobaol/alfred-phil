# When run through `npm run release` the script is executed from the project root, so all paths
# are relative to that path
npm run clean-release
webpack --config webpack.prod.js
find alfred-workflow -type f ! -name "prefs.plist" -exec cp {} dist/ \;
cd dist
zip -r alfred-phil.alfredworkflow *