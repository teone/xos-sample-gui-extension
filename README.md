# xos-sample-gui-extension

## Demo

### Create the extension container

`docker build -t xosproject/xos-sample-gui-extension .`

### Start the extension container

`docker run -p 4001:4000 -d xosproject/xos-sample-gui-extension`

### Send an event to load this extension in the main app

`PUBLISH Onboard '{"files": ["http://xos.dev:4001/spa/vendor.js", "http://xos.dev:4001/spa/app.js"]}'`

_Check that your files are available at the provided url_

## TODO:

[ ] Provide a dev environment
[ ] Define the Event format