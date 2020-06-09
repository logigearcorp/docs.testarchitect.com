--- 
title: "Default port numbers and port ranges"
linktitle: "Default port numbers and port ranges"
weight: 7
aliases: 
    - /TA_Administration/Topics/adm_port_number_port_ranges.html
---

During installation, TestArchitect assigns port number to components from a set of default port numbers. This topic lists the default port numbers and port number ranges which can be used to change the assigned port after installation.

Many TestArchitect components use TCP/IP port numbers. In general, when establishing a connection to a port where a range of ports is eligible for use, a component starts at the bottom of the range and engages the first available port.

|Component|Default Port Number|Port Number Range|
|---------|-------------------|-----------------|
|Repository Server|53400|53400-53499|
|Repository Server Core listen port, serving TestArchitect Client and TestArchitect Controller|53400| |
|Repository Server Core listening port, serving Repository Server UI|53404| |
|Repository Server UI listening port, serving Repository Server Core|53403| |
|TestArchitect Client|53500|53500-53599|
|TestArchitect Controller|53600|53600-53699|
|TestArchitect Scheduler \(Quality Center Integration\)|53700|53700-53799|
|Dashboard|80|If port 80 is engaged by another component, Dashboard takes a port ranging from 54000 and up.|
|License Server|14101|14101-14199|
|TestArchitect Java Agent|14205|14205-unlimited|
|TestArchitect Register Server|23508|No range - port number is fixed at 23508.|
|Team Foundation Server-Microsoft Test Manager integration|54000|54000-54099|
|Lab Manager|Lab Manager has two different types of ports.<br> 1.  Port 80 is the default port of the web server which launches Lab Manager from a web browser.<br>2.  Port 53100 is the default TCP/IP listening port of the Lab Manager for communication with other TestArchitect components.|1.  If port 80 is unavailable, the next port is 54000, followed by 54001, 54002, etc.2.  If port 53100 is unavailable, the next port is 53100-53199.|
|TestArchitect command Line|53800|53800-53899|
|Firefox extension/plug-in|1000|1000-unlimited|
|Chrome extension/plug-in|1000|1000-unlimited|
|IE\_BHO|1000|1000-unlimited|
|QT agent|1000|1000-unlimited|
|Android port forwarder \(adb/cable mode\)|53301|53301-53391|

**Parent topic:**[Administration Guide](/TA_Administration/Topics/Administration_Guide_begin.html)

**Previous topic:**[TestArchitect Register Server](/TA_Administration/Topics/adm_taregserver.html)

**Next topic:**[Connections](/TA_Administration/Topics/Connections.html)

