export default defineNuxtPlugin(() => {
  // Only run on client side and when in Tauri context
  if (typeof window !== 'undefined' && '__TAURI__' in window) {
    console.log('Tauri environment detected');
    
    // Disable Vue devtools in Tauri environment to prevent conflicts

    
    // You can add Tauri-specific initialization here
    // For example, setting up event listeners, custom window controls, etc.
  }
});
