require('dotenv').config(); // This loads the environment variables from the .env file

const express = require('express');
const dogRoutes = require('./routes/dogRoutes');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT from the .env file if it exists, otherwise default to 3000
const { createClient } = require('@supabase/supabase-js');

const cors = require('cors');


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());
// Use the dog routes with '/dogs' prefix
app.use('/dogs', dogRoutes);

async function fetchDogs() {
    const { data, error } = await supabase
      .from('dogs')
      .select('*');
  
    if (error) console.error('Error fetching dogs:', error);
    else console.log('Dogs:', data);
  }
  
  // Call the function to test it
  fetchDogs();
  
app.get('/', (req, res) => {
  res.send('Welcome to Dog Social Network!');
});

app.listen(port, () => {
  console.log(`Dog Social Network app listening at http://localhost:${port}`);
});
