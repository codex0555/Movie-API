const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const genra = express();
genra.use(cors());

const USER_AGENT ="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36";

genra.get('/genra/:l/:page', async ( req, res )=>{
    try {
        const l = req.params.l;
        var page = req.params.page || 1;
        const movieurl = `https://proxy.techzbots1.workers.dev/?u=https://123movies.org.mx/genre/${l}/page/${page}`;
        const moviereq = await axios.get(movieurl, {
            headers: {
                'User-Agent': USER_AGENT,
            }
        });
        const movieres = moviereq.data;

        const $ = cheerio.load(movieres);

        const genram = [];

        const pnex = $('.pagination.justify-content-center.m-0').find('.page-item:last').text().replace(/\n/g,'') || null;

        const searchk = $('fs-6.list-title').text() || null;

        $('.row.list-movie.g-3:first').find('.col').each(( index, element )=>{
            const name = $(element).find('.card.border-0.shadow img').attr('data-src') || null;
            const type = $(element).find('.card-body.item-title h2').text() || null;
            const img = $(element).find('.mlbq').text().toUpperCase() || $(element).find('.mlbe').text().toUpperCase();
            const id = $(element).find('.card.border-0.shadow a').attr('href').split('https://123movies.org.mx/movie/')[1] || null;

            genram.push({ name, type, img, id});
        })


        res.status(200).json({ pnex, genram, searchk});
    } catch (error) {
        res.status(400).send("error 400");
        console.log("errorrr",error);
    }
})


module.exports = genra;
