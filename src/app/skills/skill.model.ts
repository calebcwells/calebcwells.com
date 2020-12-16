export interface ISkill {
    type: string;
    image: string;
    title: string;
    fullUrl: string;
    friendlyUrl: string;
}

export const primarySkills: ISkill[] = [
    {
        type: 'Primary',
        image: './assets/images/skills/skill-dotnet.jpg',
        title: '.NET',
        fullUrl: 'https://www.microsoft.com/net',
        friendlyUrl: 'microsoft.com/net'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-angular.jpg',
        title: 'Angular',
        fullUrl: 'https://angular.io/',
        friendlyUrl: 'angular.io'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-typescript.jpg',
        title: 'TypeScript',
        fullUrl: 'https://www.typescriptlang.org/',
        friendlyUrl: 'typescriptlang.org'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-ps.jpg',
        title: 'Photoshop',
        fullUrl: 'https://www.adobe.com/products/photoshop.html',
        friendlyUrl: 'adobe.com/photoshop'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-rxjs.jpg',
        title: 'RxJS',
        fullUrl: 'https://reactivex.io/rxjs',
        friendlyUrl: 'reactivex.io/rxjs'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-webpack.jpg',
        title: 'Webpack',
        fullUrl: 'https://webpack.js.org',
        friendlyUrl: 'webpack.js.org'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-html5.jpg',
        title: 'HTML 5',
        fullUrl: 'https://www.w3.org/TR/html5/',
        friendlyUrl: 'w3.org/html5'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-css3.jpg',
        title: 'CSS 3',
        fullUrl: 'https://www.w3.org/TR/2014/REC-css-namespaces-3-20140320/',
        friendlyUrl: 'w3.org/css3'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-javascript.jpg',
        title: 'JavaScript',
        fullUrl: 'https://www.javascript.com/',
        friendlyUrl: 'javascript.com'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-json.jpg',
        title: 'JSON',
        fullUrl: 'https://www.json.org/',
        friendlyUrl: 'json.org'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-mdl.jpg',
        title: 'Material Design',
        fullUrl: 'https://material.io/',
        friendlyUrl: 'material.io'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-bootstrap.jpg',
        title: 'Bootstrap',
        fullUrl: 'https://getbootstrap.com/',
        friendlyUrl: 'getbootstrap.com'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-ef.jpg',
        title: 'Entity Framework',
        fullUrl: 'https://docs.microsoft.com/en-us/ef/',
        friendlyUrl: 'docs.microsoft.com/ef'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-sql.jpg',
        title: 'SQL',
        fullUrl: 'https://www.microsoft.com/en-us/sql-server/',
        friendlyUrl: 'microsoft.com/sql-server'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-npm.jpg',
        title: 'NPM',
        fullUrl: 'https://www.npmjs.com',
        friendlyUrl: 'npmjs.com'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-git.jpg',
        title: 'Git',
        fullUrl: 'https://git-scm.com/',
        friendlyUrl: 'git-scm.com'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-sourcetree.jpg',
        title: 'SourceTree',
        fullUrl: 'https://www.sourcetreeapp.com/',
        friendlyUrl: 'sourcetreeapp.com'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-github.jpg',
        title: 'Github',
        fullUrl: 'https://github.com/',
        friendlyUrl: 'github.com'
    },
    {
        type: 'Primary',
        image: './assets/images/skills/skill-azure.jpg',
        title: 'Azure',
        fullUrl: 'https://azure.microsoft.com/',
        friendlyUrl: 'azure.microsoft.com'
    }
];

export const secondarySkills: ISkill[] = [
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-xml.jpg',
        title: 'XML',
        fullUrl: 'https://www.w3.org/XML/',
        friendlyUrl: 'w3.org/XML'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-jquery.jpg',
        title: 'jQuery',
        fullUrl: 'https://jquery.com/',
        friendlyUrl: 'jquery.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-node.jpg',
        title: 'Node.js',
        fullUrl: 'https://nodejs.org/',
        friendlyUrl: 'nodejs.org'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-react.jpg',
        title: 'React',
        fullUrl: 'https://facebook.github.io/react/',
        friendlyUrl: 'facebook.github.io/react'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-aurelia.jpg',
        title: 'Aurelia',
        fullUrl: 'https://aurelia.io/',
        friendlyUrl: 'aurelia.io'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-breeze.jpg',
        title: 'Breeze',
        fullUrl: 'https://www.getbreezenow.com/',
        friendlyUrl: 'getbreezenow.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-flux.jpg',
        title: 'Flux',
        fullUrl: 'https://facebook.github.io/flux/',
        friendlyUrl: 'facebook.github.io/flux'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-knockout.jpg',
        title: 'Knockout',
        fullUrl: 'https://knockoutjs.com/',
        friendlyUrl: 'knockoutjs.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-less.jpg',
        title: 'Less',
        fullUrl: 'https://lesscss.org/',
        friendlyUrl: 'lesscss.org'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-sass.jpg',
        title: 'Sass',
        fullUrl: 'https://sass-lang.com/',
        friendlyUrl: 'sass-lang.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-aws.jpg',
        title: 'AWS',
        fullUrl: 'https://aws.amazon.com/',
        friendlyUrl: 'aws.amazon.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-docker.jpg',
        title: 'Docker',
        fullUrl: 'https://www.docker.com/',
        friendlyUrl: 'docker.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-bower.jpg',
        title: 'Bower',
        fullUrl: 'https://bower.io/',
        friendlyUrl: 'bower.io'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-gulp.jpg',
        title: 'Gulp',
        fullUrl: 'https://gulpjs.com/',
        friendlyUrl: 'gulpjs.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-jira.jpg',
        title: 'JIRA',
        fullUrl: 'https://www.atlassian.com/software/jira/',
        friendlyUrl: 'atlassian.com/jira'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-bitbucket.jpg',
        title: 'Bitbucket',
        fullUrl: 'https://www.atlassian.com/software/bitbucket/',
        friendlyUrl: 'atlassian.com/bitbucket'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-apache.jpg',
        title: 'Apache',
        fullUrl: 'https://www.apache.org/',
        friendlyUrl: 'apache.org'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-mysql.jpg',
        title: 'MySQL',
        fullUrl: 'https://www.mysql.com/',
        friendlyUrl: 'mysql.com'
    },
    {
        type: 'Secondary',
        image: './assets/images/skills/skill-nhibernate.jpg',
        title: 'NHibernate',
        fullUrl: 'https://nhibernate.info/',
        friendlyUrl: 'nhibernate.info'
    }
];
