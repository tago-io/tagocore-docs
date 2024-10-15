---
sidebar_position: 1
title: Overview
slug: /device
---

# Device

Device is the link between your external things and the data in your application. You need to create a device in order to allow anything to send or receive data from your buckets.

The default communication between external devices and TagoCore is done through HTTP using JSON.

## Adding a Device

To add a new device, press the&nbsp; <img className="inline-image" src="/docs/img/device/add-device-button.png" height="25px" /> &nbsp;button on the **Devices** page. Once you press the button, a new Device will automatically be created with the name **New Device**.

:::info
When a Device is created, TagoCore automatically creates a [Bucket](/bucket) for it with the same name.
:::

## Token & Serial Number

The secret key used between TagoCore and your Device is called **Device token**. You can only retrieve data from a Device or send data to a Device if you specify a valid token.

:::danger Be careful
Device tokens should be kept secret and only be shared with those you trust.
:::

## Payload Parser

Payload Parsers allows you to manipulate the raw payload sent by devices. For example, it can be used to transform a HEX payload sent by a device into `temperature` and `battery` variables. [Learn more about Payload parsers](/device/payload-parser).
