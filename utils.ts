export function validateInput(input: any): boolean {
    if (typeof input !== 'string') return false;
    if (input.trim() === '') return false;
    return true;
}

export function processInput(input: string): string {
    if (!validateInput(input)) {
        throw new Error('Invalid input');
    }
    return input.toLowerCase().trim();
}

export function mainLoop(inputs: string[]): void {
    for (const input of inputs) {
        try {
            const validInput = processInput(input);
            // Process the valid input here
            console.log(`Processed: ${validInput}`);
        } catch (error) {
            console.error(error.message);
        }
    }
}