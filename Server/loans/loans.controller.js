const express = require('express');
const router = express.Router();

router.post('/loans', create);
router.get('/loans', getAll);
router.get('loans/:id', getById);
router.put('loans/:id', update);
router.delete('loans/:id', _delete);

function create(req, res) {
    // Validate request
    console.log(req);
    if (!req.body.content) {
        return res.status(400).send({
            message: "Loan content can not be empty"
        });
    }

    // Create a Loan
    const loan = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // Save Note in the database
    loan.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while applying for the loan."
            });
        });
}