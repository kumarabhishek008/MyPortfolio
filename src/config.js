// config.js
module.exports = {
    github: {
        username: 'KumarAbhishek008', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'Abhishek Kumar',
        twitter: 'Abhishek Kumar',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://github.com/kumarabhishek008',
        phone: '',
        email: 'kumar008abhishek@gmail.com'
    },
    skills: [
        'React.js',
        'Node.js',
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'Bootstrap',
        'Material Ui',
        'Sementic Ui',
        'Git',
        'Redux-Saga',
        'Webpack',
        'Grapes Js',
        'Python',
        'Django',
        'Jquery',
        'PHP',
        'Laravel',
        'MySQL',
        'Tailwind',
    ],
    experiences: [
        { 
            company: 'HSV Media Pvt Ltd',
            position: 'Software Engineer',
            from: 'September 2020',
            to: 'Present'
        },
        { 
            company: 'Urjasoft pvt ltd',
            position: 'Jr. Full Stack Engineer',
            from: 'January 2018',
            to: 'March 2020'
        },
    ],
    education: [
        { 
            institution: 'ABES Institue of technology',
            degree: 'Bachelor of Technology',
            from: '2012',
            to: '2016'
        },
    ],
    // blog: {
    //     // Display blog posts from your medium or dev.to account. (Optional)
    //     source: 'dev.to', // medium | dev.to
    //     username: 'arifszn',
    //     limit: 2 // How many posts to display. Max is 10.
    // },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-0TS20NZNVT' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
