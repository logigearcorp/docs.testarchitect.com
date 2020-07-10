--- 
title: "Google Chrome: Unable to identify web controls or run automated tests because modal dialog boxes appear"
linktitle: "Google Chrome: Unable to identify web controls or run automated tests because modal dialog boxes appear"
description: "Problem During web automation or web UI control identification, you are using Google Chrome 52 or later. You discover that when modal JavaScript popup boxes appear, your automated test fails to ..."
weight: 15
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.chrome.modal_dialog_boxes_not_run.html
keywords: "Troubleshooting, Google Chrome, modal dialog boxes, troubleshooting"
---

## {{< expand >}} Problem {{< permerlink >}} {#reference_zlf_kmz_jy__section_amc_bnz_jy} 

During web automation or web UI control identification, you are using Google Chrome 52 or later. You discover that when [modal JavaScript popup boxes](http://www.w3schools.com/js/js_popup.asp) appear, your automated test fails to proceed, or you are no longer able to identify other UI controls via the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/).

## {{< expand >}} Solution {{< permerlink >}} {#reference_zlf_kmz_jy__section_bmc_bnz_jy} 

This issue happens because Chrome has stopped supporting animations while modal dialog boxes are shown since Chrome version 52 \([learn more](https://blog.chromium.org/2016/06/chrome-52-beta-css-containment-simpler.html)\). To resolve this issue, do the following:

-   For web automation: In test procedure, have your tests dismiss the modal popup box, for example [click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click) the **OK** button on an alert popup box, before continuing to run the tests.
-   For web UI control identification: close the popup box manually, and then restart the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/).


