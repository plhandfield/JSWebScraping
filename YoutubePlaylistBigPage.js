textResult = "Title,Channel\n"
var rows = document.querySelectorAll("div.ytd-playlist-video-list-renderer div#meta");
for (i = 0; i < rows.length; i++) {
    var title = rows[i].querySelector("span#video-title").innerText.replace(",", ".");
    var nchannel = rows[i].querySelector("div#metadata div#byline-container a");
    var channel = "";
    if(nchannel)
    {
        channel = nchannel.innerText.replace(",", ".");
    }
    
    textResult += title + "," + channel + "\n";
    
    
}
console.log(textResult)

