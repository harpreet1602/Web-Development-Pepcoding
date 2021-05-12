const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");

request("https://www.songspk2.info/single", callback);

let finalData = [];

function callback(err, res, html) {
  if (!err) {
    let $ = cheerio.load(html);
    fs.writeFileSync("songs.html", html);
    //console.log($);
    let rows = $(
      ".b-table-primary.f-table-primary.f-left.songs-single tbody tr"
    );
    console.log(rows.length);
    for (let i = 0; i < rows.length && i < 100; i++) {
      let cols = $(rows[i]).find("td");
      //console.log(cols.length);
      let songAndSingerName = $(cols[0]).text();
      let genre = $(cols[1]).text();
      let link = $(cols[0]).find("a").attr("href");

      //   console.log(songAndSingerName);
      //   console.log(genre);
      //   console.log(link);
      finalData.push({
        "Song and Singer Name": songAndSingerName,
        Genre: genre,
        "Downloadable link": link,
      });
      fs.writeFileSync("songs.json", JSON.stringify(finalData));
    }
  }
}