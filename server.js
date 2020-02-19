const express = require('express'); // gets the express server up & running

const app = express(); // adds the express to the app variable

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000; // this is an environment set to PORT variable

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
