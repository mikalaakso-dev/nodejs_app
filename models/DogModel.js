// DogModel.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

class DogModel {
    static async findAll() {
        console.log('Fetching all dogs from Supabase'); // Log when method is called
        const { data, error } = await supabase
            .from('dogs')
            .select('*');
        
        if (error) {
            console.error('Error fetching dogs:', error); // Log if there's an error
            throw error;
        }

        console.log('Dogs fetched:', data); // Log the fetched data
        return data;
    }

    // Add similar logging for other methods as needed...
}

module.exports = DogModel;
