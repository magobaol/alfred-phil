# When run through `npm run release` the script is executed from the project root, so all paths
# are relative to that path
npm run clean-release

# Compile typescript into dist/bin
tsc --outDir dist/bin
cp package.json dist/bin
cd dist/bin
npm install --omit=dev

cd ../..
find alfred-workflow -type f ! -name "prefs.plist" -exec cp {} dist/ \;

cd dist
zip -r alfred-phil.alfredworkflow *