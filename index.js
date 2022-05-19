//@ts-check

const { LEVEL_0_ID, LEVELS } = require('./levels');
const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');

const port = Number(process.argv[2]);
const DEV_MODE = !!process.argv[3];

const app = express();
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cookieParser());


function getLevelFromId(id) {
    for (let i = 0; i < LEVELS.length; i++) {
        for (let j = 0; j < LEVELS[i].programs.length; j++) {
            if (LEVELS[i].programs[j].key == id) {
                return [i, j];
            }
        }
    }

    return [0, 0];
}

app.get('/', async (req, res, next) => {
    res.redirect(`/${LEVEL_0_ID}`);
});

app.get('/:id', async (req, res, next) => {
    try {
        const [level, subLevel] = getLevelFromId(req.params.id);

        const warn = !!req.cookies['warn'];
        res.clearCookie('warn');

        res.render('template', {
            level,
            sample: LEVELS[level].sample,
            program: LEVELS[level].programs[subLevel].program,
            warn,
        });
    } catch (e) {
        if (DEV_MODE) {
            // Respond with the error/stack trace for debugging
            next(e);
        } else {
            console.error(e);
            res.send(`unexpected error`);
        }
    }
});

app.post('/:id', async (req, res, next) => {
    try {
        const [level, subLevel] = getLevelFromId(req.params.id);
        const code = `${req.body.code}`;

        if (LEVELS[level].programs[subLevel].answers.includes(code.toLowerCase())) {
            const nextLevel = LEVELS[level + 1];
            if (!nextLevel) {
                // They completed all the puzzles! Hurrah!
                return res.render('completed');
            } else {
                const nextLevelId = nextLevel.programs[Math.floor(Math.random() * nextLevel.programs.length)].key;
                return res.redirect(`/${nextLevelId}`);
            }
        } else {
            res.cookie('warn', true);
            res.redirect(`/${req.params.id}`);
        }
    } catch (e) {
        if (DEV_MODE) {
            console.error(e);
            res.send(`unexpected error`);
        } else {
            next(e);
        }
    }
});

if (DEV_MODE) {
    app.get('/solution/:id', async (req, res, next) => {
        res.render('solution', { program: LEVELS[req.params.id].sample })
    });
}

app.listen(port, () => {
    console.log(`Started server at http://localhost:${port}`)
});