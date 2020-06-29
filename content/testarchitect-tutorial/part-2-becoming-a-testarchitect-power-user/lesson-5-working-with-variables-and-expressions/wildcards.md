--- 
title: "Wildcards"
linktitle: "Wildcards"
description: "In strings that are used to test for matches with expected values, and in searches, the wildcard substring is used act as a placeholder to represent any arbitrary character or group of characters."
weight: 8
aliases: 
    - /TA_Tutorials/Topics/Wildcards.html
keywords: "wildcards, interfaces, symbols, *, {}"
---

In strings that are used to test for matches with expected values, and in searches, the wildcard substring is used act as a placeholder to represent any arbitrary character or group of characters.

Some built-in actions, such as [check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check) and [check popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-default-text), often specify a string value \(a search string\) as one of their arguments. The success or failure of the action is determined by whether or not a match is found between the search string and an item being examined, usually a name or property value coming from the target application or operating environment. It is often the case however that you want a match to be considered successful if your search string matches only a part of the string it is being tested against. For such instances, TestArchitect allows for the use of wildcards.

The TestArchitect wildcard is represented by the 2-character string `.*` \(dot-star\). When used in a matching operation, this string essentially says "any character, or string of characters, or even *no* characters, will be considered a match". For example, the string `t.*t` is a match for the strings `tt`, `tot`, `tout`, `taunt`, `turret`, and `testarchitect`, but not `toto` \(the search string does not match a string ending in anything other than a t\) or `batter` \(it does not match any string that doesn’t both start with a `t` and end with a `t`\).

Wildcards can be applied more than once to a search string. For example, while `toto` and `batter` don't match `t.*t`, `toto` does match `t.*t.*`, `batter` matches `.*tt.*`, and both words match `.*t.*t.*`.

{{<note>}} When wildcards are used, the entire search string must be enclosed within curly brace symbols `{}`. This lets TestArchitect know not to treat the string `.*` literally, but to treat it as a wildcard.

Wildcard matching is not limited to runtime actions like check and check popup default text. Wildcards may also be used in interfacing when there is a need to identify a window or control in which the name \(or any other identifying property\) can be variable, yet has some known, constant component. For example, when testing a web application on multiple browsers, browsers tends to append their own names to web page names when they form window titles. Therefore if a title specified by the page is My Web App, the title property of the window in which it is opened may be My Web App – Windows Internet Explorer, My Web App – Mozilla Firefox, or My Web App – Google Chrome.

One solution for this issue would be to have multiple interface entities \(one for each browser\). This would require additional action lines and perhaps some conditional logic. A simpler solution is to have a single interface entity and a wildcard:

![](/images/TA_Tutorials/Images/tut.Vars_and_Exps.Wildcards.Window_interfacing.png)

This essentially has the interface entity saying, “I'll match up with any window whose title property begins with 'My Web App', and after that, I don't care”. Hence this entity matches any one of the three possible browser window titles previously mentioned.




