# Tizen Radio Support

This Radio Tuner app operates in two modes: simulation and hardware. The hardware mode is in
effect when it detects through the underlying tuner API that hardware is present. Currently, hardware
support is available through the reference-xeno OCX implementation which is built for both Linux and Tizen
(which is also a Linux distribution).

The Tuner OCX implementation uses the Video for Linux 2 (V4L2) API. Currently the only hardware that we
have available is the *ADS Technologies, Inc. FM Radio Receiver/Instant FM Music (RDX-155-EF)* device.

Tizen opts to omit the drivers for the *Instant FM* device in their kernel configurations. We need to rebuild
the Tizen kernel package with Tizen's configuration plus the required built-in (thus the need to rebuild) and
 module support for this device. I've found one combination of Tizen releases and generated kernel packages
 that will successfully upgrade Tizen with the necessary support.

 Both the VTC-1010 hardware and the VMware virtual machine will work with the *Instant FM* radio device
 after completing the following instructions. (TODO actually get audio loopback working.)

## Instructions to add Tizen Radio Support

1. Start with a *tizen_3.0.m14.3_ivi* installed image. Unfortunately the *tizen_3.0_ivi* final release does not successfully
install any of the kernel packages that I've built.

2. Copy `kernel-ivi-x86_64-default-3.14.19-0.x86_64.rpm` to `ividev/`. This kernel package is available on ocshare and
on the sftp site for external people.

3. `grunt server-install` When that finishes, rename the kernel file (i.e. change the prefix) so future installs won't find it again in ividev.

4. `grunt deploy-reboot`

If you're using a VM you may need to right-click the icon representing the USB device and select "Connect" so your
  VM may use it.