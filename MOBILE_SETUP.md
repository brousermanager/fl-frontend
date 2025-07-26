# Mobile Development Setup for Radio Frequenza Libera

This guide will help you set up your development environment for building mobile apps with Tauri 2.

## Quick Setup (Ubuntu/Pop!_OS)

If you want to get started quickly, run these commands:

```bash
# Install Android Studio
sudo snap install android-studio --classic

# Install Java
sudo apt install openjdk-17-jdk

# Add environment variables to bashrc
cat >> ~/.bashrc << 'EOF'
export ANDROID_HOME=$HOME/Android/Sdk
export NDK_HOME=$ANDROID_HOME/ndk/25.1.8937393
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
EOF

# Reload bashrc
source ~/.bashrc

# Download and setup command-line tools
cd $ANDROID_HOME
wget -O cmdline-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
unzip -q cmdline-tools.zip
mv cmdline-tools tools
mkdir cmdline-tools
mv tools cmdline-tools/latest

# Install Android components
$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "ndk;25.1.8937393"
$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0" "system-images;android-34;google_apis;x86_64" "emulator"

# Create Android Virtual Device (AVD)
echo "no" | $ANDROID_HOME/cmdline-tools/latest/bin/avdmanager create avd -n "Tauri_Pixel_7" -k "system-images;android-34;google_apis;x86_64" -d "pixel_7"

# Initialize Tauri mobile support
cd /path/to/your/project
npx tauri android init

# Start development
npm run tauri:android
```

## Detailed Prerequisites

### For Android Development

1. **Install Android Studio**

   ```bash
   # Download from https://developer.android.com/studio
   # Or using snap (Ubuntu/Pop!_OS):
   sudo snap install android-studio --classic
   ```
2. **Set up Android SDK**
   - Open Android Studio
   - Go to Tools → SDK Manager
   - Install the latest Android SDK (API level 33 or higher)
   - Install Android SDK Build-Tools
   - Install Android Emulator

3. **Install Android NDK (Native Development Kit)**
   
   **Option A: Using Android Studio (Recommended)**
   - Open Android Studio
   - Go to Tools → SDK Manager
   - Click on "SDK Tools" tab
   - Check these items:
     - ✅ Android SDK Command-line Tools (latest)
     - ✅ NDK (Side by side) - Install version 25.1.8937393 or later
     - ✅ Android SDK Build-Tools
   - Click "Apply" and let it install

   **Option B: Using Command Line**
   ```bash
   # First, install command-line tools
   cd $ANDROID_HOME
   wget https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
   unzip commandlinetools-linux-11076708_latest.zip
   mv cmdline-tools tools
   mkdir cmdline-tools
   mv tools cmdline-tools/latest

   # Then install NDK
   $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "ndk;25.1.8937393"
   ```
3. **Set Environment Variables**
   Add these to your `~/.bashrc` or `~/.zshrc`:

   ```bash
   export ANDROID_HOME=$HOME/Android/Sdk
   export NDK_HOME=$ANDROID_HOME/ndk/25.1.8937393
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
   export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
   ```

   After adding these, reload your shell:
   ```bash
   source ~/.bashrc
   ```
4. **Install Java Development Kit (JDK)**
   ```bash
   sudo apt install openjdk-17-jdk
   ```

5. **Install Required Android Components**
   ```bash
   # Install platform, build tools, and system images
   $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0" "system-images;android-34;google_apis;x86_64" "emulator"
   ```

6. **Create Android Virtual Device (AVD)**
   ```bash
   # Create an emulator for testing
   echo "no" | $ANDROID_HOME/cmdline-tools/latest/bin/avdmanager create avd -n "Tauri_Pixel_7" -k "system-images;android-34;google_apis;x86_64" -d "pixel_7"
   
   # Start emulator (optional - Tauri will start it automatically)
   $ANDROID_HOME/emulator/emulator -avd Tauri_Pixel_7 &
   ```

7. **Verify Installation**
   ```bash
   # Check all environment variables are set
   echo "ANDROID_HOME: $ANDROID_HOME"
   echo "NDK_HOME: $NDK_HOME"
   echo "JAVA_HOME: $JAVA_HOME"
   
   # Verify tools are available
   java -version
   $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --version
   ls $NDK_HOME
   ```

### For iOS Development (macOS only)

1. **Install Xcode**

   - Download from Mac App Store
   - Install Xcode Command Line Tools:
     ```bash
     xcode-select --install
     ```
2. **Install iOS Simulator**

   - Open Xcode → Preferences → Components
   - Download desired iOS simulator versions

## Setup Commands

### Initialize Mobile Platforms

```bash
# Initialize Android support
npx tauri android init

# Initialize iOS support (macOS only)
npx tauri ios init
```

### Available Scripts

```bash
# Desktop development
npm run tauri:dev

# Android development
npm run tauri:android

# iOS development (macOS only)
npm run tauri:ios

# Build for Android
npm run tauri:android:build

# Build for iOS (macOS only)
npm run tauri:ios:build
```

## Mobile Features Available

### Haptic Feedback

- Vibrate device with customizable patterns
- Available on both Android and iOS

### Barcode/QR Code Scanner

- Camera-based scanning
- Supports multiple barcode formats
- Real-time scanning capabilities

### Biometric Authentication

- Fingerprint recognition
- Face ID (iOS) / Face Unlock (Android)
- PIN/Password fallback

### NFC (Near Field Communication)

- Android only
- Read NFC tags
- Write to NFC tags

## Platform Detection

The app automatically detects the platform and shows appropriate controls:

- **Desktop**: Window controls (minimize, maximize, close, set title)
- **Mobile**: Mobile-specific features (haptics, camera, biometrics, etc.)

## Testing

### Android Emulator

1. Start Android Studio
2. Open AVD Manager
3. Create/start a virtual device
4. Run `npm run tauri:android`

### Physical Device (Android)

1. Enable Developer Options on your device
2. Enable USB Debugging
3. Connect device via USB
4. Run `npm run tauri:android`

### iOS Simulator (macOS only)

1. Open Xcode
2. Open Simulator app
3. Choose iOS device/version
4. Run `npm run tauri:ios`

## Troubleshooting

### Android Issues

**Error: ANDROID_HOME not set**

- Ensure Android SDK is installed
- Set ANDROID_HOME environment variable
- Restart terminal/IDE

**Error: NDK_HOME not set**

- Ensure Android NDK is installed via Android Studio SDK Manager
- Set NDK_HOME environment variable: `export NDK_HOME=$ANDROID_HOME/ndk/25.1.8937393`
- Add to ~/.bashrc and reload: `source ~/.bashrc`
- Verify with: `echo $NDK_HOME` and `ls $NDK_HOME`

**Error: No Android devices found**

- Start Android emulator or connect physical device
- Enable USB debugging on physical device
- Run `adb devices` to verify connection

**Build errors**

- Ensure all Android SDK components are installed
- Update build tools to latest version
- Clean and rebuild: `npx tauri android build --force`
- If NDK errors persist, try reinstalling NDK: 
  ```bash
  $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --uninstall "ndk;25.1.8937393"
  $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "ndk;25.1.8937393"
  ```

### iOS Issues (macOS only)

**Error: Xcode not found**

- Install Xcode from Mac App Store
- Install Command Line Tools
- Run `xcode-select --install`

**Simulator not starting**

- Open Xcode and download iOS simulators
- Ensure simulator is compatible with your macOS version

## Production Builds

### Android APK/AAB

```bash
# Debug APK
npm run tauri:android:build

# Release APK (requires signing)
npm run tauri:android:build -- --release
```

### iOS IPA (macOS only)

```bash
# Debug build
npm run tauri:ios:build

# Release build (requires Apple Developer account)
npm run tauri:ios:build -- --release
```

## App Store Distribution

### Google Play Store (Android)

1. Create Google Play Developer account
2. Generate signing key
3. Build release AAB
4. Upload to Google Play Console

### Apple App Store (iOS)

1. Create Apple Developer account
2. Create App Store Connect record
3. Build with Xcode or Tauri CLI
4. Upload via Xcode or Application Loader

## Mobile-Specific Configuration

The mobile plugins are configured in `src-tauri/tauri.conf.json`:

```json
{
  "plugins": {
    "haptics": {
      "platforms": ["android", "ios"]
    },
    "barcode-scanner": {
      "platforms": ["android", "ios"]
    },
    "biometric": {
      "platforms": ["android", "ios"]
    },
    "nfc": {
      "platforms": ["android"]
    }
  }
}
```

## Next Steps

1. Set up your development environment following the prerequisites
2. Test the mobile features using the Tauri Controls component
3. Add custom mobile features specific to your radio app
4. Test on actual devices
5. Prepare for app store distribution

Happy mobile development! 📱🎉
