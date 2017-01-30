# xos-sample-gui-extension

## Demo

To run this demo we suggest to setup `xos` using the `Vagrant` VM provided in the `fronted` configuration.

### Setup the extension container

Run `make` from this folder.

> This command will build the container image and spin it up.

### Send an event to load this extension in the main app

Run `make onboard`

>This command assume that:
> - `redis-cli` is installed on your system
> - you have `xos.dev` pointing to the `frontend` vagrant vm

## TODO:

- [ ] Provide a dev environment
- [ ] Define the Event format
- [ ] Persist onboarded apps (Client or server side?)