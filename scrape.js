const Scraper = require('./index');
const {question} = require('readline-sync');
const download = require('image-downloader');

const scraper = new Scraper(question('What is the url you want to scrape?'));

scraper.scrape((image) => {

    const ig = image.attributes['data-src'];


    if(ig) {
        const options = {
            url: ig,
            dest: `${process.cwd()}/downloads`
        }

        download.image(options).then(({filename, image}) => console.log(`Saved ${filename}`))
    }


});

