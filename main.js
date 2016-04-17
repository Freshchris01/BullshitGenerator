var textinsert="";
var url1 = "http://diemers.dubhe.uberspace.de/bullshit/bullshit.php?imgurl=https://newevolutiondesigns.com/images/freebies/city-wallpaper-11.jpg";
var url2 = 'http://jsonplaceholder.typicode.com';
var imgUrl = 'https://newevolutiondesigns.com/images/freebies/city-wallpaper-11.jpg';
var obj;
function test(imageUrl){
    textinsert = "";
    requestImage();
    var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();
        console.log(obj['metadata']['height'] + ' X ' + obj['metadata']['width']);
        context.canvas.width = obj['metadata']['width'];
        context.canvas.height = obj['metadata']['height'];

      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0);
          // calculate font size (6.25% of total height)
          var fontHeight = obj['metadata']['height'] / 100.0 * 6.25;
        context.font = fontHeight + "px Impact";
        context.fillStyle = 'white';
        context.textAlign="center";
        context.fillText(textinsert, imageObj.naturalWidth/2, 1.5 * fontHeight, imageObj.naturalWidth);
        context.strokeStyle = 'black';
        context.strokeText(textinsert, imageObj.naturalWidth/2, 1.5 * fontHeight, imageObj.naturalWidth);
        context.fill();
        //context.stroke();
          var x = 0;
          var y = 0;
          //var maxWidth = obj['metadata']['width'].
          //wrapText(context, textinsert, x, y, maxWidth, lineHeight);

      };


      //imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
      //imageObj.src = 'https://projectoxfordportal.azureedge.net/vision/Analysis/1-1.jpg';
      imageObj.src = imageUrl;
}

function requestImage(){
    var theSwitcher = Math.floor(Math.random()*3); 

    switch(theSwitcher) { 
        case 0: 
            var normal_first = ["Be a", "Everyone is a", "Look at this", "Everything is just", "The meaning of life is", "The majestic", "The", "This will be a"]; 
    var placeholder1 = obj['tags'][0]['name'];
    var normal_second = ["Because of", "This is the meaning of the", "This is the art of", "Just do it Mr.", "All day, every day"]; 
    var placeholder2 = obj['tags'][1]['name'];
    var normal_third = ["Today","Tomorrow","Every Day","Now","At home","Wherever you are","Think of that every day"]; 
     
    var firstRand =  Math.floor((Math.random() * 8) );  
    var secondRand = Math.floor((Math.random() * 5));   
    var thirdRand = Math.floor((Math.random()*7)); 
     
    textinsert = normal_first[firstRand] + " \n  " + placeholder1 + " \n" + normal_second[secondRand]+ " " + placeholder2 + " " + normal_third[thirdRand]; 
     
     
            break; 
        case 1: 
       var long_first = ["The","All","No","Some"]; 
    var placeholder1 = obj['tags'][0]['name'];
    var long_second = ["is the","are just","will destroy the"]; 
    var placeholder2 = obj['tags'][1]['name'];
    var long_third = ["of the","in the","of the beautiful"," "]; 
    var placeholder3 = "white"; 
    var firstRand =  Math.floor((Math.random() * 4));  
    var secondRand = Math.floor((Math.random() * 3));   
    var thirdRand = Math.floor((Math.random()*3)); 
     
    textinsert = long_first[firstRand] + " " + placeholder1 + " " + long_second[secondRand]+ " " + placeholder2 + " " + long_third[thirdRand]+ " " +  placeholder3;  
         
     
     
     
            break; 
        default: 
           var short_first = ["This","That","The","Because","He is a","In the end",""]; 
    var placeholder1 = obj['tags'][0]['name'];
    var short_second = ["Forever.","Only once","No more"," "," "]; 
     
    var firstRand =  Math.floor((Math.random() * 7) );  
    var secondRand = Math.floor((Math.random() * 5) );   
     
     
    textinsert = short_first[firstRand] + " " + placeholder1 + " " + short_second[secondRand];  
    }
    
}

function requestImgAPI() {

    if ($.trim($('#urlInput').val()) != "") {
        $.ajax({
            type: "GET",
            url: "http://imgen.azurewebsites.net/curltest.php?imgurl=" + $.trim($('#urlInput').val()),

            success: function (data) {
                console.log(data);
                var jsonString = data.substring(0, data.length-4);      // delete 'null' of response
                obj = JSON.parse(jsonString);
                console.log(obj);
                if(obj['code'] === undefined){
                    test($.trim($('#urlInput').val()));
                }else{
                    alert(obj['message']);
                }


            },
            error: function (request, status, error) {
                alert("Error! " + request.responseText);
            }

        });
    } else {
        alert('please insert url');
    }

}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    context.tex
    context.fillText(line, x, y);
    context.strokeText(line, x, y);
}

function wrapTest(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var maxWidth = 200;
    var lineHeight = 25;
    var x = (canvas.width - maxWidth) / 2;
    var y = 60;
    var text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

    context.font = '16pt Calibri';
    context.fillStyle = '#333';

    wrapText(context, text, x, y, maxWidth, lineHeight);
}