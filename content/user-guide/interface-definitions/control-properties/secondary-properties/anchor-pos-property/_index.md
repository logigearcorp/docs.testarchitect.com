--- 
title: "anchor pos property"
linktitle: "anchor pos property"
weight: 2
aliases: 
    - /TA_Help/Topics/Interface_def_anchor_pos_concept.html
---

anchor pos is a secondary property that, like global pos, is used to identify a control independent of any inherent property-value pairs. The use of anchor pos is an often more reliable means of identifying a control than global pos, and is recommended over global pos.

In general, the following two scenarios are those for which the use of anchor pos is most often warranted:

1.  When a given control or HTML element has no conventional TA property-value pairs that can be reliably used for its identification;
2.  When your test involves iterating through multiple controls of the same class, repeated in a pattern. \(Made possible by the combined use of [dynamic identifiers](The_test_language_dynamic_identifiers.html), anchor pos and variables.\)

The format of an anchor pos value is identical to that of [global pos](Interface_def_global_pos.html), consisting of a TA class followed by an index, with a space separating the two:

```
<ta class> <index>
```

Some examples: **treenode 6**, **div 1**, **link 12**.

The difference is the basis of the index. The global pos properties of controls are essentially anchored to the window, as index values \(within a given class\) start at 1 in the window and continue to increment. That can be a problem in a dynamic environment, where controls of a given class may come and go. This is especially the case with web applications.

In essence, anchor pos differs from global pos in that you choose your own anchor for the control of interest, with that anchor being another control – specifically, an ancestor control of the control of interest. By having an anchor that is relatively close to the control of interest, you can avoid the risk of misidentification, which can happen in a dynamic environment when other controls of the same class are introduced \(or removed\), causing index values to change.

**Tip:** Controls in a window are always organized into a tree-style hierarchy, as evidenced when you use the Interface Viewer in Hierarchy View.

The following figure, depicting a dynamic AUT window at two different points in time, illustrates the value of anchor pos over global pos:

![](/images//Images/anchor_pos_vs_global_pos.01.png)

As shown, use of global pos to identify the text block controls is unreliable if it is possible for other controls of the same class to be introduced or removed. Here, a second text block introduced under **tree node A** has the effect of changing the global pos value of the text block below it in the hierarchy \(as well as all other text blocks below it\). By contrast, the anchor pos value of the lower text box, based on the anchor being the parent tree node, remains constant.

As a general rule, when using anchor / anchor pos to identify a control, it is best that your anchor be an ancestor which is as close as possible to the control of interest. The tradeoff is that you must also find an anchor control which is truly “anchorable” – that is, one that can itself be reliably and uniquely identified, either through a unique set of property-value pairs, or possibly even by being anchored to still another control \([multilevel anchoring](prop_anchor.example_03.html)\). The above example, for instance, assumes that we have some reliable means of uniquely identifying tree nodes **A** and **B**, allowing them to be used an anchors for their child text blocks.

1.  [Using anchor and anchor pos properties](/TA_Help/Topics/prop_anchor.example_01.html)  
Using anchor and anchor pos properties to map a control.
2.  [Using anchor pos with dynamic identifiers](/TA_Help/Topics/prop_anchor.example_02.html)  
Using anchor and anchor pos properties within variable-based dynamic identifiers.
3.  [Using anchor pos with multilevel dynamic identifiers](/TA_Help/Topics/prop_anchor.example_03.html)  
Using anchor and anchor pos properties within multilevel dynamic identifiers is often essential to ensure that you are targeting the right controls.

**Parent topic:**[Secondary properties](/TA_Help/Topics/Interface_def_derived_properties.html)

