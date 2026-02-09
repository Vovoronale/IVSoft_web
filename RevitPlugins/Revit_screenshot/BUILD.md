# Build Instructions — RevitScreenshot

## Prerequisites

1. **.NET SDK 8.0+** — Download from https://dotnet.microsoft.com/download/dotnet/8.0
2. **.NET Framework 4.8 Developer Pack** — Download from https://dotnet.microsoft.com/download/dotnet-framework/net48

## Build

```bash
# Restore packages and build for both targets
dotnet build src\RevitScreenshot\RevitScreenshot.csproj -c Release -p:Platform=x64
```

Output DLLs:
- `src\RevitScreenshot\bin\x64\Release\net48\RevitScreenshot.dll` — for Revit 2024
- `src\RevitScreenshot\bin\x64\Release\net8.0-windows\RevitScreenshot.dll` — for Revit 2025/2026

## Install

### Revit 2024
1. Copy `net48\RevitScreenshot.dll` to a folder (e.g., `C:\RevitPlugins\RevitScreenshot\`)
2. Copy `Install\RevitScreenshot2024.addin` to `%AppData%\Autodesk\Revit\Addins\2024\`
3. Edit the `.addin` file: update `<Assembly>` path to the full DLL path

### Revit 2025/2026
1. Copy `net8.0-windows\RevitScreenshot.dll` to a folder (e.g., `C:\RevitPlugins\RevitScreenshot\`)
2. Copy `Install\RevitScreenshot2026.addin` to `%AppData%\Autodesk\Revit\Addins\2026\`
3. Edit the `.addin` file: update `<Assembly>` path to the full DLL path

## Usage

1. Open Revit — look for the **RevitScreenshot** tab in the ribbon
2. Click **Settings** to configure output folder, target view, and capture options
3. Click **Auto Capture (OFF)** to enable automatic screenshots
4. Work on the model — screenshots are saved automatically
5. Click **Screenshot** for a manual one-time capture
