var textinsert="";
var url1 = "http://diemers.dubhe.uberspace.de/bullshit/bullshit.php?imgurl=https://newevolutiondesigns.com/images/freebies/city-wallpaper-11.jpg";
var url2 = 'http://jsonplaceholder.typicode.com';
var imgUrl = 'https://newevolutiondesigns.com/images/freebies/city-wallpaper-11.jpg';
var obj;
var tmpUrl = "";

function init() {
        requestMS(0);
}

function displayText(imageUrl){
    textinsert = "";
    setInsertText();
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
      
      imageObj.src = imageUrl;

      
}

function setInsertText(){
    var theSwitcher = Math.floor(Math.random()*3); 
    
    textinsert="";
    
    var tagsFound = obj['tags'].length;
    var imgTags = new Array();
    var i = 0;
    for(; i < tagsFound; i++){
        imgTags[i] = obj['tags'][i]['name'];
    }
    
    
   
  var someRandom =  Math.floor((Math.random() * tagsFound) ); 
  placeholder1 = imgTags[someRandom];
  someRandom =  Math.floor((Math.random() * tagsFound) ); 
  placeholder2 = imgTags[someRandom];
  someRandom =  Math.floor((Math.random() * tagsFound) ); 
  placeholder3 = imgTags[someRandom];
    switch(theSwitcher) { 
    case 0: 
        var normal_first = ["Be a", "Everyone is a", "Look at this", "Everything is just", "The meaning of life is", "The majestic", "The", "This will be a"]; 
        var normal_second = ["because of", "this is the meaning of the", "this is the art of", "just do it Mr.", "all day, every day"]; 
        var normal_third = ["today","tomorrow","every Day","now","at home","wherever you are","think of that every day", "for eternity", "love.", "", ""]; 
        
        var firstRand =  Math.floor((Math.random() * normal_first.length) );  
        var secondRand = Math.floor((Math.random() * normal_second.length));   
        var thirdRand = Math.floor((Math.random()* normal_third.length)); 
        
        textinsert = normal_first[firstRand] + " " + placeholder1 + " " + normal_second[secondRand]+ " " + placeholder2 + " " + normal_third[thirdRand]; 
    break; 
            
            
    case 1: 
        var long_first = ["The","All","No","Some"]; 
        var long_second = ["is the","are just","will destroy the"]; 
        var long_third = ["of the","in the","of the beautiful"," "]; 
        var firstRand =  Math.floor((Math.random() * long_first.length));  
        var secondRand = Math.floor((Math.random() * long_second.length));   
        var thirdRand = Math.floor((Math.random()* long_third.length)); 
        
        textinsert = long_first[firstRand] + " " + placeholder1 + " " + long_second[secondRand]+ " " + placeholder2 + " " + long_third[thirdRand]+ " " +  placeholder3;  
            
    break; 
      
   // Case 3 ;)      
   default: 
    var short_first = ["This","That","The","Because","He is a","In the end","Do it for the",""]; 
    var short_second = ["forever.","only once","no more"," "," ",""]; 
     
    var firstRand =  Math.floor((Math.random() * short_first.length) );  
    var secondRand = Math.floor((Math.random() * short_second.length) );   
     
     
    textinsert = short_first[firstRand] + " " + placeholder1 + " " + short_second[secondRand];  
    }
    
}

function requestMS(param){
    if(tmpUrl != $.trim($('#urlInput').val())){
        if ($.trim($('#urlInput').val()) != "") {
            var dataText = '{"url":"' + $.trim($('#urlInput').val()) + '"}';
            $.ajax({
                type: "POST",
                url: "http://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Tags",
                contentType: "application/json",
                headers: {
                    "ocp-apim-subscription-key": "fecebb3690bb4b83be1f2d516b18318e",
                },
                data: dataText,
                success: function(data){
                    console.log(data);
                    
                    tmpUrl = $.trim($('#urlInput').val());
                    obj = data
                    if(param == 1){
                        displayText($.trim($('#urlInput').val()));
                    }else if(param == 0){
                        displayImage($.trim($('#urlInput').val()));
                    }                    
                },
                error: function(error){
                    alert(JSON.parse(error['responseText'])['message']);
                }
            });
           
        } else {
            alert('please insert url');
        }
    }else{
        displayText(tmpUrl);
    }
}

function requestImgAPI(param) {

    if(tmpUrl != $.trim($('#urlInput').val())){
        if ($.trim($('#urlInput').val()) != "") {
            $.ajax({
                type: "GET",
                url: "curltest.php?imgurl=" + $.trim($('#urlInput').val()),

                success: function (data) {
                    tmpUrl = $.trim($('#urlInput').val());
                    console.log(data);
                    //console.log(data);
                    var jsonString = data.substring(0, data.length-4);      // delete 'null' of response
                    obj = JSON.parse(jsonString);
                    console.log(obj);
                    if(obj['code'] === undefined){
                        displayText($.trim($('#urlInput').val()));
                            if(param == 1){
                                    displayText($.trim($('#urlInput').val()));
                            }else if(param == 0){
                                    displayImage($.trim($('#urlInput').val()));
                            }
                    }else{
                        alert(obj['message']);
                    }


                },
                error: function (request, status, error) {
                    alert("Error! " + request.responseText);
                }

            });
        } else {
            alert('Plase insert a valid URL!');
        }
    }else{
        displayText(tmpUrl);
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

function displayImage(url){

        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        console.log(obj['metadata']['height'] + ' X ' + obj['metadata']['width']);
        context.canvas.width = obj['metadata']['width'];
        context.canvas.height = obj['metadata']['height'];

        imageObj.onload = function() {
                context.drawImage(imageObj, 0, 0);
        };

        imageObj.src = $('#urlInput').val();
}