--- 
title: "TestArchitect currently supports running tests only on a single cloud-based device at a time. Support for parallel execution or multi-station execution will be introduced in the coming releases of TestArchitect."
linktitle: "TestArchitect currently supports running tests only on a single cloud-based device at a time. Support for parallel execution or multi-station execution will be introduced in the coming releases of TestArchitect."
description: "Error code: 0x80018011L Problem When you invoke another cloud device to run automated tests in test procedure, but do not terminate the connection with the currently-connected cloud device, ..."
weight: 108
aliases: 
    - /TA_FAQ/Topics/0x80018011L.html
keywords: "automation errors, 0x80018011L"
---

Error code: 0x80018011L

## Problem  

When you invoke another cloud device to run automated tests in test procedure, but do not terminate the connection with the currently-connected cloud device, TestArchitect will report an automation error. It happens because TestArchitect currently does not support testing mobile web applications running on multiple cloud devices simultaneously.

## Solution  

To resolve this issue, please terminate the connection with the currently-executed cloud device, before executing next tests on another cloud device. You achieve it by using the [disconnect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-cloud-device) built-in action. For example:

```
//Connect to the 'Xperia Z' cloud device
                          name              session id
connect cloud device      Xperia Z          >>Xperia_Z_sessionID
              
//Use the 'Xperia Z' device
                          session id
use cloud device          #Xperia_Z_sessionID

//Implement action lines to perform automated mobile web-based testing on the 'Xperia Z' device
              
//Disconnect the 'Xperia Z' device
                           session id
disconnect cloud device    #Xperia_Z_sessionID

//Connect to the 'iPhone6s' cloud device
                          name              session id
connect cloud device      iPhone6s          >>iPhone6s_sessionID
              
//Use the 'iPhone6s' device
                          session id
use cloud device          #iPhone6s_sessionID

//Implement action lines to perform automated mobile web-based testing on the 'iPhone6s' device
              
//Disconnect the 'iPhone6s' device
                           session id
disconnect cloud device    #iPhone6s_sessionID
```



