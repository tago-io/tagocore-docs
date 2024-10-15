---
sidebar_position: 2
title: Manually
slug: /plugins/install/manually
---

# Install Plugin Manually

Maybe you are developing a Plugin or maybe you have received a bundled plugin from someone and you want to install it manually. In either case, to install a 
plugin manually you have two choices:

## Install via the sidebar

TagoCore's sidebar allows you to quickly install a bundled (.tcore) plugin file. Look for the &nbsp;<img src="/docs/img/icons/puzzle-piece.svg" width="15px"/>&nbsp; button in the sidebar and click on it.

:::info
This option is designed to load bundled (.tcore) files. If you have a simple Node.js project, go to the next option.
::: 

## Add to the Plugin Folder

If your plugin is not bundled, you need to copy the Node.js project to a subfolder in the `Plugin Folder` defined in your TagoCore's settings. After copying the project in that folder, simply restart TagoCore and your Plugin will be loaded.

This is what the structure in the `Plugin Folder` should look like:

```
plugin_folder
  - my_plugin_1
      package.json
      ...
  - my_plugin_2
      package.json
      ...
```
