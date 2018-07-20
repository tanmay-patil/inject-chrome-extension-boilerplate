# Funnel Envy Visual Editor

## Installation

```bash
# clone it
$ git clone https://github.com/FunnelEnvy/funnelenvy-chrome-extension.git

# Install yarn
Refer Docs:  https://yarnpkg.com/lang/en/docs/install

# Install dependencies
$ yarn install
```

## Development

```bash
# build files to './dev'
$ yarn run dev
```

## Production Build

```bash
# build files to './build'
$ yarn run build
```

## Load extension in Chrome
- Access `chrome://extensions/`
- Check `Developer mode`
- Click on `Load unpacked extension`
- Select dev or build folder according to the build.