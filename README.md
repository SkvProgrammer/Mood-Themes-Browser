# Mood Theme Changer

Mood Theme Changer is a simple Chrome extension that lets you change the background color of your current browser tab based on your mood. Choose from four predefined moods: Happy, Sad, Calm, and Excited.


<img width="960" alt="chrome extension snapshot" src="https://github.com/user-attachments/assets/9dbeaeaa-deae-46c5-bfad-11dfc02f3e1e" />

## Features
- **Happy**: Sets the background color to yellow.
- **Sad**: Sets the background color to blue.
- **Calm**: Sets the background color to green.
- **Excited**: Sets the background color to orange.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/SkvProgrammer/Mood-Themes-Browser.git
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the project folder.

## Usage
1. Click the extension icon in the Chrome toolbar.
2. Select your mood from the popup window.
3. Watch the background color of your active tab change instantly!

## File Structure
```
MoodThemeChanger/
├── manifest.json      // Configuration file for the Chrome extension.
├── popup.html         // HTML file for the popup UI.
├── popup.js           // JavaScript file to handle the mood buttons' functionality.
├── icon.png           // Icon for the extension.
```
