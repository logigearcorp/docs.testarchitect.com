--- 
title: "Deploying a Windows build agent - TFBuild"
linktitle: "Deploying a Windows build agent - TFBuild"
description: "For TFBuild build definitions, to build Visual Studio solutions, you'll need at least one Windows build agent."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_deploy_windows_build_agent.html
keywords: "TFS, configuring a build agent, Build VNext, Team Foundation Server, configuring a build agent, Build VNext, integration, Microsoft Test Manager, configuring a build agent, Build VNext"
---

For TFBuild build definitions, to build Visual Studio solutions, you'll need at least one Windows build agent.

To deploy the agent, do the following:

1.  Create an agent pool, a collection of build agents. \([Learn more](https://msdn.microsoft.com/library/vs/alm/build/agents/admin#agent-pools).\)

    Agent pools are used to organize and define permission boundaries around your agents. You can share your pool across multiple team project collections.

    **Remember:** When you create a new pool, in most cases you should leave **Auto-Provision Queue in Project Collections** selected. This setting ensures all collections have a queue to access the pool. The system creates a queue for existing collections and whenever a collection is created.

    ![](/images/TA_Help/Images/agent_pool.png)

    The agent pool is created and queued.

    ![](/images/TA_Help/Images/ug_MTM_agent_pool.png)

2.  On the machine on which you plan to run the Windows build agent, deploy the build agent \(see the [Deploy the agent](https://msdn.microsoft.com/library/vs/alm/build/agents/windows) section.\)

    **Remember:** As you are responding to the prompts, deploy the agent to run as a Windows service.

    The deployed build agent is registered to the dedicated agent pool.

    ![](/images/TA_Help/Images/ug_MTM_agent_pool_deployed.png)



