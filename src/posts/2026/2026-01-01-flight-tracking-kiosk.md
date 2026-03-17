---
title: "Flight tracking upgrade"
description: "flight tracking"
tags: ["retro computing", "flight tracking", "raspberry pi"]
date: 2026-01-01
draft: true
---

- Old setup with FlightAware software
- transitioning to https://github.com/dirkhh/adsb-feeder-image
  - docker setup lets you run other things behind the scenes
    - portainer, https://github.com/portainer/portainer
    - byos_laravel, https://github.com/usetrmnl/byos_laravel
  - moving to full install from lite install to get gui
    - https://www.jeffgeerling.com/blog/2022/install-raspberry-pi-oss-desktop-environment-over-lite-install/
    - https://forums.raspberrypi.com/viewtopic.php?t=202060
  - kiosk mode chrome
    - made into a system service
      - https://github.com/TheGeekOfAllTrades/RasPi5_Kiosk
    - cycling tabs with extension because wtype kept failing for some reason
      - https://chromewebstore.google.com/detail/tabcycle-auto-rotate-tabs/bebaafpheippdjbaopaelehbadfkgdnd
      - https://www.raspberrypi.com/tutorials/how-to-use-a-raspberry-pi-in-kiosk-mode/
- new hardware setup with mini mac case
  - night time schedule using GPIO
    - link over to pdp post
  - trouble with power usage, trying powered hub
    - issues with touchscreen - don't forget layer 1 of the OSI model
