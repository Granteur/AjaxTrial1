//Exercise 1

//1 - Get all posts
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(data){ console.log(data);
});

//2 - Get post with id of 10
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/post/10', function(data){console.log(data);
});



//3 - Get the comments from post with id of 12
$.get(https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/post/12/comments', function(data){console.log(data);});




//4 - Get all the posts from user with id of 2
$.get(https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/db/user/2/posts', function(data){console.loge(data);});




//5 - Create a new post and log the id generated for it by the server
$.post(https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{userId: 1, title: "Still Need More Practice", body: "I'm not good at this"}, function(data){console.log(data.id)})

