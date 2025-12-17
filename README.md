# Fruits Frontend

A small learning frontend that fetches fruit data from a Django backend running on a Raspberry Pi and renders it in the browser.

## Goal

Practice:

- fetch() / async-await
- JSON handling
- error handling
- working against a remote backend (real client–server setup)

## Prerequisites

- Backend running on the Raspberry Pi (reachable in LAN)
- A local web server for this frontend (recommended: VS Code Live Server)

## Backend API URL

The frontend fetches from:

http://192.168.0.96:8000/fruits/

(Replace the IP if your Raspberry Pi address changes.)

## Run the Frontend (Recommended)

### VS Code Live Server

1. Open the frontend project in VS Code
2. Open index.html
3. Start “Live Server”
4. The page usually opens at:
   http://127.0.0.1:5500

## Configuration

If your code uses a constant, it typically looks like:

const API_URL = "http://192.168.0.96:8000/fruits/";

## Troubleshooting

### CORS Policy Errors

If the browser console shows a CORS error:

- Enable/adjust CORS in the backend (django-cors-headers)
- Ensure these are allowed in the backend:
  http://127.0.0.1:5500
  http://localhost:5500

### No Data / Network Errors

- Check the backend is running:
  http://192.168.0.96:8000/fruits/
- Verify the Raspberry Pi IP address
- Ensure both devices are in the same network

## Notes

- 0.0.0.0 is not a valid browser URL (server bind address only)
- This is a learning project focused on clarity and basics

License: Private learning project.
