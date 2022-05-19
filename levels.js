//@ts-check

const LEVEL_0_ID = '0dce7c2a-58e9-4292-b274-61a6e9d9e0c6';
const LEVELS = [
    {
        sample: `T-90M181DT240M144T-60M290T-120M144T-60M290UHT55M216DT-145M140T240M143T-60M67T-90M125U`,
        programs: [
            {
                key: LEVEL_0_ID,
                program: `DT-45M50T90M25T45M35T45M25T90M50UT90M50T135DM70UHDT-20M36T5M20UT180M20T-130DM23UHDT20M36T-50M22UT180M22T-135DM20`,
                answers: ['diamond', 'gem', 'jewel'],
            },
        ]
    },
    {
        sample: `T-90M181DT240M144T-60M290T-120M144T-60M290UHT55M216DT-145M140T240M143T-60M67T-90M125U`,
        programs: [
            {
                key: 'cf337786-d5f7-4cef-b3c5-545b0f944447',
                program: `LEVEL1_0`,
                answers: ['diamond', 'gem', 'jewel'],
            },
            {
                key: 'cdb242f2-7b08-4234-bbd3-0167aa6a7f06',
                program: `LEVEL1_1`,
                answers: ['diamond', 'gem', 'jewel'],
            },
        ]
    },
    {
        sample: `T-90M181DT240M144T-60M290T-120M144T-60M290UHT55M216DT-145M140T240M143T-60M67T-90M125U`,
        programs: [
            {
                key: 'bae98e62-fc0d-4869-b29a-931bce54ccc1',
                program: `LEVEL2_0`,
                answers: ['diamond', 'gem', 'jewel'],
            },
            {
                key: '223be657-a3d8-43cf-9df3-53a80dcadcfe',
                program: `LEVEL2_1`,
                answers: ['diamond', 'gem', 'jewel'],
            },
        ]
    },
];

module.exports = {
    LEVEL_0_ID, LEVELS
}