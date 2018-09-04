<!doctype html>
<html lang="en">
<head>
    <title>Cerebrum - Your Mental Checkup</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="../img/brain.ico">

    <!-- Bootstrap core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="../css/agency.min.css" rel="stylesheet">
    <link href="../css/checkup.css" rel="stylesheet">
    <link href="../css/checkupresult.css" rel="stylesheet">


    <!-- Include jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <link href="../vendor/bootstrap/js/bootstrap.min.js" rel="stylesheet">
    

    <!-- Include SmartWizard JavaScript source -->
    <script type="text/javascript" src="../js/checkup.js"></script>

</head>
<body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger text-primary" href="../">Cerebrum</a>
        </div>
    </nav>
    
    <div class="container">
        <div class="row">
            <div class="showbox">
                <div class="loader" id="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Check-up Result</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$0</h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="mt-4 text-justify">This is an approximate measurement of your current mental state. as it is not accurate or any experts solution, do not go on any kind of treatment by your own. please visit a doctor or a psychologist to have a discussion. stay safe and happy. bless</h3>
        </div>
    </div>

    <script>
        setInterval(function(){
            var element = document.getElementById("loader");
            element.parentNode.removeChild(element);
        }, 5000);
    </script>

</body>
</html>