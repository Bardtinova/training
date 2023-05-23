interface IProdact {
    title: string;
    symbol: string;
    keywords: string;
 }

 let IProdactArray: IProdact[] = [];
   fetch('./emojiList.json')
    .then((response) => response.json())
    .then((json) => {
      if ("symbol" in json) {
         IProdactArray.push(json);
      } else if (Array.isArray(json)) {
         IProdactArray = json;
      }
      console.log(IProdactArray);
    })