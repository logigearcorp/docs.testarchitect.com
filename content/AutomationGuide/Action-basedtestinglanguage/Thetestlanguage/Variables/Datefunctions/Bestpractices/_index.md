--- 
title: "Best practices to define mobile device profiles"
linktitle: "Best practices"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_best_practices.html
---
# Best practices to define mobile device profiles {#concept_jzp_chx_zv .concept}

How to conveniently create a list of predefined mobile device profiles to be used in tests.

You can certainly add JSON strings to define mobile device profiles in the [send command to browser](bia_send_command_to_browser.html) built-in action. But these JSON strings are lengthy, and this can render your test procedures hard to read. Much more convenient is to create a list of JSON strings defining mobile emulator profiles and assign a name to each one within a [user-defined action](../../reuse/reuse.High_level_actions.html). Passing the action a specific device name allows that action to return the associated JSON string. In his example, we call this action get json of device.

## get json of device { .section}

**Arguments**:

title
:   Emulator name to be used in tests

json
:   Variable to return the JSON string for that emulator

In the action implementation, add as many mobile device profiles as you need.

**Tip:**

-   You can find a list of necessary predefined parameters of iPhone, iPad, Google Nexus, Samsung, and other devices [here](https://chromium.googlesource.com/chromium/blink/+/master/Source/devtools/front_end/emulated_devices/module.json).
-   Refer to [Launching mobile browser emulator](aut_app_testing_responsive_web_Chrome_DevTools_creating_profiles.html) to see how to define mobile device profiles.
-   For your convenience, TestArchitect provides you a sample test procedure of the get json of device user-defined action. You can download the action [here](http://testarchitect.logigear.com/onlinehelp/test_sample/get_json_of_device.zip).

The following user-defined action's implementation demonstrates how to specify five sample emulators: Apple iPhone 4, Apple iPhone 5, Apple iPhone 6, Apple iPhone 6 Plus, and Blackberry Z30.

![](../Images/get_json_of_device_pgm.png)

## Invoke an emulator from the list of predefined profiles { .section}

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

**Parent topic:**[Testing web apps in mobile emulation mode](../../TA_Automation/Topics/aut_app_testing_responsive_web.html)

**Previous topic:**[Launching mobile browser emulator](../../TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools_launching_emulator.html)

