--- 
title: "Using anchor pos with multilevel dynamic identifiers"
linktitle: "Using anchor pos with multilevel dynamic identifiers"
description: "Using anchor and anchor pos properties within multilevel dynamic identifiers is often essential to ensure that you are targeting the right controls."
weight: 3
aliases: 
    - /TA_Help/Topics/prop_anchor.example_03.html
keywords: "anchor, anchor pos, interface elements, properties"
---

Using anchor and anchor pos properties within multilevel dynamic identifiers is often essential to ensure that you are targeting the right controls.

In the [last example](/TA_Help/Topics/prop_anchor.example_02.html), we relied on a single anchor to identify all the headlines of the **National News** section of our newspaper web page. The headlines are all contained in link \(<a\>\) elements, and we relied on the assumption that every link element in that section is for a headline, allowing us to step through anchor pos values link 1, link 2, etc. and retrieve the text of each one.

But what if we're wrong about that assumption? For example, some editor might decide that the first article about LogiGear should have a hyperlink \(which uses the **<a\>** tag\) on the company name to allow a reader to click on the text [LogiGear Corporation](http://www.logigear.com) to access the corporate website:

![](/images/TA_Help/Images/interface.anchor_pos.13.png)

Clearly, we do not want to capture link text that is not a headline, but our current test case has no way of making the distinction between a headline and non-headline link.

However, it is clear from the above figure that each headline link element is a child of a parent article div, and that it is the *first* link within each div. \(It's also clear that every article div has a child headline link.\) This scenario is perfect for using the article divs as anchors for their respective headline links, with just one drawback: unlike our former anchor, which has a unique property-value pair \(id=national\_section\), there is no easy way to uniquely identify each of the article divs.

On the other hand, we can see that there is a regularity with which the article divs appear within the national\_section div. Specifically, they appear as the 1st, 3rd, 5th, etc., divs within national\_section, alternating with the content divs. Assuming that we can be assured that this pattern will always be consistent, we have a situation that allows for us to employ two levels of anchor:

![](/images/TA_Help/Images/interface.anchor_pos.13a.png)

So our procedure, quite simply, will work like this:

1.  Find the first child div \(an article div\) within the national\_section div;
2.  Grab the text of the first link within this div & write it to the output file;
3.  Jump 2 divs ahead \(to get to the next article div\);
4.  Go back to step 2, & keep going until no more child divs of national\_section are found.

Once again, we will use the HTML code from our last two examples, but with one small change:

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
            <div class="content">Shares in **<a href="http://www.logigear.com/"\>LogiGear Corporation</a\>** soared today when...</div>
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

Note that the content div of the first article now has a new link element encompassing the “LogiGear Corporation” text:

```
<div class="content">Shares in <a href="http://www.logigear.com/">LogiGear Corporation</a> soared today when...</div>
```

This will help us ensure that our new approach works correctly. \(Feel free, by the way, to try out the test cases of the previous two examples against this new web page, to verify that they are no longer adequate solutions.\)

1.  {{<note>}} If you already saved the HTML code from the previous example, you can skip the following substeps. \(But remember to change the content div element as mentioned above, and to open the web page in a browser.\)

    If you wish to follow along with the steps in this example:

    1.  Select and copy the HTML code at the top of this page.

    2.  Open a new file in a text editor \(such as Notepad\), and paste the HTML code into it.

    3.  Save the file as a .html file.

    4.  Open the saved file in a web browser.

        {{<remember>}} During this exercise, ensure that the web page for this file is maintained as the active tab in its browser window.

2.  {{<note>}} You can skip this step if you already have the front\_page interface entity from the previous example, as we will continue to work with it.

    In a TestArchitect project, create a [new interface entity](/TA_Help/Topics/Interface_def_Adding.html), name it front\_page, and enter the following two mappings:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.11b.png)

    Be sure to save it.

3.  Now we're ready to write our test procedure.
4.  In TestArchitect, if you have not already created the newspaper test module from the previous example, go ahead and do so.

5.  In the test editor, create a new test case, and \(optionally\) give it a title, such as Use multi-level anchoring to better ensure reliable results.

6.  Enter the following action lines for the test case:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.12c.png)

    First, note lines 76 and 89. In the [previous example](/TA_Help/Topics/prop_anchor.example_02.html), we cycled through all the headlines \(or what we *hoped* would be only headlines\) of the **National News** section. Now, using the var\_article\_no variable, we are cycling through the divs representing each article. \(Note that we increment by 2 so that we can skip over the content divs\).

    Our get action now uses a two-level [dynamic identifier](/TA_Help/Topics/The_test_language_dynamic_identifiers.html) to access each headline. At the innermost level, we continue to use the **national\_section** div \(TA name: **div\_national-news**\) as a “hard anchor” \(hard, in that it is a static identifier\). Within that inner dynamic identifier, on each iteration of the `while` loop, the anchor pos value progresses from div 1, to div 3, to div 5, etc., corresponding to each article div. In the outer dynamic identifier, with each article div acting as an anchor, we simply specify that we are interested in the first link element \(anchor pos = link 1\), corresponding to that article's headline.

    {{<tip>}} If you have trouble reading multilevel dynamic identifiers \(especially ones that go beyond two levels\), or just want to make your test cases more readable, you can decompose them with the use of variables. For example, the get action line in this example could easily be replaced with the following:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.12d.png)

7.  Now [execute](/TA_Help/Topics/Test_exec_test_execution.html) your test case.

    {{<note>}} If your test module now holds the test cases from the previous examples, you might want to restrict execution to just this test case. On the other hand, if they all use different output files, you may want to let all of them run and compare the results.


Upon completion of execution, your headlines.txt file holds the three retrieved headlines, having successfully avoided capturing the text of any non-headline links:

![](/images/TA_Help/Images/IV_tree_for_anchor_pos.13a.png)

By contrast, if you also ran the [previous test case](/TA_Help/Topics/prop_anchor.example_02.html#stepresult.test_case), you would have found that it also picked up the non-headline text:![](/images/TA_Help/Images/IV_tree_for_anchor_pos.13b.png)



