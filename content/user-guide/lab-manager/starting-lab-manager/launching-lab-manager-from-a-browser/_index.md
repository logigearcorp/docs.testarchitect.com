--- 
title: "Launching Lab Manager from a browser"
linktitle: "Launching Lab Manager from a browser"
description: "Launching a Lab Manager session from a web browser."
weight: 3
aliases: 
    - /TA_Help/Topics/Lab_manager_browser.html
keywords: "Lab Manager, launching from browser, launching, from browser"
---

Launching a Lab Manager session from a web browser.

A Lab Manager session may be started or accessed on any machine on the network, provided it has an up-and-running web server and the Lab Manager application \(which, in most cases, means simply that TestArchitect is installed\).

In a web browser, enter the Lab Manager web server IP address and port in the address bar, in the form of: `http://{server IP:port }/LabManager`, such as, http://192.168.167.113:80/LabManager

{{<note>}}

-   Port 80 is the default port of the web server which launches Lab Manager from a web browser. If unavailable, the next port is 54000, followed by 54001, 54002, etc. [\(Learn more.\)](/TA_Administration/Topics/adm_port_number_port_ranges.html#row.LM)
-   There is no practical limit to the number of users who may concurrently be logged in to a given Lab Manager instance on a machine. For that matter, one user may also be logged in to multiple Lab Manager sessions concurrently, each on a different host, and each in a different window of his/her browser.



**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

