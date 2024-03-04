![MasterHead](https://www.brantlibrary.ca/en/resourcesGeneral/Movie-banner-1400px-x-500px.png)

<h1 align="center">Movie Api</h1>

## Getting Started
> [!IMPORTANT]
> This Api Is Based On the Site 123MOVIES. Means This Is A 123Movies.org.mx Api.


To get started, you can use the following endpoints:

### 1. Fetch Home Page Data

**Endpoint:** `https://movie-api-ed63.onrender.com/api/get`

**Request Sample:**
```javascript
const resp = await fetch("https://movie-api-ed63.onrender.com/api/get");
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
https://movie-api-ed63.onrender.com/api/search/${query_parameter}/${page}
```

#### Query Parameters

| Parameter |  Type  |             Description              | Required? | Default |
| :-------: | :----: | :----------------------------------: | :-------: | :-----: |
|   `query_parameter`    | string | The Name Of the MOvie |    Yes    |   --    |
|   `page`    | int | ----- |    Yes    |   1   |

#### Request sample

```javascript
const resp = await fetch("https://movie-api-ed63.onrender.com/api/search/Oppenheimer/1");
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
https://movie-api-ed63.onrender.com/api/genra/${genre_name}/${pagee}
```

#### Path Parameters

| Parameter |  Type  |               Description                | Required? | Default |
| :-------: | :----: | :--------------------------------------: | :-------: | :-----: |
|  `genre_name`   | string | The name of anime genre . |    Yes    |   --    |
|  `page`   | int | ------ |    Yes    |   1    |


#### Request sample

```javascript
const resp = await fetch(
  "https://movie-api-ed63.onrender.com/api/genra/drama/1"
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
https://movie-api-ed63.onrender.com/api/movie/${id}
```

#### Path Parameters

| Parameter |  Type  |               Description                | Required? | Default |
| :-------: | :----: | :--------------------------------------: | :-------: | :-----: |
|  `id`   | string | ------ |    Yes    |   --    |

### Request Sample

```javascript
const resp = await fetch(
  "https://movie-api-ed63.onrender.com/api/movie/oppenheimer/"
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
https://movie-api-ed63.onrender.com/api/showmovie/${query_paramenter}/${page}
```
### Request Sample

```javascript
const resp = await fetch(
  "https://movie-api-ed63.onrender.com/api/showmovie/movies/1"
);
const data = await resp.json();
console.log(data);
```

```javascript
const resp = await fetch(
  "https://movie-api-ed63.onrender.com/api/showmovie/tv-series/1"
);
const data = await resp.json();
console.log(data);
```

```javascript
const resp = await fetch(
  "https://movie-api-ed63.onrender.com/api/showmovie/top-imdb/1"
);
const data = await resp.json();
console.log(data);
```

### Query Parameters

| Parameter |  Type  |             Description              | Required? | Default |
| :-------: | :----: | :----------------------------------: | :-------: | :-----: |
|   `query_parameter`    | string | The Anime You Want To See.. |    Yes    |   --    |
|   `page`    | int | ----- |    Yes    |   1   |
|   `movie,tv-series,top imdb`    | string | The Anime You Want To See.. |    Yes    |   --    |


### Response Sample

```
<----For Movie!---->
{
"pnex": "»»",
"movie": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/3S9u9oMFEwvzt1OGSv9PBowzmiD.jpg",
"type": "AÅ›oka",
"img": "HD",
"id": "aoka-2001/"
},
]

<----For tv-SEries!---->
{
"pnex": "»»",
"movie": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/a2Ckhf72DfQKRNZpeECxyrqaIV3.jpg",
"type": "The Mire Season 2",
"img": "EPS 6",
"id": "the-mire-season-2/"
},
]

<----For Top IMDb!---->
{
"pnex": "»»",
"movie": [
{
"name": "https://i0.wp.com/image.tmdb.org/t/p/w300/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
"type": "Inception",
"img": "HD",
"id": "inception/"
},
]
```

