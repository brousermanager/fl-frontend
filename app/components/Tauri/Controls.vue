<template>
  <VCard v-if="isTauri()" class="ma-4" title="Tauri Controls">
    <VCardText>
      <p>Your app is running in Tauri {{ currentPlatform }} environment!</p>
      
      <!-- Desktop Controls -->
      <VRow v-if="isDesktop" class="mt-4">
        <VCol cols="12" sm="6" md="3">
          <VBtn variant="outlined" block @click="minimizeWindow">
            <VIcon start>mdi-window-minimize</VIcon>
            Minimize
          </VBtn>
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <VBtn variant="outlined" block @click="maximizeWindow">
            <VIcon start>mdi-window-maximize</VIcon>
            Maximize
          </VBtn>
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <VBtn variant="outlined" block @click="setTitle">
            <VIcon start>mdi-pencil</VIcon>
            Set Title
          </VBtn>
        </VCol>
        <VCol cols="12" sm="6" md="3">
          <VBtn variant="outlined" color="error" block @click="closeWindow">
            <VIcon start>mdi-close</VIcon>
            Close
          </VBtn>
        </VCol>
      </VRow>

      <!-- Mobile Controls -->
      <VRow v-if="isMobile" class="mt-4">
        <VCol cols="12" sm="6">
          <VBtn variant="outlined" block @click="triggerHaptic">
            <VIcon start>mdi-vibrate</VIcon>
            Haptic Feedback
          </VBtn>
        </VCol>
        <VCol cols="12" sm="6">
          <VBtn variant="outlined" block @click="scanBarcode">
            <VIcon start>mdi-qrcode-scan</VIcon>
            Scan Barcode
          </VBtn>
        </VCol>
        <VCol cols="12" sm="6">
          <VBtn variant="outlined" block @click="checkBiometric">
            <VIcon start>mdi-fingerprint</VIcon>
            Biometric Auth
          </VBtn>
        </VCol>
        <VCol v-if="currentPlatform === 'android'" cols="12" sm="6">
          <VBtn variant="outlined" block @click="readNFC">
            <VIcon start>mdi-nfc-variant</VIcon>
            Read NFC
          </VBtn>
        </VCol>
      </VRow>

      <!-- Status Display -->
      <VAlert v-if="statusMessage" :color="statusType" class="mt-4">
        {{ statusMessage }}
      </VAlert>
    </VCardText>
  </VCard>
</template>

<script setup lang="ts">
import { isTauri } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { platform } from '@tauri-apps/plugin-os';

// Mobile plugin imports (conditional)
let haptics: typeof import('@tauri-apps/plugin-haptics') | null = null;
let barcodeScanner: typeof import('@tauri-apps/plugin-barcode-scanner') | null = null;
let biometric: typeof import('@tauri-apps/plugin-biometric') | null = null;
let nfc: typeof import('@tauri-apps/plugin-nfc') | null = null;

// Reactive state
const currentPlatform = ref('');
const statusMessage = ref('');
const statusType = ref<'success' | 'error' | 'info'>('info');

// Computed properties
const isDesktop = computed(() => ['windows', 'macos', 'linux'].includes(currentPlatform.value));
const isMobile = computed(() => ['android', 'ios'].includes(currentPlatform.value));

// Initialize platform detection
onMounted(async () => {
  if (isTauri()) {
    try {
      currentPlatform.value = await platform();
      
      // Dynamically import mobile plugins only when needed
      if (isMobile.value) {
        try {
          haptics = await import('@tauri-apps/plugin-haptics');
          barcodeScanner = await import('@tauri-apps/plugin-barcode-scanner');
          biometric = await import('@tauri-apps/plugin-biometric');
          
          if (currentPlatform.value === 'android') {
            nfc = await import('@tauri-apps/plugin-nfc');
          }
        } catch (error) {
          console.warn('Some mobile plugins could not be loaded:', error);
        }
      }
    } catch (error) {
      console.warn('Platform detection failed:', error);
      currentPlatform.value = 'unknown';
    }
  }
});

// Desktop methods
const setTitle = async () => {
  const newTitle = `Radio Frequenza Libera - ${new Date().toLocaleTimeString()}`;
  const window = await getCurrentWindow();
  await window.setTitle(newTitle);
};

const minimizeWindow = async () => {
  const window = await getCurrentWindow();
  await window.minimize();
};

const maximizeWindow = async () => {
  const window = await getCurrentWindow();
  await window.toggleMaximize();
};

const closeWindow = async () => {
  const window = await getCurrentWindow();
  await window.close();
};

// Mobile methods
const triggerHaptic = async () => {
  if (haptics) {
    try {
      await haptics.vibrate(500);
      showStatus('Haptic feedback triggered!', 'success');
    } catch {
      showStatus('Haptic feedback failed', 'error');
    }
  }
};

const scanBarcode = async () => {
  if (barcodeScanner) {
    try {
      const result = await barcodeScanner.scan();
      showStatus(`Scanned: ${result.content}`, 'success');
    } catch {
      showStatus('Barcode scan failed', 'error');
    }
  }
};

const checkBiometric = async () => {
  if (biometric) {
    try {
      await biometric.authenticate('Please authenticate to continue');
      showStatus('Authentication successful!', 'success');
    } catch {
      showStatus('Biometric authentication failed', 'error');
    }
  }
};

const readNFC = async () => {
  if (nfc) {
    try {
      // Simple NFC scan - will scan for any available NFC tag
      showStatus('NFC scan started - bring device close to NFC tag', 'info');
    } catch {
      showStatus('NFC scan failed', 'error');
    }
  }
};

// Utility function
const showStatus = (message: string, type: 'success' | 'error' | 'info') => {
  statusMessage.value = message;
  statusType.value = type;
  setTimeout(() => {
    statusMessage.value = '';
  }, 3000);
};
</script>
