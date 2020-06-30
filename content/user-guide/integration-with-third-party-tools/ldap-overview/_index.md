--- 
title: "LDAP overview"
linktitle: "LDAP overview"
description: "TestArchitect's support for LDAP (Lightweight Directory Access Protocol) allows your TestArchitect login credentials to be established through your system account, avoiding the need for a separate sign on."
weight: 7
aliases: 
    - /TA_Help/Topics/ug_LDAP_overview.html
keywords: "LDAP, overview"
---

TestArchitect's support for LDAP \(Lightweight Directory Access Protocol\) allows your TestArchitect login credentials to be established through your system account, avoiding the need for a separate sign on.

TestArchitect currently supports Microsoft Active Directory service to provide LDAP functionality. With a properly configured client, this allows LDAP's single sign-on to be available to you, whether your system runs on Windows, Linux, or macOS.

1.  [Configuring a repository for LDAP](/user-guide/integration-with-third-party-tools/ldap-overview/configuring-a-repository-for-ldap)  
Connecting a TestArchitect repository to an LDAP-based directory service is your first step in allowing users of the repository to take advantage of LDAP's single sign-on functionality.
2.  [Selecting LDAP authentication mode](/user-guide/integration-with-third-party-tools/ldap-overview/selecting-ldap-authentication-mode)  
This is where you “flip the switch”, telling TestArchitect that user authentications for a given repository are to be handled not by TestArchitect, but by LDAP.
3.  [Matching LDAP user names with repository user names](/user-guide/integration-with-third-party-tools/ldap-overview/matching-ldap-user-names-with-repository-user-names)  
Regardless of whether user authentications for a repository are performed by TestArchitect or LDAP, it is the TestArchitect user name that determines which permissions are granted to each user. Hence, to use LDAP, it is necessary to associate the LDAP user name of each user of the repository with his/her TestArchitect user name.



