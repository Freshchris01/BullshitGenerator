<?php
    error_reporting(E_ALL);
    
    if(isset($_GET['imgurl'])){
            
        $r = new HttpRequest('http://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories',HTTP_METH_POST);
        $theData = json_encode(array('url' => $_GET['imgurl']));
        $header_array = array('ocp-apim-subscription-key' => 'fecebb3690bb4b83be1f2d516b18318e');
        $httpRequest_OBJ->setContentType = 'Content-Type: application/json';
        $httpRequest_OBJ->setRawPostData ($theData);
        try {
            $r->send();
            if ($r->getResponseCode() == 200) {
                echo $r->getResponseBody();
            }
        } catch (HttpException $ex) {
            echo $ex;
        }
    }else{
        echo 'No Image URL!';
    }

?>