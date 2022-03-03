# Running

* Clone this repo and cd into the repo directory
* Run `npm install`
* Run `mv example.env .env`
* Edit `.env` and replace `xxxxx` with your server side key
* Run `npm start`
* Open `http://localhost:8080` in a web browser.  The current value of flag `harnessappdemodarkmode` for target `Harness` will be sent to your client.  If you change the flag, refreshing the page should show the new value of the flag.