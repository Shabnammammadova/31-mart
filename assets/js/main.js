const row =document.querySelector('.row')


//fetch(" https://api.tvmaze.com/shows").then(data=>data.json()).then(arr=>{
    //for(let i=0;i<arr.length;i++){
   // row.innerHTML+=`<div class="col-4 my-3"  >
   // <div class="card" style="width: 18rem;">
   // <img src="${arr[i].image.medium}" class="card-img-top" alt="...">
    //<div class="card-body">
          
        
           // <h5 class="card-title"><b>Name</b>:${arr[i].name}</h5>
           // <p class="card-text"><b>Genres</b>:${arr[i].genres}</p>
           // <p class="card-text"><b>Imdb</b>:${arr[i].externals.imdb}</p>
          
          //  </div>
      // </div>
     // </div>`
   // }})


   $.ajax({
    method:"GET",
    url:"https://api.tvmaze.com/show"
  }).done((data)=>{
      data.forEach(element =>{
          row.innerHTML+=`<div class="col-4 py-3"  >
          <div class="card" style="width: 18rem;">
            <img src="${element.image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><b>Name</b>:${element.name}</h5>
              <p class="card-text"><b>Genres</b>:${element.genres}</p>
              <p class="card-text"><b>Imdb</b>:${element.externals.imdb}</p>
              
              <a href="details.html?id=${element.id}" class="btn btn-primary">Start watching</a>
            </div>
          </div>
        </div>`
      })
  })
  
   