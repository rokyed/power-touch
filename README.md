# POWER-TOUCH
Shortcut touch keys on mobile. Inspired from Apple TouchBar but for free using the things you already own, phone and computer :D

![Alt text](/demo.gif?raw=true "Optional Title")

### Requirements:
```bash
node 6.6.0 #at least
```

### How to install and use:
1. Install the packages:
```bash
 npm i
 ```
2. Go in ***/configs*** and copy all the ***.example*** files while renaming them without the ***.example***
3. Modify them to your needs
4. Start the host: (with node alone or using pm2)
```bash
npm install
node index.js
# or
pm2 start index.js
```
5. Open the browser of your phone and go to *http://your-pc-that-hosts:port-setted-in-main-json*
e.g. *http://192.168.0.100:3000*


### How to write configs:
* **auth.htpasswd** uses the node module http-auth, the module requires the config to be written as user:passsword per each line.
* **main.json** will define the startup config, the only option for the moment is the port that the hosts listens
* **shortcuts.json** holds all the buttons that you will see on your mobile, for the keys we use robot.js, please check the ***/modules*** files if **shortcuts.example.json** is not clear enough


### Standards:
For the moment we have no standards because the app is yet too young and not entirely organized. But in the near future we will start to have standards, in order to not break everybody's configs.

### Special Thanks:
Special thanks to: https://github.com/pmontrasio for writing a how to on HackerNews


### Where are we heading:
The main features this app will need are:
* Per app context: A protocol that allows the programs that use this to be able to change the context buttons, like for media playing you will have media buttons and for something like VIM you will have VIM shortcuts.
* Per app modules: A protocol that allows anybody to build a module that will be used with a specific program e.g. the media buttons should be a module on its own.
* More immersive controls and computer feedback: Controls like swipes, multi-finger, different gestures; computer feedback stands for updating the device ui with info that comes from the computer program, so we can make the modules contextual within a specific program e.g. Blender3D when you are in vertex editing mode we should have a specific set of buttons, that are different from when you are in compositing mode.

### I need you!
As much as I want this app to be big and powerful, I am just one man with full time job and some spare time, the spare time I use it here.
If you wish to help, fork the repo and make your modifications, then create a pull request and we will work things out!!
Don't forget, I am a programmer also and I need help as much as you want your feature to be in this app :D Thank you very much!!
