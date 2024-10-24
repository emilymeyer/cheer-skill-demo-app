exports.config = {
    tests: './tests/Test_*.js',
    output: 'reports',
    helpers: {
        Puppeteer: {
            url: 'http://localhost:8080',
            show: true,
            windowSize: '1200x900',

        }
    },
    include: {
        I: './steps_file.js',
        athleteForm: './pages/AthleteForm.js'
    },
    name: 'ui_tests'
}