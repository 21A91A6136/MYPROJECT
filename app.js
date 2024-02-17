import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import ContactRoutes from './ContactRoutes'


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (replace 'your_connection_string' with your actual connection string)
mongoose.connect('mongodb+srv://siddahyndavi:KqdI7SJgMFVoqmgE@cluster0.k6db7gi.mongodb.net/sample1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Image URLs array (replace with your actual image URLs)
const imageUrls = [
  'https://quotefancy.com/media/wallpaper/3840x2160/50568-Daniel-J-Boorstin-Quote-Education-is-learning-what-you-didn-t-even.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WugEKoFVOUfLieOpQaonVqsGH46skBJEAA&usqp=CAU',
  // Add more image URLs as needed
];

// API endpoint to get image URLs
app.get('/images', (req, res) => {
  res.json(imageUrls);
});

// MongoDB model for user registration
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
  });
  
  // Create User model
  const User = mongoose.model('User', userSchema);
  
  // Routes
  app.post('/register', async (req, res) => {
    try {
      // Validate and save user registration data to MongoDB
      const newUser = new User(req.body);
      await newUser.save();
      res.json({ message: 'Registration successful!' });
    } catch (error) {
      console.error('Error registering:', error);
      res.status(500).json({ message: 'Registration failed.' });
    }
  });
  
  app.post('/login', async (req, res) => {
    try {
      // Validate user login data by checking against MongoDB
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      if (user) {
        res.json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid credentials.' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Login failed.' });
    }
  });
  // Start server
  app.use(ContactRoutes);
  app.listen(PORT, () => console.log(`Server running on port ${5000}`));
//KqdI7SJgMFVoqmgE