--- 
title: "Example - Removing the 'Result Details' tab in test results"
linktitle: "Example - Removing the 'Result Details' tab in test results"
aliases: 
    - /TA_Help/Topics/ug_customizing_XML_report_example_1.html
---
# Example - Removing the 'Result Details' tab in test results {#task_zbn_lzq_qy .task}

Explain steps to remove the **Result Details** tab in test results.

Suppose that you find test results too lengthy, and so the web browser might take a lot of time to load the test results. Thus, you'd like to remove the **Result Details** tab to reduce the size of the test results.

![](../Images/customization_results_results_detail_tab.png)

To remove the **Result Details** tab in test results, perform the following steps:

1.  In a text editor such as Notepad, open the file \{TA\_INSTALL\_DIR\}\\templates\\xsl\\TAResult.xsl.

2.  Find <label for="tab-2" class="tab-label"\>Result Details</label\>.

3.  Comment out the following XSLT [<xsl:choose\>](http://www.w3schools.com/xml/xsl_choose.asp) element.

    ```
    ...
    <!-- <xsl:choose>
    	<xsl:when test="not($isTSorSerial)">
    	    <div class="tab">
    	        <input type="radio" name="css-tabs" checked="" id="tab-2" class="tab-switch"/>
    	        <label for="tab-2" class="tab-label">Result Details</label>
                   <div id="divResultDetails" class="tab-content" style="display:none">
    		    <div style="display: none" id="wrap-tab-2">
    			<xsl:call-template name="ta:ResultDetails">
    			    <xsl:with-param name="bSupportScreenshot" select="$bSupportScreenshot"/>
    			    <xsl:with-param name="screenshotPath" select="$screenshotPath"/>
    			</xsl:call-template>
    		    </div>
    		 </div>
    	    </div>
    	</xsl:when>
    </xsl:choose> -->
    ...
    ```

4.  To ensure the new changes take effect, clear the HTML cache.

    1.  Open a test result's location on your machine.

        ![](../Images/customization_results_results_path_location.png)

    2.  Delete all files located under the html\_result folder.

5.  Open any test results in a web browser.

    The **Result Details** tab is now no longer available in the test results.

    ![](../Images/customization_results_results_detail_tab_effect.png)


**Parent topic:**[Customizing XML test results](../../TA_Help/Topics/ug_customizing_XML_report.html)

**Next topic:**[Example - Changing date format in test results](../../TA_Help/Topics/ug_customizing_XML_report_example_2.html)

