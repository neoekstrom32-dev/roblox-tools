import fs from 'fs';

interface Config {
  apiUrl: string;
  port: number;
  env: string;
}

const defaultConfig: Config = {
  apiUrl: 'https://api.example.com',
  port: 3000,
  env: 'development',
};

const loadConfig = (filepath: string): Config => {
  try {
    const data = fs.readFileSync(filepath, 'utf8');
    const parsedConfig = JSON.parse(data);
    return { ...defaultConfig, ...parsedConfig };
  } catch (error) {
    console.error('Error loading config:', error);
    return defaultConfig;
  }
};

export { loadConfig, Config };