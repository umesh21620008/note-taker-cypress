const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let notes = [
  { id: 1, title: 'Note 1', content: 'This is the first note' },
  { id: 2, title: 'Note 2', content: 'This is the second note' }
];

// Get all notes
app.get('/', (req, res) => {
  res.send("Hello");
});
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Get a specific note by ID
app.get('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find(note => note.id === noteId);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  res.json(note);
});

// Create a new note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const id = notes.length + 1;
  const newNote = { id, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Update a note
app.put('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const { title, content } = req.body;
  const noteIndex = notes.findIndex(note => note.id === noteId);
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  notes[noteIndex] = { id: noteId, title, content };
  res.json(notes[noteIndex]);
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const noteIndex = notes.findIndex(note => note.id === noteId);
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  notes.splice(noteIndex, 1);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app; // Export the app for testing
