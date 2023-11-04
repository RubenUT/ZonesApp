import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zonasarq.app',
  appName: 'ZonasApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
