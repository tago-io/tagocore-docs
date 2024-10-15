---
sidebar_position: 7
title: Settings
slug: /settings
---

# Settings

The settings page allows you to modify any configuration related to TagoCore. You can visit this page by clicking on the &nbsp;<img src="/docs/img/icons/cog.svg" width="15px"/>&nbsp; button on the sidebar.

Settings are saved to a `.yml` file located in the `tagocore` folder, which resides in your Operating System's `Home Directory`.

## Settings folder

The first configuration you will find is the **Settings folder**. This is a read-only field that shows you where the settings are located in your filesystem.

## Port

This field allows you to change the port that TagoCore will run on. By default it has a value of `8888`, but you can change it to whatever port you prefer.

Changing the port will:

- Change the API endpoint where you make requests;
- Change the endpoint that you use to open TagoCore in your browser.

:::tip
This field requires TagoCore to restart for it to take effect.
:::

:::info
This configuration only affects TagoCore, and not any plugins that may start web servers.
:::

## Telemetry

Telemetry allows the TagoCore team to receive anonymous data usage of your TagoCore. This includes things like how many [Buckets](/bucket) and [Devices](/device) you have, as well as how much Data Input/Output you are using.

:::tip
This field requires TagoCore to restart for it to take effect.
:::

## Plugins folder

This field allows you to select the directory where you want to save the Plugins that you install.

Only the Plugins that are in this directory are loaded when TagoCore starts.

:::tip
This field requires TagoCore to restart for it to take effect.
:::

## Database plugin

This field allows you to define which Database plugin you want to use.

By default this configuration will use the first Database plugin it finds, but this option is ideal for you if you have multiple database plugins.

Once you switch to another Database Plugin, TagoCore will start using that Database as the data source for the application.

:::tip
This field requires TagoCore to restart for it to take effect.
::: 

:::info
Data is not replicated between database plugins.
:::

## Updates

This configuration allows TagoCore to automatically update plugins to newer versions.

You can define how frequent the system will check for updates.

:::info Good to know
A Backup of each plugin is created before automatically updating, so if a newer plugin version fails during the install, the old version will be automatically restored.
:::
