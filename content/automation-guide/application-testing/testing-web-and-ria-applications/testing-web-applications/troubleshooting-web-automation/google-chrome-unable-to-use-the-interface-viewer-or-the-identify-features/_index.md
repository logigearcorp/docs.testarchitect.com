--- 
title: "Google Chrome: Unable to use the Interface Viewer or the Identify features"
linktitle: "Google Chrome: Unable to use the Interface Viewer or the Identify features"
description: "Problem Upon attempting to use the Interface Viewer or Identify tool to explore web controls in the Chrome browser, the following warning message appears: Solution This issue occurs because you have ..."
weight: 9
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.chrome.viewer_not_work.html
keywords: "Troubleshooting, web automation, Unable to use the Interface Viewer/Identify, Chrome, troubleshooting"
---

## Problem

Upon attempting to use the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) or [**Identify**](/TA_Help/Topics/Interface_def_Viewer_identify.html) tool to explore web controls in the Chrome browser, the following warning message appears:

![](/images/TA_FAQ/Images/improper_chrome_configurations_viewer.png)

## Solution

This issue occurs because you have not reconfigured your Chrome browser to enable remote debugging mode. You can resolve it in one of two ways:

-   Option \#1**: Allow TestArchitect to reconfigure Chrome automatically.**

    Follow the steps below:

    1.  In the warning message box, click the **Restart** button. This instructs TestArchitect to directly reconfigure Chrome and then restart the browser.

        {{<note>}} This option is effective only for the duration of your active browser session. Once you close Chrome and terminate its related processes, this temporary reconfiguration is lost.

    2.  The Interface Viewer and **Identify** tool are now available for you to explore web controls in Chrome.
-   Option \#2**: Manually reconfigure Chrome.**

    Follow the steps below:

    1.  In the warning message box, click **Cancel** to abort the ongoing process.
    2.  Follow the procedure discussed in [Configuring Google Chrome](/TA_Automation/Topics/aut_setting_switches_GC.html).

        {{<note>}} This option is effective permanently, provided that you launch Chrome from the reconfigured Chrome icon.

    3.  If the Element Definition dialog box \(launched when you previously clicked the **Identify** button\) is still open, close it.
    4.  The Interface Viewer and **Identify** tool are now available for you to explore web controls in Chrome.


