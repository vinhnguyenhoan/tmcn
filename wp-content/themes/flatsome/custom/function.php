<?php
function sw_styles_and_scripts() {
        wp_register_script('nn-custom-script', get_template_directory_uri().'/custom/script.js?v=1.2');
        wp_enqueue_script('nn-custom-script');
        
        wp_register_style('nn-custom-style', get_template_directory_uri().'/custom/style.css?v=1');
        wp_enqueue_style('nn-custom-style');
}
add_action('wp_enqueue_scripts', 'sw_styles_and_scripts');
?>

