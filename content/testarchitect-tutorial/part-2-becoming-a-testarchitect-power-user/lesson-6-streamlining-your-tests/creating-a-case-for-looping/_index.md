--- 
title: "Creating a case for looping"
linktitle: "Creating a case for looping"
description: "Create a test module / test case that reports the sales tax for cars across a range of prices."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Creating_loops.html
keywords: "control loops, repeat-until, repeat-until loops, condition to stop, in repeat-until loops"
---

Create a test module / test case that reports the sales tax for cars across a range of prices.

1.  In the TestArchitect explorer tree, select any item within the Car Rental project, then click **Create new test module** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.CreateTestModule.png) in the toolbar.

    The New Test Module dialog box appears.

2.  EnterMy streamlining as the name, then click **Create**.

    A new test module appears in the main panel, ready for editing.

3.  In the `INITIAL` section, declare the following local variables with initial value of 0:

    ```
                        name                value    
    local variable      NY sales tax        0
    local variable      car price           0           
    ```

    Since these local variables are declared in the `INITIAL` section, they are accessible throughout the test module.

4.  In the third column of the TEST CASE line, type a description \(for example, create a report\).

5.  Skip down a few rows and type the following action lines:

    ```
    
                       variable             value                                               
    local variable     NY sales tax         7                                                                                           
    local variable     car price            20000                                               
                                                     
                       text                                                
    report             # "The New York sales tax (" & NY sales tax & "%) on a $" & car price & " car is " & (NY sales tax/100) * car price & " dollars."                  
    ```

    The local variable action lines here assign new values to variables NY sales tax and car price.

{{<tip>}} During an editing session, entering the *\#* symbol in an empty argument cell triggers an autocomplete pop-up window containing a list of variables thought to be within scope at that position in the action lines. Use the Up and Down arrow keys to select one, should you need it inserted at that point. You can bring back the pop-up list at any further point in the expression by pressing Ctrl + Space

6.  Select these three action lines in their entirety \(headers included\), and press Ctrl+C to copy them.

7.  Move your cell pointer a few rows past the last line, and press Ctrl+V to paste. Repeat this process so that your test case holds a total of seven action lines.

8.  You can delete the two new local variable lines for NY sales tax, as that value will not be changed.

9.  Modify the value argument of the third local variable action for car price to `25000`, then modify the next one to `30000`.

    Your test case should now resemble the following:

    ![](/images/TA_Tutorials/Images/tut.Reusability.Test01.png)

    You now have three sets of local variable / report action lines in which the value of car price varies, but where each report action line is identical.

10. With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

11. Click **Execute**.

    The status bar \(at the bottom left of the TestArchitect window\) indicates the stages of the test as it progresses. Upon test completion the newly generated results page is displayed.


Click on the **Result Details** subtab to view the output of the report action lines, indicating the New York state tax amount required for a car purchase at three different prices:

![](/images/TA_Tutorials/Images/tut.Reusability.Test01_Results.png)

The above test case has repeating action lines \(identical report actions\), which differ only by the value of a variable which increases by the same amount each time. This situation is well suited for iteration, or looping.




