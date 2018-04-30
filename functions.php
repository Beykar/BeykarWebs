<?php
    add_theme_support( 'post-thumbnails' );
?>

<?php
    function beykarwebs_enqueue_styles()
    {

        wp_enqueue_style(
            'bootstrap',
            get_template_directory_uri() . '/bower_components/bootstrap/dist/css/bootstrap.min.css'
        );
        wp_enqueue_style('font-awesome',
            get_template_directory_uri().'/bower_components/font-awesome/css/font-awesome.min.css');
    }

    add_action('wp_enqueue_scripts', 'beykarwebs_enqueue_styles');

    function beykarwebs_enqueue_scripts()
    {

        wp_enqueue_script(
          'bootstrap',
            get_stylesheet_directory_uri().'/bower_components/bootstrap/dist/js/bootstrap.min.js',
            array('jquery')
        );

        wp_enqueue_script(
          'jquery-easing',
            get_stylesheet_directory_uri().'/bower_components/jquery.easing/js/jquery.easing.min.js',
            array('jquery')
        );
        wp_enqueue_script(
          'scroll-reveal',
            get_stylesheet_directory_uri().'/bower_components/scrollreveal/dist/scrollreveal.min.js',
            array('jquery')
        );
        wp_enqueue_script(
          'creative-js',
            get_stylesheet_directory_uri().'/assets/js/creative.js',
            array('jquery')
        );
        wp_enqueue_script(
          'to-top-button',
            get_stylesheet_directory_uri().'/assets/js/to-top-button.js',
            array('jquery')
        );

        wp_enqueue_script(
            get_stylesheet_directory_uri().'/assets/js/expand.js',
            array('jquery')
            );

        wp_enqueue_script(
          'script',
            get_template_directory_uri().'/assets/js/script.js',
            array('jquery')
        );
    }

    add_action('wp_enqueue_scripts', 'beykarwebs_enqueue_scripts')
?>