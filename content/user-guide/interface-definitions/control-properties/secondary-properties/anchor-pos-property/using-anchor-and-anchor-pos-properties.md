--- 
title: "Using anchor and anchor pos properties"
linktitle: "Using anchor and anchor pos properties"
description: "Using anchor and anchor pos properties to map a control."
weight: 1
aliases: 
    - /TA_Help/Topics/prop_anchor.example_01.html
keywords: "anchor property, anchor pos, TA properties, anchor, anchor pos"
---

Using anchor and anchor pos properties to map a control.

The following example illustrates how to map a control using the anchor / anchor pos pair of properties, and how to use it in a test.

In this example, we will write the action lines, and create the necessary interface mappings, to allow us to capture headlines from the front page of a web-based newspaper. A typical HTML page might look like the following:

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

The front page has sections \(**div**s\) for national news, international news, and sports. Within each section are articles \(**div**s with `class=“article”`\), each consisting of a headline and the article content. For this exercise, we will limit ourselves to capturing only the first three headlines from the **National News** section of the web page.

When TestArchitect intakes HTML elements, such as you would do with the Interface Viewer, attributes such as id or class get mapped to TA properties. For example, the element `<div id="sports_section">` produces a control of TA class div, with a TA property of id which is set to a value of sports\_section:

![](/images/TA_Help/Images/interface.anchor_pos.12a.png)

These properties are typically the means by which TestArchitect can easily identify particular elements. But as you can see, the headlines that we are interested in are enclosed in `<a>` tags \(e.g., **<a\>Dog Bites Man</a\>**\), which have no attributes specified for them.

Since we have no such attributes for the headlines, our best bet for identifying these controls is to find a suitable anchor. And, indeed, it appears that a good, easily-identifiable anchor does exist:

![](/images/TA_Help/Images/interface.anchor_pos.06.png)

The **div** element with `id="national_section"` is a good candidate as an anchor for the headline elements, because a\), it is an ancestor to all of them \(an essential requirement\), and b\), it is uniquely identifiable, thanks to its id attribute.

{{<warning>}} Note that there is an assumption being made for this example, which is that the only <a\> elements in the articles are the headlines. That is a dangerous assumption, as <a\> is used for hyperlinks and it is certainly possible for hyperlinks to appear in an article's content. We will address this problem in a [later topic](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-pos-with-multilevel-dynamic-identifiers).

1.  If you wish to follow along with the steps in this example:

    1.  Select and copy the HTML code at the top of this page.

    2.  Open a new file in a text editor \(such as Notepad\), and paste the HTML code into it.

    3.  Save the file as a .html file.

    4.  Open the saved file in a web browser.

        {{<remember>}} During this exercise, ensure that the web page for this file is maintained as the active tab in its browser window.

2.  In a TestArchitect project, create a [new interface entity](/user-guide/interface-definitions/creating-interface-entities), name it front\_page, and keep it open.

3.  Launch the Interface Viewer from TestArchitect \(press F7 or select **Tools** \> **Interface Viewer**from the main menu; or click the **Interface Viewer** ![](/images/TA_Help/Images/Interface_viewer_btn.png) button on the toolbar\).

4.  In the UI Explorer panel, find the node entitled **Today's News**, and expand it.

5.  Now locate the node for the **div** element that will serve as our anchor. It's the one whose id property has the value national\_section.

    1.  Click this node to select it.

    2.  In the TA Properties panel, select the id check box, and clear any others.

    3.  Back in the UI Explorer panel, double-click the node.

        The green check mark indicates that the element is now tentatively mapped. \(Tentatively, because the mapping has not yet been saved to the interface entity.\) Note that the same is also true of the page.

        ![](/images/TA_Help/Images/interface.anchor_pos.07.png)

        {{<note>}} Note that each control of TA class link represents a <a\> element.

    4.  Press F2 so that we can assign a meaningful TA name to the element. Let's call it **div\_national-news**.

6.  <div id="step.map_link.start"></div>Now select the first of the **link** nodes that holds a headline.

7.  In the TA Properties panel, click in the **anchor** property field once or twice until the **Browse** button appears, then click the button:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.05a.png)

    This launches the Anchor Selection dialog box:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.06a.png)

8.  The Anchor Selection window presents a hierarchical path consisting of only the parentage \(the ancestor controls\) of the current control. Ancestor controls are all candidates for the role of anchor of the control of interest, and they are the only possible candidates. We will use the previously mapped control, **div\_national-news**, as the anchor.

9.  Select the **div\_national-news** control, then click **OK**.

    The Anchor Selection window is dismissed.

10. In the viewer's TA Properties panel, select the check box for the anchor pos property.

    Note that this automatically causes the anchor property to be selected as well, as anchor pos is meaningless without an anchor.

11. Clear any other property check boxes besides anchor and anchor pos.

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.09a.png)

    {{<note>}} Note that the anchor property always specifies a TA name of a control, while the anchor pos value, as discussed in [anchor pos property](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/), consists of a TA class followed by an index reflecting the control's position within the subtree beneath the anchor. In this case, the control we are interested in is the first link element under the **div\_national-news** element, hence the value link 1.

12. <div id="step.map_link.stop"></div>In the UI explorer, give this node a TA name by right-clicking it, selecting **Rename**, and entering your name. We'll call it **link\_national\_article1\_headline**, since it holds the headline of the first article in the national news section. Press Enter.

    Note that a green check mark appears next to the node, indicating that, in addition to being named, the node has also been tentatively mapped.

13. 14. Now, repeat steps [6](#step.map_link.start) through [11](#step.map_link.stop) for the other two link elements holding national headlines. Assign them both the same anchor as the first, and name them, sequentially, **link\_national\_article2\_headline** and **link\_national\_article3\_headline**.

    The Interface Viewer display should now look something like this:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.10a.png)

15. 16. Click **Save** ![](/images/TA_Help/Images/btn_Interface_Viewer-Save.png) on the Interface Viewer's toolbar to save the mappings to your interface entity:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.11a.png)

    Note in the entity how the three link elements, by means of their anchor properties, all point to the div element. They are distinguished from each other by their respective anchor pos properties, whose index values indicate the placement of each one within the subtree defined by the anchor.

17. Now we're ready to write our test procedure. Its job is to access each of the three link elements that we have mapped, get their respective text contents, and write them to a file.
18. In TestArchitect, create a new test module, and name it newspaper.

19. In the test editor, create a new test case, and \(optionally\) give it a title, such as Use anchor pos to read first 3 article headlines.

20. Enter the following action lines for the test case:

    ![](/images/TA_Help/Images/IV_tree_for_anchor_pos.12a.png)

    These lines consist of three pairs [get](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get) / [set text file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/set-text-file) actions. Each get action retrieves the headline text from a link element and stores it to a variable. The following set text file action writes the contents of the variable \(the headline text\) to the file headlines.txt.

21. Now [execute](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) your test.


Upon completion of execution, your headlines.txt file holds the three retrieved headlines:

![](/images/TA_Help/Images/IV_tree_for_anchor_pos.13a.png)

It's probably clear from the repetitive lines in this test case that, for any kind of web page or AUT with a large repeating pattern of elements or controls, we could benefit from being able to iterate \(that is, loop\) through the essential action lines. You've probably already noted that the only differences in the identifying anchor pos values of the link elements in this example are the numeric indexes. This suggests that it should be possible to increment a variable in order to access each of these elements through their anchor pos properties. Indeed, it is possible, but it requires that we use the anchor pos properties not within the static environment of an interface entity, but within the context of dynamic identifiers. We explore this in the [next topic](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-pos-with-dynamic-identifiers).



