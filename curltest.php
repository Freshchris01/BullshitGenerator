<?php

    error_reporting(E_ALL);
    $img = imagejpeg($_GET['imgurl'], 'test.jpeg');
$black = ImageColorAllocate ($im, 0, 0, 0);
$white = ImageColorAllocate ($im, 255, 255, 255);

ImageTTFText ($im, 20, 0, 10, 20, $white, "Calibri.ttf", "Teste... Omega: &#937;");
    $url = 'http://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Tags';

    if(isset($_GET['imgurl'])){

        $data = array("url" => $_GET['imgurl']);
        $data_string = json_encode($data);

        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, "true");
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'ocp-apim-subscription-key: fecebb3690bb4b83be1f2d516b18318e',
            'Content-Type: application/json'
        ));

        if(curl_exec($curl) === false)
        {
            $rawDate = json_encode(curl_error($curl), JSON_FORCE_OBJECT);
            exit();
        }
        else
        {
            echo json_encode($result);
            exit();
        }

        curl_close($curl);

    }else{
        $errorData = array('error_number' => 1, 'error_description' => 'No Url Parameter');
        echo json_encode($errorData, JSON_FORCE_OBJECT);
        exit();
    }

?>