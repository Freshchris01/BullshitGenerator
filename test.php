<?php

    if(isset($_GET['imgurl'])){
        $url = 'http://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories';
        
        // use key 'http' even if you send the request to https://...
        $options = array(
            'http' => array(
                'header' => "ocp-apim-subscription-key: fecebb3690bb4b83be1f2d516b18318e",
                'header' => "content-type: application/json",
                'method'  => 'POST',
                'content' => json_encode(array('url' => $_GET['imgurl']))
                
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        if ($result === FALSE) {echo 'ERROR'; }
        
        var_dump($result);
    }else{
        echo 'No Image URL!';
    }
?>