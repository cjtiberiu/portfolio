$(document).ready(function() {

    let leftRender = false;

    var deviceWidth = $(window).width();

    const projects = [
        {
            id: 1,
            image: './assets/teamsgenerator.png',
            title: 'RANDOM TEAMS GENERATOR',
            language: 'Javascript',
            frameworks: [],
            db: '',
            type: 'Personal Project',
            description: 'Add players and generate random teams with multiple options. First javascript project.',
            tags: ['Add players', 'Multiple options', 'Generate Teams'],
            demo: 'http://rrandom.royalwebhosting.net/',
            github: 'https://github.com/cjtiberiu/randomPlayers',
            
        },
        {
            id: 2,
            image: './assets/budgetapp-frontend.png',
            title: 'JS - BUDGET APP',
            language: 'Javascript',
            frameworks: [],
            db: '',
            type: 'Personal Project',
            description: 'Add income and expenses. Local storage saved data.',
            tags: ['Javascript learning course project', 'Local Storage Save', 'Add income/expenses'],
            demo: 'https://cjtiberiu.github.io/budgetapp-frontend/',
            github: 'https://github.com/cjtiberiu/budgetapp-frontend',
            
        },
        {
            id: 3,
            image: './assets/unsplash.png',
            title: 'REACT - UNSPLASH IMAGES',
            language: 'Javascript',
            frameworks: ['ReactJS'],
            state: 'Component level state',
            db: 'UNSPLASH API',
            type: 'Personal Training Project',
            description: 'Search images using UNSPLASH API and save favourites to local storage',
            tags: ['React', 'Unsplash API', 'REST API', 'Local Storage Save', 'Dark Theme'],
            demo: 'https://unsplash-favourites.web.app/',
            github: 'https://github.com/cjtiberiu/unsplash-images',
            
        },
        {
            id: 4,
            image: './assets/clothing.png',
            title: 'REACT - CLOTHING STORE',
            language: 'Javascript',
            frameworks: ['ReactJS'],
            state: 'Redux w/ Redux-Saga',
            db: 'Firestore',
            type: 'Course Based Project',
            description: 'Firebase auth and storage, Redux-Saga, React ErrorBoundary, React Lazy + Suspense',
            tags: ['React', 'Express', 'Firebase', 'Firestore', 'Redux', 'Redux-Saga', 'React Lazy + Suspense', 'Error Boundary', 'Stripe', 'Responsive'],
            demo: '',
            github: 'https://github.com/cjtiberiu/clothing-shop',
            
        },
        {
            id: 5,
            image: './assets/reactnative.png',
            title: 'RN - Teams Generator',
            language: 'Javascript',
            frameworks: ['React Native'],
            state: 'Context API',
            type: 'Personal Training Project',
            description: 'Add players and generate random teams with multiple options. First RN project.',
            tags: ['React Native', ,'React Context', 'React Paper Design'],
            github: 'https://github.com/cjtiberiu/RN-randomPlayers',
            
        },
        {
            id: 6,
            image: './assets/gamespot.png',
            title: 'REACT - GAMES DB',
            language: 'Javascript',
            frameworks: ['ReactJS'],
            state: 'Context API',
            db: 'RAWG API',
            type: 'Personal Project',
            description: 'SPA made using RAWG API. Frontend filtering with multiple options.',
            tags: ['React', 'RAWG API', 'React Context', 'REST API', 'Frontend Filtering', 'Modal', 'Responsive'],
            demo: 'https://vgamesdb-11f0c.web.app/',
            github: 'https://github.com/cjtiberiu/gamespot',
            
        },
        {
            id: 7,
            image: './assets/budgetapp.png',
            title: 'MERN - BUDGET APP',
            language: 'Javascript',
            frameworks: ['ReactJS', 'Redux', 'Express.js'],
            state: 'Redux',
            db: 'Mongo DB',
            type: 'Personal Training Project',
            description: 'Fullstack project with authentication and CRUD operations. Add income and expenses in multiple currencies to control budget.',
            tags: ['React', 'Express', 'Redux', 'Redux-thunk', 'Authentication','MongoDB', 'Mongoose', 'REST API', 'DB Filtering', 'jsonwebtoken', 'React Date-Picker', 'Currency Exchange API', 'Axios', , 'Responsive', 'Styled Components', 'Bootstrap', 'Semantic UI'],
            demo: 'https://budgetapp0402.herokuapp.com/',
            github: 'https://github.com/cjtiberiu/budget-app',
            
        },
        {
            id: 8,
            image: './assets/ecomm.png',
            title: 'MERN - ECOMMERCE APP',
            language: 'Javascript',
            frameworks: ['ReactJS', 'Redux',  'Express.js'],
            state: 'Redux',
            db: 'MongoDB',
            type: 'Personal Project',
            description: 'MERN app with firebase auth and mongodb storage. Admin dashboard with CRUD operations',
            tags: ['React', 'Express', 'Redux', 'MongoDB', 'Mongoose', 'Firebase', 'Admin / User Dashboard', 'REST API', 'Admin CRUD operations', 'Client-side/Server-side protected routes', 'middlewares', 'error handling', 'Filtering', 'Cart functionality', 'Wishlist functionality', 'Cloudinary', 'Axios', 'React Image File Resizer', 'React Lazy + Suspense', 'Error Boundary', 'jsonwebtoken', 'Responsive', 'Styled Components', 'Bootstrap', 'Ant Design'],
            demo: 'https://ecommerce030221.herokuapp.com/',
            github: 'https://github.com/cjtiberiu/mern-ecommerce',
            
        },
        {
            id: 9,
            image: './assets/chatapp.png',
            title: 'CHAT APP',
            language: 'Javascript',
            frameworks: ['ReactJS', 'Redux',  'Express.js', 'Socket.io'],
            state: 'Redux',
            db: 'PostgreSQL',
            type: 'Personal Project',
            description: 'Simple chat app made using socket.io and PostgreSQL',
            tags: ['React', 'Express', 'Redux', 'PostgreSQL', 'Sequelize', 'username authentication', 'jsonwebtoken', 'REST API', 'CRUD operations', 'Client-side/Server-side protected routes', 'Client-side/Server-side separate deployment', 'Axios', 'socket.io events', 'middlewares', 'error handling', 'group chat functionality', 'Images server upload', 'responsive',],
            demo: 'https://chatapp-clientside.herokuapp.com/',
            github: 'https://github.com/cjtiberiu/chat-app',
            
        },
        
    ]

    const renderProject = (project) => {

        const html = `
        <div class='project' data-aos=${leftRender ? 'fade-up' : 'fade-up'}>
            <div class='container'>
                <div class='row'>
                
                ${leftRender ? (
                    `
                    <div class='project-image__container col-md-4'>
                        <img class='project-image w-100' src=${project.image} />
                        <div class='project-buttons__container d-flex justify-content-center mt-3'>
                            ${project.demo ? `<div class='project-button button-demo'><a href=${project.demo} target="_blank">DEMO</a></div>` : ''}
                            <div class='project-button button-github'><a href=${project.github} target="_blank">GITHUB</a></div>
                        </div>
                        
                    </div>
                    <div class='project-content col-md-8 d-flex flex-column'>
                        <div class='project-title'>${project.title}</div>
                        <div class='project-info'>
                            <span class='project-info__title'>Language:</span>
                            ${project.language}
                        </div>
                        ${project.frameworks.length > 0 ? (
                            `
                            <div class='project-info d-flex'>
                                <span class='project-info__title'>Main Frameworks/Libraries:</span>
                                <span class='project-info__details'>${project.frameworks.map(el => ` ${el}`)}</span>
                            </div>
                            `
                        ) : 'No frameworks/libraries used'}
                        
                        ${project.state ? (
                            `
                            <div class='project-info'>
                                <span class='project-info__title'>State Management:</span>
                                ${project.state}
                            </div>
                            `
                        ): ''}
                       
                        ${project.db ? (
                            `
                            <div class='project-info'>
                                <span class='project-info__title'>Database:</span>
                                ${project.db}
                            </div>
                            `
                        ): ''}
                    
                        <div class='project-tags d-flex flex-wrap justify-content-start mt-3'>
                            ${project.tags.map(el => {
                                return `<div class='tag badge badge-pill bg-secondary'>${el.toLowerCase()}</div>`
                            }).join('')}
                        </div>
                    </div>
                    `
                ) : (
                    `
                    <div class='project-content col-md-8 d-flex flex-column'>
                        <div class='project-title'>${project.title}</div>
                        <div class='project-info'>
                            <span class='project-info__title'>Language:</span>
                            ${project.language}
                        </div>
                        ${project.frameworks.length > 0 ? (
                            `
                            <div class='project-info d-flex'>
                                <span class='project-info__title'>Main Frameworks/Libraries: </span>
                                <span class='project-info__details'>${project.frameworks.map(el => ` ${el}`)}</span>
                            </div>
                            `
                        ) : 'No frameworks/libraries used'}
                        
                        ${project.state ? (
                            `
                            <div class='project-info'>
                                <span class='project-info__title'>State Management:</span>
                                ${project.state}
                            </div>
                            `
                        ): ''}
                       
                        ${project.db ? (
                            `
                            <div class='project-info'>
                                <span class='project-info__title'>Database:</span>
                                ${project.db}
                            </div>
                            `
                        ): ''}

                        <div class='project-tags d-flex flex-wrap justify-content-start mt-3'>
                            ${project.tags.map(el => {
                                return `<div class=' tag badge badge-pill bg-secondary'>${el.toLowerCase()}</div>`
                            }).join('')}
                        </div>
                    </div>
                    <div class='project-image__container col-md-4'>
                        <img class='project-image w-100' src=${project.image} />
                        <div class='project-buttons__container d-flex justify-content-center mt-3'>
                            ${project.demo ? `<div class='project-button button-demo'><a href=${project.demo} target="_blank">DEMO</a></div>` : ''}
                            <div class='project-button button-github'><a href=${project.github} target="_blank">GITHUB</a></div>
                        </div>
                        
                    </div>
                    `
                )}
                         
                </div> 
            </div>
        </div>`

        document.querySelector('.projects').insertAdjacentHTML('beforeend', html);
    }

    const renderMobileProject = (project) => {

        const html = `
        <div class='project' data-aos=${leftRender ? 'fade-up' : 'fade-up'}>
            <div class='container'>
                <div class='row'>
                    <div class='project-title col-md-12'>${project.title}</div>
                    <div class='project-image__container col-md-4 mt-1'>
                        <img class='project-image w-100' src=${project.image} />
                        
                    </div>
                    <div class='project-content col-md-7 d-flex flex-column mt-1'>
                        
                        <div class='project-info'>
                            <span class='project-info__title'>Language:</span>
                            ${project.language}
                        </div>
                        ${project.frameworks.length > 0 ? (
                            `
                            <div class='project-info d-flex flex-column'>
                                <span class='project-info__title'>Main Frameworks/Libraries:</span>
                                ${project.frameworks.map(el => ` ${el}`)}
                            </div>
                            `
                        ) : 'No frameworks used'}
                        
                        ${project.state ? (
                            `
                            <div class='project-info'>
                                <span class='project-info__title'>State Management:</span>
                                ${project.state}
                            </div>
                            `
                        ) : ''}
                       
                        ${project.db ? (
                            `
                            <div class='project-info'>
                                <span class='project-info__title'>Database:</span>
                                ${project.db}
                            </div>
                            `
                        ) : ''}

                        <div class='project-tags d-flex flex-wrap'>
                            ${project.tags.map(el => {
                                return `<div class=' tag badge badge-pill bg-secondary'>${el.toLowerCase()}</div>`
                            }).join('')}
                        </div>
                    </div>

                    <div class='col-md-12 project-buttons__container d-flex justify-content-center mt-3'>
                        ${project.demo ? `<div class='project-button button-demo'><a href=${project.demo} target="_blank">DEMO</a></div>` : ''}
                            <div class='project-button button-github'><a href=${project.github} target="_blank">GITHUB</a></div>
                        </div>
                         
                </div> 
            </div>
        </div>`

        document.querySelector('.projects').insertAdjacentHTML('beforeend', html);
    }

    projects.sort((a, b) => b.id - a.id).forEach(project => {
        leftRender = !leftRender;

        deviceWidth > 768 ? renderProject(project) : renderMobileProject(project);
    })

})