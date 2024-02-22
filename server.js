const express = require('express');
const Datastore = require('nedb');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const db = new Datastore({ filename: 'database/books.db', autoload: true });

app.use(bodyParser.json());
app.use(express.static('public'));

// Populate the database with some books
db.remove({}, { multi: true });

db.insert([
    { title: 'Computer Architecture: A Quantitative Approach', author: 'John L. Hennessy, David A Patterson' },
    { title: 'Design of Analog CMOS Integrated Circuits', author: 'Behzad Razavi' },
    { title: 'Low Power Design Essentials', author: 'Jan M. Rabaey'},
]);

// API routes
app.get('/api/books', (req, res) => {
    db.find({}, (err, docs) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(docs);
        }
    });
});

app.post('/api/books', (req, res) => {
    db.insert(req.body, (err, newDoc) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(newDoc);
        }
    });
});

app.delete('/api/books/:id', (req, res) => {
    db.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ removed: numRemoved });
        }
    });
});

app.put('/api/books/:id', (req, res) => {
    db.update({ _id: req.params.id }, req.body, {}, (err, numReplaced) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ replaced: numReplaced });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
