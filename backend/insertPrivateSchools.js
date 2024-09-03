const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://dbAdama:dbAdamaPassword@adamaschoolcluster.wi99g.mongodb.net/?retryWrites=true&w=majority&appName=AdamaSchoolCluster';  // replace with your MongoDB URL
const dbName = 'AdamaSchoolCluster';  // replace with your database name
const collectionName = 'schools2';  // replace with your collection name

const client = new MongoClient(url, { useUnifiedTopology: true });
const schools2 = [
  { 
    name: 'Makkobili School', 
    location: 'Adama', 
    payment: 2500, 
    img: '.././photos/Makkobili School 1.jpg', 
    latitude: '8.558909297325568', 
    longitude: '39.26345264015705', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 25,
    female: 240,
    male: 220
  },
  { 
    name: 'Dabe Artu KG And Primary School', 
    location: 'Adama', 
    payment: 2250, 
    img: '.././photos/Dabe Artu KG And Primary School1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 30,
    female: 230,
    male: 230
  },
  { 
    name: 'NAFYAD School (Main Campus)', 
    location: 'Adama', 
    payment: 2500, 
    img: '.././photos/NAFYAD School (Main Campus)1.jpg', 
    latitude: '8.537412', 
    longitude: '39.26454', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 28,
    female: 250,
    male: 210
  },
  { 
    name: 'Kegna Academy', 
    location: 'Adama', 
    payment: 2400, 
    img: '.././photos/Kegna Academy1.jpg', 
    latitude: '8.544949686359889', 
    longitude: '39.282319240225384', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 32,
    female: 260,
    male: 200
  },
  { 
    name: 'Hollyseviour School', 
    location: 'Adama', 
    payment: 2300, 
    img: '.././photos/Hollyseviour school1.jpg', 
    latitude: '8.561970076898413', 
    longitude: '39.268903224814345', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 27,
    female: 245,
    male: 215
  },
  { 
    name: 'Chilalo School', 
    location: 'Adama', 
    payment: 2100, 
    img: '.././photos/Chilalo School1.jpg', 
    latitude: '7.950654113360877', 
    longitude: '39.13368788666927', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 22,
    female: 220,
    male: 240
  },
  { 
    name: 'Dana Atsede Hitsanat School', 
    location: 'Adama', 
    payment: 2400, 
    img: '.././photos/Dana Atsede hitsanat School 1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 29,
    female: 235,
    male: 225
  },
  { 
    name: 'Arsema Youth Academy', 
    location: 'Adama', 
    payment: 2600, 
    img: '.././photos/Arsema Youth Academy1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 31,
    female: 245,
    male: 215
  },
  { 
    name: 'Wonderland Academy', 
    location: 'Adama', 
    payment: 2200, 
    img: '.././photos/Wonderland academy1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 26,
    female: 240,
    male: 220
  },
  { 
    name: 'Hagotel School ', 
    location: 'Adama', 
    payment: 2000, 
    img: '.././photos/Hagotel School1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 24,
    female: 230,
    male: 230
  },
  { 
    name: 'Abdi Boru Primary and Secondary School', 
    location: 'Adama', 
    payment: 2200, 
    img: '.././photos/Abdi Boru Primary and Secondary School1.jpg', 
    latitude: '8.561751476984966', 
    longitude: '39.26464944022531', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 30,
    female: 250,
    male: 210
  },
  { 
    name: 'Akbar School', 
    location: 'Adama', 
    payment: 2000, 
    img: '.././photos/Akbar school1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 23,
    female: 235,
    male: 225
  },
  { 
    name: 'Wise Adama Yuuz Academy', 
    location: 'Adama', 
    payment: 2300, 
    img: '.././photos/Wise Adama Yuuz academy1.jpg', 
    latitude: '8.564277175574079', 
    longitude: '39.26588501324163', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 27,
    female: 240,
    male: 220
  },
  { 
    name: 'Kamara School ', 
    location: 'Adama', 
    payment: 2100, 
    img: '.././photos/Kamara School 6.jpg', 
    latitude: '8.562035151008509', 
    longitude: '39.29603954207762', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 26,
    female: 245,
    male: 215
  },
  { 
    name: 'Hill Top Academy', 
    location: 'Adama', 
    payment: 2400, 
    img: '.././photos/Hill Top Academy1.jpg', 
    latitude: '9.017515093164981', 
    longitude: '38.73396842303185', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 30,
    female: 250,
    male: 210
  },
  { 
    name: 'Barnabas School', 
    location: 'Adama', 
    payment: 2600, 
    img: '.././photos/Barnabas School1.jpg', 
    latitude: '8.573484279379961', 
    longitude: '39.26773812117688', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 35,
    female: 260,
    male: 200
  }
];


async function insertSchools() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(schools2);
    console.log(`${result.insertedCount} schools inserted`);
  } finally {
    await client.close();
  }
}

insertSchools().catch(console.error);
