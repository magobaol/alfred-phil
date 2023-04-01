# When run through `npm run release` the script is executed from the project root, so all paths
# are relative to that path
npm run clean-build

# Compile typescript into dist/bin
tsc --outDir alfred-workflow/bin
cp package.json alfred-workflow/bin
cd alfred-workflow/bin
npm install --omit=dev