--- 
title: "Special note regarding porting virtual machine images"
linktitle: "Special note regarding porting virtual machine images"
description: "Lab Manager allows for the seamless transport of a cloned controller."
weight: 4
aliases: 
    - /TA_Help/Topics/Lab_manager_notes.html
keywords: "Lab Manager, porting virtual machine images"
---

It is commonly the case that virtual machines are used as TestArchitect controllers, and also common that images \(clones\) of virtual machines are ported from one hardware platform to another. Lab Manager allows for the seamless transport of a cloned controller.

When a controller is registered with a Lab Manager session, then cloned and ported to new hardware, and then executed, the controller is automatically re-registered with the Lab Manager session to which it had previously belonged:

![](/images/TA_Help/Images/ug_labmanager11.png)




