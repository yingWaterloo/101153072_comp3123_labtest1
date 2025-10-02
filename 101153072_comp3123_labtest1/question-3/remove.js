const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logsDir)) {
    console.log(`Logs directory found at: ${logsDir}`);
    
    // Read all files in Logs directory
    const files = fs.readdirSync(logsDir);

    // Output file names and delete them
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`delete files...${file}`);
        fs.unlinkSync(filePath); // Delete file
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
