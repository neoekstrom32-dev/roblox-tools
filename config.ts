export interface Config {
    apiUrl: string;
    timeout: number;
    debugMode: boolean;
}

export const defaultConfig: Config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    debugMode: false,
};

export function loadConfig(configFile: string): Config {
    let configData;
    try {
        configData = require(configFile);
    } catch (error) {
        console.error('Could not load config:', error);
        return defaultConfig;
    }

    return {
        apiUrl: configData.apiUrl || defaultConfig.apiUrl,
        timeout: configData.timeout || defaultConfig.timeout,
        debugMode: configData.debugMode !== undefined ? configData.debugMode : defaultConfig.debugMode,
    };
}

export function validateConfig(config: Config): boolean {
    return typeof config.apiUrl === 'string' &&
           typeof config.timeout === 'number' &&
           typeof config.debugMode === 'boolean';
}
