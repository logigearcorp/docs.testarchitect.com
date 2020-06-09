--- 
title: "Special note regarding porting virtual machine images"
linktitle: "Special note regarding porting virtual machine images"
weight: 4
aliases: 
    - /TA_Help/Topics/Lab_manager_notes.html
---

It is commonly the case that virtual machines are used as TestArchitect controllers, and also common that images \(clones\) of virtual machines are ported from one hardware platform to another. Lab Manager allows for the seamless transport of a cloned controller.

When a controller is registered with a Lab Manager session, then cloned and ported to new hardware, and then executed, the controller is automatically re-registered with the Lab Manager session to which it had previously belonged:

![](/images//Images/ug_labmanager11.png)

**Parent topic:**[Managing automation lab](/TA_Help/Topics/Lab_manager_managing_auto_lab.html)

**Previous topic:**[Self-registering a controller](/TA_Help/Topics/Lab_manager_self_registering.html)

**Next topic:**[Registering devices](/TA_Help/Topics/Lab_manager_registering_device.html)

