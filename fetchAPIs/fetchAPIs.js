function loadPost(){
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        const postContainer = document.getElementById('post-container');

        fetch (apiUrl)
        .then(Response=> {
            //check if the request was successful (status code 200-299)
            if (!Response.ok){
                throw new Error(`HTTP error! Status: ${Response.status}`);
            }
            return Response.json(); //parse the response as JSON
        })
        .then(post => {
            // Handle and display the data on the webpage
            //Create new div element for the post
            const postDiv =document.createElement('div');
            postDiv.classList.add('post');

            //Create an h2 element for the post userId
            const userIdElement = document.createElement('h2');
            userIdElement.textContent = `User ID: ${post.userId}`;

            //create an h2 element for the post id
            const idElement = document.createElement('h2');
            idElement.textContent = `ID: ${post.id}`;


            //create an h2 element for the post title
            const titleElement = document.createElement('h2');
            titleElement.textContent = `Title: ${post.title}`;

            //create a p element for the post body
            const bodyElement = document.createElement('p');
            bodyElement.textContent = post.body;    

            //append the title and body elements to the post div
            postDiv.appendChild(userIdElement);
            postDiv.appendChild(idElement);
            postDiv.appendChild(titleElement);
            postDiv.appendChild(bodyElement);

            //append the post div to the post container
            postContainer.appendChild(postDiv);            
            console.log('data form the api:',post);

        })
        .catch (error =>{
            //Handle any error that occurred during the fetch request
            console.error('An error occurred:',error);
            if (postContainer){
                postContainer.innerHTML = `<p style="color:red;">Fail to load post: ${error.message}</p>`;
            }
        }); 
    }  