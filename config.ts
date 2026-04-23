import * as fs from 'fs';
import * as path from 'path';

type Config = {  
    setting1: string;  
    setting2: number;  
    setting3: boolean;  
};

const defaultConfig: Config = {  
    setting1: 'defaultValue',  
    setting2: 10,  
    setting3: true,  
};

function loadConfig(filePath: string): Config {  
    if (!fs.existsSync(filePath)) {  
        return defaultConfig;  
    }  
    const content = fs.readFileSync(filePath, 'utf-8');  
    try {  
        const userConfig: Partial<Config> = JSON.parse(content);  
        return { ...defaultConfig, ...userConfig };  
    } catch {  
        return defaultConfig;  
    }  
}

export { loadConfig, Config };