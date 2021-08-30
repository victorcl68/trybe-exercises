const router = require('express').Router();

const { readContentFile, writeContentFile} = require('./readWriteFile');
const validations = require('./validations');

router.get('/', async(_req, res) => {
    const teams = await readContentFile('./teams.json') || [];
    res.status(200).json({ teams });
});

router.post('/', validations.isValid, async(req, res,) => {
    const newTeam = {...req.body, initials: req.body.initials.toUpperCase()};
    const team = await writeContentFile('./teams.json', newTeam);
    res.status(200).json(team);
});

module.exports = router;
