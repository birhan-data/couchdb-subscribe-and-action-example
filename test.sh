set -e

source ./config.defaults.sh
if [ -f "./config.sh" ]; then
  source ./config.sh
else
  echo "You have no config.sh. Copy config.defaults.sh to config.sh, change the passwords and try again." && exit 1;
fi

wedge subscribe --actionPath $PWD/action.js --statePath $PWD/state.json --url $URL