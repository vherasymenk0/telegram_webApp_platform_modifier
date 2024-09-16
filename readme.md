# Telegram WebApp Platform Modifier

**Telegram WebApp Platform Modifier** is a Google Chrome extension that allows you to run Telegram WebApps in the web version of Telegram. It automatically modifies the platform parameters so that web applications operate as if they are on an Android device.

## Installation

You can install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/telegram-webapp-platform/lpmjppceoljdoinbdmgangolmigiphnb).

## How It Works

The extension intercepts the addition of `iframe` elements on the **Telegram Web** page and changes the `tgWebAppPlatform` parameter in their `src` attribute to `android`. This enables Telegram web applications to function as if they are running on an Android device.

## Usage

1. **Install the extension** from the [Chrome Web Store](https://chromewebstore.google.com/detail/telegram-webapp-platform/lpmjppceoljdoinbdmgangolmigiphnb).
2. **Restart Telegram Web** or open it in a new tab.
3. **Launch the desired WebApp** in Telegram Web as usual.
