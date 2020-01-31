import { InjectionToken } from '@angular/core';

export interface AppLogger {
  logs: string[];
  log: (value: string) => void;
}

export const silentLogger: AppLogger = {
  logs: ['Silent logger says "Shhhhh!". Provided via "useValue"'],
  log: (value: string) => console.log(value)
};

// Create InjectionToken to be used in provider
export const SilentLogger = new InjectionToken<AppLogger>('value-provider', {
  factory: (): AppLogger => this.silentLogger
});
