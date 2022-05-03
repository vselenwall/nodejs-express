import express from 'express';
const router = express.Router();

let obj = {user: "Flisa Hedenhös", navigationLinks: ["Start", "About", "Contact"], page: "start"};

router.route('/')
.get((req, res) => {
    res.render('index', obj);
});

export default router;