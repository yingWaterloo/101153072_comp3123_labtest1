const fs = require('fs');
const path = require('path');

// Define the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
} else {
    console.log('Logs directory already exists.');
}

// Change the current working directory to Logs
process.chdir(logsDir);
//console.log(`Current working directory changed to: ${process.cwd()}`);

// Create 10 log files and write content
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const content = `This is log file number ${i}\nGenerated on: ${new Date().toISOString()}`;

    fs.writeFileSync(fileName, content);
    console.log(`${fileName}`);
}
