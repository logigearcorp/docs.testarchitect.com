--- 
title: "Passing arguments to error handlers"
linktitle: "Passing arguments to error handlers"
description: "Error and failure handlers can be made more flexible by having them accept arguments."
weight: 4
aliases: 
    - /TA_Automation/Topics/error_handling_passing_args.html
keywords: "errors, handling, recovery, action, on failure action, error handling, handler arguments, on failure action, arguments, for error and failure handlers"
---

Error and failure handlers can be made more flexible by having them accept arguments.

The actions on error action and on failure action can both accept an unlimited number of user-defined arguments. These arguments are passed to the handler specified by the action argument. This feature greatly increases the potential utility of your handlers, by allowing information specific to the error/failure to be logged. It also increases their universality, obviating the need to create a different handler for each type of problem.

In the example given, a handler action, my failure handler, is set up so that it will be passed two arguments, information and clean up, when called. information holds a message to be logged with the failure, and clean up is a flag indicating whether testing should continue \(clean up = no\) or everything should be shut down \(clean up = yes\).

When invoked, my failure handler does the following:

-   captures the screen and saves it to a file with a unique filename based on the date and time
-   issues a report line containing:
    -   the contents of the information argument
    -   the name of the related screen capture file
-   if clean up = yes:
    -   attempts to determine which window of the AUT is open, and when one is found, shuts down the AUT from that window;
    -   instructs the test to exit the test module
-   if clean up = no, simply exits the test case, allowing the test to continue from the next test case.

![](/images/TA_Automation/Images/abtErrorHandling_Failure_handler_test02.png)

In this form, the failure handler can be called from multiple places within a test, with a response specific to the needs of the test at that particular point of failure.

The test case below makes use of my failure handler. It runs a check that \(erroneously\) expects the Car Rental Login window to have been dismissed. But before that, it sets up an on failure action, to force my failure handler to be invoked in case of a failure, and passes it a specific message plus a clean up flag indicating that everything should be shut down.

![](/images/TA_Automation/Images/abtErrorHandling_Failure_handler_test01.png)

In the results page generated after the test is run, a **Log Information** section is created, with the following entry, reflecting both the message passed to the handler, plus the name of the capture file:

![](/images/TA_Automation/Images/abtErrorHandling_Failure_handler_result_log.png)



