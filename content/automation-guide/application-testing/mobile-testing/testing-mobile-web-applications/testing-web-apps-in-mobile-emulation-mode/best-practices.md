--- 
title: "Best practices to define mobile device profiles"
linktitle: "Best practices"
description: "How to conveniently create a list of predefined mobile device profiles to be used in tests."
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_best_practices.html
keywords: "mobile web testing, emulation mode, best practices, Google Chrome, emulation testing, best practices, Chrome, emulation testing, Google Chrome, best practices"
---

How to conveniently create a list of predefined mobile device profiles to be used in tests.

You can certainly add JSON strings to define mobile device profiles in the [send command to browser](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/send-command-to-browser) built-in action. But these JSON strings are lengthy, and this can render your test procedures hard to read. Much more convenient is to create a list of JSON strings defining mobile emulator profiles and assign a name to each one within a [user-defined action](/user-guide/actions/user-defined-actions/). Passing the action a specific device name allows that action to return the associated JSON string. In his example, we call this action get json of device.

## get json of device

**Arguments**:

-   **title**

    Emulator name to be used in tests

-   **json**

    Variable to return the JSON string for that emulator


In the action implementation, add as many mobile device profiles as you need.

{{<tip>}}

-   You can find a list of necessary predefined parameters of iPhone, iPad, Google Nexus, Samsung, and other devices [here](https://chromium.googlesource.com/chromium/blink/+/master/Source/devtools/front_end/emulated_devices/module.json).
-   Refer to [Launching mobile browser emulator](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-web-apps-in-mobile-emulation-mode/creating-mobile-browser-profiles) to see how to define mobile device profiles.
-   For your convenience, TestArchitect provides you a sample test procedure of the get json of device user-defined action. You can download the action [here](http://testarchitect.logigear.com/onlinehelp/test_sample/get_json_of_device.zip).

The following user-defined action's implementation demonstrates how to specify five sample emulators: Apple iPhone 4, Apple iPhone 5, Apple iPhone 6, Apple iPhone 6 Plus, and Blackberry Z30.

![](/images/TA_Automation/Images/get_json_of_device_pgm.png)

## Invoke an emulator from the list of predefined profiles

After creating the user-defined action to supply all needed mobile device profiles, you can easily invoke the desired emulator as follows. This makes your test procedures easier to read.

```
//Get JSON string of predefined emulators				
	                    title	            json	
get json of device	  Apple iPhone 6	   >>iPhone 6	
get json of device	  Apple iPhone 6 Plus     >>iPhone 6 Plus	
			
//Launch Google Chrome
	                    setting	           value
setting	             use browser	       Chrome
			
//Navigate to a URL
	                    location
navigate	            https://google.com
			
//Invoke iPhone 6 emulator in Chrome's Device Mode
			
	                     window	            command	  variable
send command to browser     home	              #iPhone 6       >>iPhone 6 JSON	
//Refresh the page, so the emulator takes effect
			
	                     window
refresh	              home		
			
//Develop web automation on the iPhone 6 here
			
//Change into iPhone 6 Plus emulator on-the-fly
			
	                      window	           command	     variable
send command to browser      home	             #iPhone 6 Plus     >>iPhone 6 plus JSON
			
//Refresh the page, so new changes take effect
			
	                      window
refresh	               home
			
//Develop web automation on the iPhone 6 Plus here
```



