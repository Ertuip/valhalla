const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    maxWidth: 800,
    maxHeight: 600
  });

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
