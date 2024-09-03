const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://dbAdama:dbAdamaPassword@adamaschoolcluster.wi99g.mongodb.net/AdamaSchoolCluster?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB for Private Schools'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Private School Schema
const privateSchoolSchema = new mongoose.Schema({
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

// Private School model
const PrivateSchool = mongoose.model('PrivateSchool', privateSchoolSchema);

// API to get all private schools
app.get('/privateSchools', async (req, res) => {
    try {
        const privateSchools = await PrivateSchool.find();
        res.json(privateSchools);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch private schools' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Private Schools server running on port ${PORT}`);
});
