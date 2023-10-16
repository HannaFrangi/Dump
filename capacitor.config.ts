import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Frangi.Dior',
  appName: 'Dior',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    PrivacyScreen: {
      enable: true,
      imageName: "Splashscreen",
  },
  PushNotifications: {
    presentationOptions: ["badge", "sound", "alert"],
  },
},
}

export default config;
