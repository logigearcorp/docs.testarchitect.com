--- 
title: "Rules for executing with variations"
linktitle: "Rules for executing with variations"
description: "At runtime setup, you have the option of supplying a variation specification to determine which variations of the required project items will be invoked for the test run. It is possible that certain invoked project items will not have variations that are exact matches with your runtime variation spec. In each such instance, TestArchitect applies a set of rules to determine the variation that is to be activated."
weight: 7
aliases: 
    - /TA_Help/Topics/Variations_rules_executing.html
keywords: "variations, execution rules"
---

At runtime setup, you have the option of supplying a variation specification to determine which variations of the required project items will be invoked for the test run. It is possible that certain invoked project items will not have variations that are exact matches with your runtime variation spec. In each such instance, TestArchitect applies a set of rules to determine the variation that is to be activated.

1.  [Multiple systems selection](/user-guide/variations/rules-for-executing-with-variations/multiple-systems-selection)  
At execution setup, you have the option of specifying a version variation for each defined system in your repository's **Systems & Platforms** tree.
2.  [Rules for selecting variations for execution](/user-guide/variations/rules-for-executing-with-variations/rules-for-selecting-variations-for-execution/)  
Obviously, if execution of a test run is specified with the **Keyword** Spanish and the **AUT Version** Car Rental: 1.2, and the test module calls, say, the user-defined login action, then the \{Car Rental: 1.2\} \{Spanish\} variation of login is invoked – if that variation exists!




**Related information**  


[Rules for creating variations](/user-guide/variations/rules-for-creating-variations/)

[Flow diagram of variation selection](/user-guide/variations/flow-diagram-of-variation-selection)

