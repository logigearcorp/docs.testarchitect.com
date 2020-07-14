--- 
title: "Constructing a video link to record all screenshots during automation in BrowserStack"
linktitle: "BrowserStack"
description: "Note: The URL on BrowserStack which stores the video recording is as follows. ( Learn more .) https://www.browserstack.com/automate/builds/&lt;build-id&gt;/sessions/&lt;session-id&gt; The REST API, provided by ..."
weight: 2
aliases: 
    - /TA_FAQ/Topics/faq.howto.screenshot_recording_browserstack.html
keywords: "cloud testing, BrowserStack, screenshots, BrowserStack, screenshots, troubleshooting"
---

{{<note>}}

-   The URL on BrowserStack which stores the video recording is as follows. \([Learn more](https://www.browserstack.com/automate/rest-api).\)

    ```
    https://www.browserstack.com/automate/builds/<build-id>/sessions/<session-id>
    ```

-   The REST API, provided by BrowserStack, to query build ID associated with your username and access key is as follows. \([Learn more](https://www.browserstack.com/automate/rest-api).\)

    ```
    curl -u "<username>:<access-key>" https://www.browserstack.com/automate/builds.json
    ```


1.  Assign your username and access key to local variables.

    ```
                         name	   value
    local variable	username      joedoe
    		
    	              name	   value
    local variable	accesskey     yD5fLNLwqYeyt7eAD5q2
    ```

2.  Apply the [execute command](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/execute-command) action to query the builds associated with your username and access key.

    ```
                     
    	               command	                                                                                       variable   timeout
    execute command	# "curl -u " & username & ":" & accesskey & " https://www.browserstack.com/automate/builds.json"     output     30
    ```

    The returned output will resemble as follows.

    ```
    
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    
      0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
      0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
      0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
    100   137  100   137    0     0     59      0  0:00:02  0:00:02 --:--:--    59
    [{"automation_build":{"name":"Untitled Build","duration":null,"status":"failed","hashed_id":"4985725de82332b74abcd1520449b364fab3b674"}}]
    ```

3.  Apply [string functions](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/) and the [get json query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/json/get-json-query-result) action to parse the returned output and retrieve the build ID, which is hashes\_id in the output.

    ```
    	                 name	value	
    local variable	   startLoc   #instr(output, "{", 1)	
    			
    	                 name	value	
    local variable	   json	#mid(output, startLoc, length(output)-startLoc-1)	
    			
    	                 json	jsonpath	               variable
    get json query result   #json      automation_build.hashed_id    >>build_id
    ```

4.  Retrieve the session ID of the target cloud device by using the [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device) action.

    ```
    		            url	                                                                           capabilities	                                                                                     name
    assign cloud device	# "https://" & username & ":" & accesskey & "@hub-cloud.browserstack.com/wd/hub"     {"name":"TestArchitect - test gmail","browserName": "iPhone","device": "iPhone 5S","platform": "MAC"}   cloud_device
    			
    	                   name	     session id	
    connect cloud device      cloud_device    >>session_id	
    ```

5.  Create a user-defined field to build a video link which captures entire automated tests in BrowserStack.

    For example, create a field Screenshot Recording. \([Learn more](/administration-guide/user-defined-fields/creating-a-user-defined-field).\)

6.  Use the [assign result field](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/assign-result-field) action to assign the video link's value to the Screenshot Recording field.

    This link is built based on the target device's session ID and build ID.

    ```
    	                session id	
    use cloud device	#session_id	
    		
    	               location	   window
    navigate	       www.google.com	
    		
    	               field	             value
    assign result field   Screenshot Recording     #"https://www.browserstack.com/automate/builds/"& build_id &"/sessions/"& session_id
    ```


The test procedure should resemble the following.

![](/images/TA_FAQ/Images/browserstack_test_lines.png)

In the test result, you will see a video link as follows.

![](/images/TA_FAQ/Images/browserstack_screenshot_recording_field.png)



