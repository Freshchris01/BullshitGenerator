BullshitGenerator API

BaseUrl             :      http://diemers.dubhe.uberspace.de/bullshit/curltest.php
RequestType         :      GET
Required Parameters :      imgurl (url to image to process)

Response:

    Sucess:

        {
           "tags":[
              {
                 "name":"water",
                 "confidence":0.99941468238830566
              },
              {
                 "name":"person",
                 "confidence":0.93677496910095215
              },
              {
                 "name":"sport",
                 "confidence":0.84868776798248291
              },
              {
                 "name":"swimming",
                 "confidence":0.84544718265533447,
                 "hint":"sport"
              },
              {
                 "name":"water sport",
                 "confidence":0.82753580808639526,
                 "hint":"sport"
              },
              {
                 "name":"pool",
                 "confidence":0.80549478530883789
              }
           ],
           "requestId":"f5978139-4cff-45d3-b5c3-fc91e7b14c44",
           "metadata":{
              "width":400,
              "height":400,
              "format":"Jpeg"
           }
        }

    Error:

    {
       "code":"InvalidImageUrl",
       "requestId":"c2bc58af-5aca-4981-ba83-196d552ede52",
       "message":"Image URL is not accessible."
    }

Example:

    JavaScript:
    Requires <input type="text" id="urlInput"> in index.html
    Uses jQuery

    function requestImgAPI() {

        if ($.trim($('#urlInput').val()) != "") {
            $.ajax({
                type: "GET",
                url: "http://diemers.dubhe.uberspace.de/bullshit/curltest.php?imgurl=" + $.trim($('#urlInput').val()),

                success: function (data) {
                    console.log(data);
                    var jsonString = data.substring(0, data.length-4);      // delete 'null' of response
                    obj = JSON.parse(jsonString);
                    console.log(obj);
                    if(obj['code'] === undefined){
                        test($.trim($('#urlInput').val()));                 // calls method 'test' for further processing
                    }else{
                        alert(obj['message']);                              // error (e.g invalid url)
                    }

                },
                error: function (request, status, error) {
                    alert("Error! " + request.responseText);                // request error
                }

            });
        } else {
            alert('please insert url');
        }
    }


