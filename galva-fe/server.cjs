const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Change this to the desired port if needed

// Serve the static files from the dist directory
app.use(express.static(path.join(__dirname, '/home/azureuser/frontend/galava-ui/dist')));

// Route all requests to the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/home/azureuser/frontend/galava-ui/dist/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
