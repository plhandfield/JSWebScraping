// On one playlist page (/playlist/[long_number])
// Make sure you zoom out as all the rows seems to be dynamic to the viewport

textResult = "PlaylistName,SongNumber,SongName,Artist,Album,SongLength,AddedDate\n"
var playlistName = document.querySelector("#page_naboo_playlist > div.catalog-content > div > div.catalog-header > div.header-info.has-info-list > h1").innerText;
var rows = document.querySelectorAll("div.datagrid-row.song");
for (i = 0; i < rows.length; i++) {
    var songName = rows[i].querySelector("div.cell-title span").innerText.replace(",", ".");
    var artist = rows[i].querySelector("div.cell-artist a").innerText.replace(",", ".");
    var album = rows[i].querySelector("div.cell-album a").innerText.replace(",", ".");
    var songLength = rows[i].querySelector("div.cell-duration span").innerText;
    var addedDate = rows[i].querySelector("div.cell-date span").innerText;
    
    textResult += playlistName + "," + songName + "," + artist  + "," + album   + "," + songLength   + "," + addedDate + "\n";
    
}
console.log(textResult)

