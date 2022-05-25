# CouchDB Subscribe and Action example

Do you need to subscribe to a CouchDB changes feed and perform an action for the sake of a data migration or transformation? This repository shows how to structure use of the Wedge Subscribe command into a process isolated in its own Docker container.

## Setup 
- Copy this repository to your own.
- Install Docker on a system that understand bash programs.
- Copy config.defaults.sh to config.sh and update the couchdb connection string, optionally the process name if you are going to have more than one of these running.
- Write your action to each change in the `action.js` file.
- Run `start.sh` to begin. 
- If the process is interrupted or crashes, you can rerun `start.sh` and it will pick up back where it left off because it stores the last change processed in the `state.json` file.

## Test
- Requires VS Code
- Open the Terminal View
- Create a new JavaScript Debug Terminal

<img width="1249" alt="Screen Shot 2022-04-20 at 1 26 27 PM" src="https://user-images.githubusercontent.com/8252364/164288229-cb41817e-9531-4176-b402-8e38412ef4c8.png">

- In the new termianl window, run `./test.sh`
