function loadArticles() {
// Step 3: Define object and variables
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// Step 4: URL definition and request set up
xhr.open('GET', url, true);

// Step 5: Response type specification
xhr.responseType = 'json';

// Step 6: Handling the 'onload' event
xhr.onload = function() {
  // Retrieve the articles array from the parsed JSON response
  var articles = xhr.response.articles;

  // Get a reference to the HTML element where the content will be displayed
  var articlesDiv = document.getElementById('articles');

  // Step 7: Iterating through articles and constructing HTML
  // Loop through each article in the articles array

    articles.forEach(function(article) {
      // Create a container for the article
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      // Create and populate the title
      var title = document.createElement('h2');
      title.textContent = article.title;

      // Create and populate the description
      var description = document.createElement('p');
      description.textContent = article.description;

      // Create and populate the "Ways to Achieve" list
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      // Create and populate the "Benefits" list
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Attach all created elements to the article container
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      // Attach the complete article to the main page container
      articlesDiv.appendChild(articleDiv);
    });
};

// Step 8: Sending the request
// This line initiates the entire process
xhr.send();
}