<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @package    VCUarts_branding_bar
 * @subpackage VCUarts_branding_bar/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    VCUarts_branding_bar
 * @subpackage VCUarts_branding_bar/public
 */
class VCUarts_Branding_Bar_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 */
	public function enqueue_styles() {
		if ( ! defined( 'VCUARTS_BAR_MIN_STYLES' ) ) {
			wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/vcuarts-branding-bar-public.css', array(), $this->version, 'all' );
		} else {
			wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/vcuarts-branding-bar-min-public.css', array(), $this->version, 'all' );
		}
	}

	/**
	 * Including front end markup and things.
	 */
	public function front_end() {

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/partials/vcuarts-branding-bar-public-display.php';

	}
}
