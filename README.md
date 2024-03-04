# Movie-API



## Getting Started

To get started, you can use the following endpoints:

### 1. Fetch Home Page Data

**Endpoint:** `https://aniwatch-api-v1-0.onrender.com/api/parse`

**Request Sample:**
```javascript
const resp = await fetch("https://aniwatch-api-v1-0.onrender.com/api/parse");
const data = await resp.json();
console.log(data);
```

**Response Sample:**
```
{
"suggestionhomeMovie": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/vkJE484VnRdilB9IgKNly7HIifR.jpg",
"type": "Saltburn",
"img": "HD",
"id": "saltburn/"
},
],
"latest": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/3S9u9oMFEwvzt1OGSv9PBowzmiD.jpg",
"type": "AÅ›oka",
"img": "HD",
"id": "aoka-2001/"
},
],
"tv": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/a2Ckhf72DfQKRNZpeECxyrqaIV3.jpg",
"type": "The Mire Season 2",
"img": "Eps 6",
"id": "the-mire-season-2/"
},
]
}
```

### `GET` Search Movie 

#### Endpoint

```sh
https://aniwatch-api-v1-0.onrender.com/api/search/${query_parameter}/${page}
```

#### Query Parameters

| Parameter |  Type  |             Description              | Required? | Default |
| :-------: | :----: | :----------------------------------: | :-------: | :-----: |
|   `query_parameter`    | string | The Name Of the MOvie |    Yes    |   --    |
|   `page`    | int | ----- |    Yes    |   1   |

#### Request sample

```javascript
const resp = await fetch("https://aniwatch-api-v1-0.onrender.com/api/search/your%20name/1");
const data = await resp.json();
console.log(data);
```

### Response Sample

```
{
"pnex": "1",
"searchq": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
"type": "Oppenheimer",
"img": "HD",
"id": "oppenheimer/"
}
],
"searchk": null
}
```

### GET Movie Genre 

 **Endpoint**

```sh
https://aniwatch-api-v1-0.onrender.com/api/genre/${genre_name}/${pagee}
```

#### Path Parameters

| Parameter |  Type  |               Description                | Required? | Default |
| :-------: | :----: | :--------------------------------------: | :-------: | :-----: |
|  `genre_name`   | string | The name of anime genre . |    Yes    |   --    |
|  `page`   | int | ------ |    Yes    |   1    |


#### Request sample

```javascript
const resp = await fetch(
  "https://aniwatch-api-v1-0.onrender.com/api/genre/romance/1"
);
const data = await resp.json();
console.log(data);
```

### Response Sample

```
{
"pnex": "»»",
"genram": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/3S9u9oMFEwvzt1OGSv9PBowzmiD.jpg",
"type": "AÅ›oka",
"img": "HD",
"id": "aoka-2001/"
},
]
```


### GET Movie Info 

**Endpoint**

```sh
https://aniwatch-api-v1-0.onrender.com/api/related/${id}
```

#### Path Parameters

| Parameter |  Type  |               Description                | Required? | Default |
| :-------: | :----: | :--------------------------------------: | :-------: | :-----: |
|  `id`   | string | ------ |    Yes    |   --    |

### Request Sample

```javascript
const resp = await fetch(
  "https://aniwatch-api-v1-0.onrender.com/api/related/hunter-x-hunter-128"
);
const data = await resp.json();
console.log(data);
```

### Response Sample

```
{
"moviez": [
{
"name": "Oppenheimer",
"desc": "Watch Oppenheimer full movie online Movies123. Watch Oppenheimer 123movies online for free. Oppenheimer 123Movies: The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
"genre": "Drama,  History",
"actors": "Cillian Murphy,  Emily Blunt,  Matt Damon,  Robert Downey Jr.,  Florence Pugh,  Josh Hartnett,  Casey Affleck,  Rami Malek,  Kenneth Branagh,  Benny Safdie,  Jason Clarke,  Dylan Arnold,  Tom Conti,  James D'Arcy,  David Dastmalchian,  Dane DeHaan,  Alden Ehrenreich,  Ton",
"director": "Director:Christopher Nolan",
"country": "Country:United Kingdom",
"type": "Quality:HD",
"releas": "Release: 2023 ",
"imdbRating": "IMDb: 8.1/10",
"keywords": null,
"bigbanner": "https://i1.wp.com/image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
"id": null
}
],
"theid": "tt15398776",
"tthetv": "https://vidsrc.xyz/embed/movie?imdb=tt15398776",
"youMAYlike": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/vkJE484VnRdilB9IgKNly7HIifR.jpg",
"type": "Saltburn",
"img": "HD",
"id": "saltburn/"
},
]
```

### GET MOVIE ,TV SERIES, TOP IMDb

**Endpoint**

```sh
https://aniwatch-api-v1-0.onrender.com/api/mix/${query_paramenter}/${page}
```
### Request Sample

```javascript
const resp = await fetch(
  "https://aniwatch-api-v1-0.onrender.com/api/mix/tv/1"
);
const data = await resp.json();
console.log(data);
```

### Query Parameters

| Parameter |  Type  |             Description              | Required? | Default |
| :-------: | :----: | :----------------------------------: | :-------: | :-----: |
|   `query_parameter`    | string | The Anime You Want To See.. |    Yes    |   --    |
|   `page`    | int | ----- |    Yes    |   1   |
|   `movie,ova,ona,subbed-anime,dubbed-anime,special,tv,popular,`    | string | The Anime You Want To See.. |    Yes    |   --    |


### Response Sample

```
{
"nextpageavai": true,
"mixAni": [
{
"name": "Isekai Onsen Paradise [UNCENSORED]",
"jname": "Meitou \"Isekai no Yu\" Kaitakuki: Around 40 Onsen Mania no Tensei Saki wa, Nonbiri Onsen Tengoku deshita [UNCENSORED]",
"format": "TV",
"duration": "3m",
"idanime": "isekai-onsen-paradise-uncensored-18982",
"sub": "2",
"dubani": false,
"totalep": false,
"img": "https://img.flawlessfiles.com/_r/300x400/100/86/0e/860e709b923e7295527377edc45b9060/860e709b923e7295527377edc45b9060.jpg",
"pg": "18+"
},
...
]
}
```

