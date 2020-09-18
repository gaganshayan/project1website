let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/17eW9wTVR8l_emU9zStJMGSYsyHa9aodt9WKpT9CUEWg/od6/public/values?alt=json`;

// 17eW9wTVR8l_emU9zStJMGSYsyHa9aodt9WKpT9CUEWg

$.ajax({ url: sheetAsJSON })
.then((data) => {
 console.log("data", data);

 // data.feed.entry is the array that contains our objects so we can use .map()
 // to iterate over the array 
 let projects = data.feed.entry.map((project) => {
   // here we return a new object with keys names of our own choosing and the needed values
   return {
     title: project.gsx$title.$t,
     image: project.gsx$image.$t,
     description: project.gsx$description.$t,
     url: project.gsx$url.$t
   };    
 });

 //  pass the data to the app function
 console.log(' projects - ', projects);
 app(projects);
})

const app = (projects) => {

    for(let i = 0; i < 3; i++) {
            let project = projects[i]

            const $div = $(`<div class="card" style="width: 18rem;">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.url}" class="btn btn-primary">code here</a>
            </div>
         </div>`);

         console.log(projects);

        $('.container').append($div);
    }

//     projects.forEach(project => {
      
//         const $div = $(`<div class="card" style="width: 18rem;">
//             <img src="${project.image}" class="card-img-top" alt="${project.title}">
//             <div class="card-body">
//                 <h5 class="card-title">${project.title}</h5>
//                 <p class="card-text">${project.description}</p>
//                 <a href="${project.url}" class="btn btn-primary">code here</a>
//             </div>
//          </div>`);

//         $('.card').append($div);
      
//     })
}