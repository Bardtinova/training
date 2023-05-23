var IProdactArray = [];
fetch('./emojiList.json')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    if ("symbol" in json) {
        IProdactArray.push(json);
    }
    console.log(IProdactArray);
});
