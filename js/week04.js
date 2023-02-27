
// place js in here


window.onload = () => {
    
    
    const folderPrefix = "/assets/images/";

    // put in images 1 by 1
    // let images = ['week02/deck-1.jpg', 'week02/deck-2.jpg', ];

    // loop starts at i = start 
    // ends at i <= end
    let images = [];
    for (let i = 1; i <= 8; i++){
      images.push( 'week04/jiaxiang-0' + i + '.png');
    }
    
    const carouselBody = document.getElementById("carousel-body");

    for (let i = 0; i < images.length; i++){

      const nextNumber = i + 1 > images.length-1 ? 0 : i + 1;
      const prevNumber = i - 1 < 0 ? images.length-1 : i - 1;
      let div = document.createElement("div");
      div.className = ("carousel-item item "  + (i == 0 ? "first-item" : "")) ;
      const imagePath = folderPrefix + images[i];
      div.style = ("background-image: url('" + imagePath + "')") ;
      div.id = ("item" + i);

      let aPrev = document.createElement("a");
      aPrev.href = ("#item" + prevNumber);
      // aPrev.onclick = function(e){
      //   window.location = e.target.href;
        
      //   console.log(e.target.href);
      // }
      aPrev.className = "arrow-prev arrow";
      

      let aNext = document.createElement("a");
      aNext.href = ("#item" + nextNumber);
      // aNext.onclick = function(e){
      //   window.location = e.target.href;
      //   console.log(e.target.href);

      // }
      aNext.className = "arrow-next arrow";

      carouselBody.appendChild(div);
      div.appendChild(aPrev);
      div.appendChild(aNext);
      
    }


  };
  

 
