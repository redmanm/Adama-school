const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://dbAdama:dbAdamaPassword@adamaschoolcluster.wi99g.mongodb.net/AdamaSchoolCluster?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// School Schema
const schoolSchema = new mongoose.Schema({
    name: String,
    location: String,
    students: Number,
    female: Number,
    male: Number,
    teachers: Number,
    staff: Number,
    buildYear: Number,
    img: String,
    latitude: String,
    longitude: String,
    description: String
});

// Private School Schema
const school2Schema = new mongoose.Schema({
    name: String,
    location: String,
    payment: Number, 
    img: String,
    latitude: String,
    longitude: String,
    description: String,
    students: Number,
    buildYear: Number,
    staff: Number,
    female: Number,
    male: Number
});

// School model
const School = mongoose.model('School', schoolSchema);

// Private School model
const School2 = mongoose.model('School2', school2Schema);

// API to get all schools
app.get('/schools', async (req, res) => {
    try {
        const schools = await School.find();
        res.json(schools);
    } catch (error) {
        console.error('Error fetching schools:', error);
        res.status(500).json({ error: 'Failed to fetch schools' });
    }
});

// API to get all private schools
app.get('/schools2', async (req, res) => {
    try {
        const schools2 = await School2.find(); // Correct naming of schools2
        res.json(schools2);
    } catch (error) {
        console.error('Error fetching private schools:', error);
        res.status(500).json({ error: 'Failed to fetch private schools' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
