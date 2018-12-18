let url ="https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=388e94b5a75b4f8e85abe05dc86d4468";
fetch(url)
  .then(response =>{
    return response.json();
  })

  .then(data =>{
    let results = data.articles; // getting the array of articles
    console.log(`Status from data object: ${data.status}`);

    let newsList = document.createElement("ul"); // creating a container ul for our news list items
    let body = document.querySelector("body"); // storing the body tag

    body.appendChild(newsList); // adding the empty newsList ul container to the body element as a child

    results.map(story =>{
      // going through the array, each item in the array is a 'story'
      let newsItem = document.createElement("li"); // creating a 'li' tag
      newsItem.innerHTML = '<a href="' +story.url +'">' + story.title + "</a>"; // adding innerHtml (the link tags) to each story/item in the array
      newsList.appendChild(newsItem); // adding the list item with is new innerhtml to the ul container, 'newsList'
    });
  })

  .catch(error=>{
    console.log(`An error occurred: ${error}`);
  });
