textResult = "Name,rating,address\n"
results = document.querySelectorAll("div.section-result-text-content");
for (i = 0; i < results.length; i++) {
    var name = results[i].querySelector("h3.section-result-title > span").innerText.replace(",", ".");
    var nrating = results[i].querySelector("span.cards-rating-score");
    
    var rating = "";
    if (nrating) {
       rating = nrating.innerText.replace(",", ".")
    }
    
    var nlocation = results[i].querySelector("span.section-result-location");
    
    var theLocation = "";
    
    if (nlocation) {
       theLocation = nlocation.innerText.replace(",", ".")
    }
    
    textResult += name + "," + rating + "," + theLocation + "\n";
    
}
console.log(textResult)
