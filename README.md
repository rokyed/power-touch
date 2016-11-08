# POWER-TOUCH
Shortcut touch keys on mobile.

![Alt text](/demo.gif?raw=true "Optional Title")

please install pm2 to start the daemon


for the moment supports only buttons, in the future, I wish to implement, contexted button sets, contexted enhanced controls (like skipping in a song for a player)

I am open to any suggestions and any feedback


### Notes:
* In /configs you find all the configs, just copy the files that contain .example and rename them without .example then modify them accordingly.
* For any features, please use the issues with the "enhacement" tag
* I am open to any suggestions and any feedback

### Guide:
	Special thanks to: https://github.com/pmontrasio
	Paolo Montrasio: "You go to http://your.pc.ip:3000 with your phone's browser. You get some keys on the screen. You touch the keys and it plays some other keys on the pc."

	Also you can change anything, look in configs folder, there are examples. For the keys, I use robot.js https://github.com/octalmage/robotjs , check their doc. The keys variable requires: multi-dimensional array because keys are separated by batches and batches are composed of keys.


### Requirements:
Node v6.6.0


```
npm install
node index.js
# or
pm2 start index.js
```
