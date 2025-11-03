const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 720,
    maxWidth: 1000,
    maxHeight: 720,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false, 
    },
    closable: true 
  });
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);