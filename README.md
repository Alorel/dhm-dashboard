# Diamondhunt Mobile Dashboard Userscript
Screw tabs - have everything in one place.

-----

[![Preview](https://user-images.githubusercontent.com/4998038/52310425-42dd9b80-299b-11e9-9db1-a592b6545135.gif)](https://user-images.githubusercontent.com/4998038/52310425-42dd9b80-299b-11e9-9db1-a592b6545135.gif)

# Browser compatibility
This was only tested on the latest version of Chrome. Bug reports from inferior browsers will be ignored.

# Installation
First, make sure you have [Tampermonkey](https://tampermonkey.net/) or some other userscript extension installed.

| **Production version**                                                                                         	| **Debug version**                                                                                      	|
|----------------------------------------------------------------------------------------------------------------	|--------------------------------------------------------------------------------------------------------	|
| [dhm-dashboard.min.user.js](https://github.com/Alorel/dhm-dashboard/raw/master/dist/dhm-dashboard.min.user.js) 	| [dhm-dashboard.user.js](https://github.com/Alorel/dhm-dashboard/raw/master/dist/dhm-dashboard.user.js) 	|
| This one's recommended                                                                                         	| This version is much larger. Use it only if you're competent at debugging code.                        	|

# Explanation of requested permissions

- **unsafeWindow**: required for reading numeric values from the game window
- **GM_getResourceText**: required for caching some CSS files
- **GM_info**: required for accessing script metadata (name, version etc) 
