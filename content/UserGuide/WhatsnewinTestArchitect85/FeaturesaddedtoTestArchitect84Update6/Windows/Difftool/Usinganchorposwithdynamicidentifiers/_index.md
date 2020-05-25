--- 
title: "Using anchor pos with dynamic identifiers"
linktitle: "Using anchor pos with dynamic identifiers"
aliases: 
    - /TA_Help/Topics/prop_anchor.example_02.html
---
# Using anchor pos with dynamic identifiers {#Interface_viewer_anchor_ex2 .task}

Using anchor and anchor pos properties within variable-based dynamic identifiers.

In the [previous example](prop_anchor.example_01.html) demonstrating the use of the anchor pos property, we had dedicated action lines accessing several link elements in a web page with a repetitive pattern of elements. And the test used “hard-coded” references to each element. If the next day's newspaper had more than three **National News** articles, the test case would fail to capture any headlines past the third one. And were it to have only two, the get action would error out when it attempted to access the \(nonexistent\) third headline.

Ideally, we need a test procedure that can retrieve all of the **National News** headlines regardless of their number. And because of the repetitive nature of the pattern of elements surrounding each headline, it would be preferable to be able to iterate through them, especially in an AUT window or web page containing a large number of these repetitions.

To recap, recall from the last example that the HTML code of the web page is as follows:

```
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Today's News</title>
</head>
<body>
    <div id="flag">New York Times</div>
    <div id="date">Friday, January 16, 2015</div>
    <div id="table_of_contents">
        <a href="#international_section">International news</a>
        <a href="#national_section">National news</a>
        <a href="#sports_section">Sports</a>
    </div>
    <div id="national_section">
        <strong>National News</strong>
        <div class="article">
            <a>LogiGear Rally Drives Dow to All-time High</a>
            <div class="content">Shares in LogiGear Corporation soared today when...</div>
        </div>
        <div class="article">
            <a>Dog Bites Man</a>
            <div class="content">In an act unbecoming of Man's Best Friend, a local chihuahua...</div>
        </div>
        <div class="article">
            <a>Man Bites Dog</a>
            <div class="content">In an act of senseless vengeance, a local man...</div>
        </div>
    </div>
    <div id="international_section">
        <strong>International News</strong>
        <div class="article">1st international article...</div>
        <div class="article">2nd international article...</div>
    </div>
    <div id="sports_section">
        <strong>Sports News</strong>
        <div class="article">1st sports article...</div>
        <div class="article">2nd sports article...</div>
    </div>
</body>
</html>

```

Also recall that we are interested in retrieving the text of the headlines of the **National News** section, which are contained in link \(<a\>\) elements:

![](../Images/interface.anchor_pos.06.png)

As before, we can use the **div** element with `id="national_section"` as an anchor for the headline elements. In that example, we also used mappings from the interface entity to identify the link containing each headline. Because these interface elements are hard-coded and unchangeable during runtime, we refer to them as static identifiers. What we need instead in this case is a [dynamic identifier](The_test_language_dynamic_identifiers.html), one which can be varied during the run to identify each headline-containing link element in sequence.

**Warning:** The last example included a warning that we are assuming that the only link \(<a\>\) elements in the articles are those that contain the headlines. That assumption still holds for this example. It is addressed in a [later example](prop_anchor.example_03.html).

1.  **Note:** If you already saved the HTML code from the previous example, you can skip the following substeps. \(But remember to open the web page in a browser.\)

    If you wish to follow along with the steps in this example:

    1.  Select and copy the HTML code at the top of this page.

    2.  Open a new file in a text editor \(such as Notepad\), and paste the HTML code into it.

    3.  Save the file as a .html file.

    4.  Open the saved file in a web browser.

        **Remember:** During this exercise, ensure that the web page for this file is maintained as the active tab in its browser window.

2.  **Note:** You can skip this step if you already created the front\_page interface entity from the previous example, as we will continue to work with it. Note that, if you do not yet have it, in this case it only requires a single interface element, that for the anchor.

    In a TestArchitect project, create a [new interface entity](Interface_def_Adding.html), name it front\_page, and enter the following two mappings:

    ![](../Images/IV_tree_for_anchor_pos.11b.png)

    Be sure to save it.

3.  Now we're ready to write our test procedure.
4.  In TestArchitect, if you have not already created the newspaper test module from the previous example, go ahead and do so.

5.  In the test editor, create a new test case, and \(optionally\) give it a title, such as Use anchor pos with dynamic identifier to allow for looping thru headlines.

6.  Enter the following action lines for the test case:

    ![](../Images/IV_tree_for_anchor_pos.12b.png)

    Note the key differences between this test case and the last:

    1.  we now have a loop that invokes the get and set text file actions iteratively, and
    2.  the get action uses a dynamic identifier to reference each of the article headlines.
    As described in the [Dynamic identifiers](The_test_language_dynamic_identifiers.html) topic, a dynamic identifier consists of square brackets surrounding the identification of a TA class, followed by one or more property-value pairs, all comma-delimited. The above dynamic identifier involves two such property-value pairs, as we need to identify both an anchor and an anchor pos. The anchor portion \(**div\_national-news**\) of the dynamic identifier remains constant throughout the loop, but the anchor pos portion must vary with each iteration. Hence, a concatenation expression is used in order to insert an incrementing variable, var\_headline\_no, into the dynamic identifier, so that, with each iteration, the get action's control argument takes on the values:

    ```
    ta class=link, anchor=div_national-news, anchor pos=link 1]
    ta class=link, anchor=div_national-news, anchor pos=link 2]
    ta class=link, anchor=div_national-news, anchor pos=link 3]
                              etc.
    ```

7.  Now [execute](Test_exec_test_execution.html) your test case. \(If your test module now holds two test cases, you might want to restrict execution to just this test case.\)


Upon completion of execution, your headlines02.txt file holds the three retrieved headlines:

![](../Images/IV_tree_for_anchor_pos.13a.png)

One issue that remains is that we have so far relied on the assumption that, in all possible editions of this web page, the only <a\> \(link\) elements within the national\_section div will be those for the headlines. If we're wrong about that, we will find ourselves retrieving non-headline text. One solution in this case is to use multilevel anchors, discussed in the next topic.

**Parent topic:**[anchor pos property](../../TA_Help/Topics/Interface_def_anchor_pos_concept.html)

**Previous topic:**[Using anchor and anchor pos properties](../../TA_Help/Topics/prop_anchor.example_01.html)

**Next topic:**[Using anchor pos with multilevel dynamic identifiers](../../TA_Help/Topics/prop_anchor.example_03.html)

