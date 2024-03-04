const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const movie = express();

movie.use(cors());

const USER_AGENT ="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36";

movie.get('/movie/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const movieurl = `https://123movies.org.mx/movie/${id}/watching.html`;
        const moviereq = await axios.get(movieurl, {
            headers: {
                'User-Agent': USER_AGENT,
            }
        });
        const movieres = moviereq.data;

        const $ = cheerio.load(movieres);

        const moviez = [];

        $('.card.border-0.mb-3.shadow').each((index, element) => {
            const name = $(element).find('.card-title.fs-4').text() || null;
            const desc = $(element).find('.fst-italic.lh-sm.mb-2').text() || null;
            const genre = $(element).find('.row .mb-1:first').text().replace(/\n/g, '').split('Genre:')[1].trim() || null;
            const actors = $(element).find('.row .mb-1:eq(1)').text().replace(/\n/g, '').split('Actor:')[1].trim() || null;
            const director = $(element).find('.row .mb-1:eq(2)').text().replace(/\n/g, '') || null;
            const country = $(element).find('.row .mb-1:eq(3)').text().replace(/\n/g, '') || null;
            const type = $(element).find('.row .mb-1:eq(4)').text().replace(/\n/g, '') || null;
            const releas = $(element).find('.row .mb-1:eq(5)').text().replace(/\n/g, '') || null;
            const imdbRating = $(element).find('.row .mb-1:eq(6)').text().replace(/\n/g, '') || null;
            const keywords = $(element).find('.card-footer.border-0.tags').text().replace(/\n/g, '').split('Keyword:')[1] || null;
            const bigbanner = $(element).find('.col-12.col-lg-2.d-none.d-lg-block img').attr('data-src') || null;
            const id = $(element).find('#mid a').attr('onclick') || null;

            moviez.push({ name, desc, genre, actors, director, country, type, releas, imdbRating, keywords, bigbanner, id });
        });

        const stp = $('script:eq(1)').text().replace(/\n/g, '') || null;

        const themovieid = stp.match(/var movieId = '([^']+)'/);
        const thevid = stp.match(/iframe\.src\s*=\s*'([^']+)'/);
        const tep = $('.card.border-0.mb-3.shadow').find('.row .mb-1:eq(3)').text().match(/Episode:\s*(\d+)/);
        const epl = tep ? parseInt(tep[1], 10) : 1;
        const theid = themovieid ? themovieid[1] : null;
        const thevideoid = thevid && theid ? thevid[1] + theid : null;

        var tthetv;
        if (movieurl.includes('-season-')) {
            const season = id.split('-season-')[1].split('/')[0];
            tthetv = thevideoid ? `${thevideoid}&sea=${season}&epi=${epl}` : null;

            var thepvt = [];
            if (thevideoid) {
                for (var i = 1; i <= epl; i++) {
                    thepvt.push(`${thevideoid}&sea=${season}&epi=${i}`);
                }
            }
        }
        else{
            tthetv = thevideoid;
        }

        const youMAYlike = [];

        $('.card.border-0.mb-3').find('.col').each(( index, element )=>{
            const name = $(element).find('.card.border-0.shadow img').attr('data-src') || null;
            const type = $(element).find('.card-body.item-title h2').text() || null;
            const img = $(element).find('.mlbq').text().toUpperCase() || null;
            const id = $(element).find('.card.border-0.shadow a').attr('href').split('https://123movies.org.mx/movie/')[1] || null;

            youMAYlike.push({ name, type, img, id});
        })

        res.status(200).json({ moviez, theid, tthetv, thepvt, youMAYlike });
    } catch (error) {
        console.log('errorrrr', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = movie;
