<?php
/**
 * Plugin Name:       VCUarts Branding Bar
 * Plugin URI:        https://github.com/VCUarts/Branding-Bar-Plugin
 * Description:       Virginia Commonwealth University and VCUarts Branded Header Bar
 * Version:           1.2.01
 * Author:            VCUarts
 * Author URI:        http://arts.vcu.edu
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: https://github.com/VCUarts/Branding-Bar-Plugin
 *
 * @package vcuarts_branding_bar
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The branding-bar plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-vcuarts-branding-bar.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 */
function run_vcuarts_branding_bar() {

	$plugin = new VCUarts_Branding_Bar();
	$plugin->run();

}
run_vcuarts_branding_bar();
