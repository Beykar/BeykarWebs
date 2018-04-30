<?php ini_set( "display_errors", 0); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <title>BeykarWebs</title>

    <!--mobile meta tags-->
    <meta http‐equiv="X‐UA‐Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="hamid khaldi">
    <meta name="description" content="BeykarWebs Website, by Hamid Khaldi">
    <?php wp_enqueue_script("jquery"); ?>
    <?php wp_head();?>

    <!-- website favicon-->
    <link rel="icon" href="assets/images/bw-logo.png">
    <!--main css-->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url');?>">


</head>