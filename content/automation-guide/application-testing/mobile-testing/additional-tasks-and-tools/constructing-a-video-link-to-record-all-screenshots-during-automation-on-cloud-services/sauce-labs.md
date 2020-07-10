--- 
title: "Constructing a video link to record all screenshots during automation in Sauce Labs"
linktitle: "Sauce Labs"
description: "Note: The URL on Sauce Labs which stores the video recording is as follows. https://assets.saucelabs.com/jobs/&lt;session-id&gt;/video.flv Retrieve the session ID of the target cloud device by using the ..."
weight: 1
aliases: 
    - /TA_FAQ/Topics/faq.howto.screenshot_recording_saucelabs.html
keywords: "cloud testing, SauceLabs, screenshots, troubleshooting"
---

{{<note>}} The URL on Sauce Labs which stores the video recording is as follows.

```
https://assets.saucelabs.com/jobs/<session-id>/video.flv
```

1.  Retrieve the session ID of the target cloud device by using the [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device) action.

    ```
    	                   url	                                                                              capabilities                                                                                                                                       name 
    assign cloud device	http://joe.doe:1ec0bc84-0d18-424d-bbf2-8d5e51baae7b@ondemand.saucelabs.com:80/wd/hub    {"name":"TestArchitect - test gmail","browserName": "safari","deviceName": "iPhone 6 Simulator","platformName": "ios","platformVersion": "9.3"}    cloud_device
    		
    	                   name	      session id
    connect cloud device      cloud_device     >>session_id
    ```

2.  Create a user-defined field to build a video link which captures entire automated tests in Sauce Labs.

    For example, create a field Screenshot Recording. \([Learn more](/administration-guide/user-defined-fields/creating-a-user-defined-field).\)

3.  Use the [assign result field](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/assign-result-field) action to assign the video link's value to the Screenshot Recording field.

    This link is built based on the target device's session ID.

    ```
    	                session id		
    use cloud device       #session_id		
    					
    	                location	
    navigate	        https://www.google.com.vn/		
    			
    	                field	             value	
    assign result field    Screenshot Recording     #"https://assets.saucelabs.com/jobs/" & session_id & "/video.flv"	
    ```


The test procedure should resemble the following.

![](/images/TA_FAQ/Images/bia_assign_cloud_device_saucelabs_2_pgn.png)

In the test result, you will see a video link as follows.

![](/images/TA_FAQ/Images/Saucelabs_video_link.png)



