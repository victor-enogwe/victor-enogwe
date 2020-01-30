<?php
/**
 * Enogwe WordPress Theme.
 * ------------------------------------
 * Theme Name: enogwe
 * Description: Enogwe WordPress Theme
 * Version: 0.1
 * Author: iykyvic <victor.enogwe@gmail.com>
 * Author URI: https://github.com/victor-enogwe
 * License: GNU 3.0
 * License URI:  https://
 * Text Domain: enogwe
 * File: Settings.php
 * ------------------------------------
 * Php Version 7
 *
 * @category Theme
 * @package  Enogwe
 * @author   iykyvic <victor.enogwe@gmail.com>
 * @license  GNU 3.0
 * @link     https://github.com/victor-enogwe/enogwe
 */

namespace Enogwe\Admin;

defined( 'WPINC' ) || exit;

if ( ! class_exists( Settings::class ) ) {
	/**
	 * Settings class
	 *
	 * @category Theme
	 * @package  Enogwe\Admin
	 * @author   iykyvic <victor.enogwe@gmail.com>
	 * @license  GNU-3.0 https://opensource.org/licenses/GNU-3.0
	 * @link     https://github.com/victor-enogwe/enogwe
	 */
	class Settings {


		/**
		 * __construct
		 *
		 * @return void
		 */
		public function __construct() {
			$this->init();
		}

		/**
		 * init
		 *
		 * @return void
		 */
		private function init() {
			if ( is_admin() && current_user_can( 'manage_options' ) ) {
				add_action( 'admin_menu', array( $this, 'register_admin_menu' ) );
				add_action( 'current_screen', array( $this, 'redirect_customizer' ) );
			}
		}

		/**
		 * Register  Admin Menu
		 *
		 * @return void
		 */
		public function register_admin_menu() {
			add_menu_page(
				esc_html__( 'Enogwe Settings', 'enogwe' ),
				esc_html__( 'Enogwe Settings', 'enogwe' ),
				'manage_options',
				'enogwe-theme-settings',
				array( $this, 'create_page' ),
				'dashicons-admin-settings'
			);
		}

		/**
		 * Create Settings Page
		 *
		 * @return void
		 */
		public function create_page() {
			echo '<div class="wrap"><div id="enogwe_theme_settings"></div></div>';
		}


		/**
		 * Redirect Customizer
		 *
		 * @param mixed $screen the current admin screen
		 *
		 * @return void
		 */
		public function redirect_customizer( $screen ) {
			if ( isset( $screen->base ) && 'customize' === $screen->base ) {
				wp_redirect( admin_url() . 'admin.php?page=enogwe-theme-settings' );
				exit();
			}
		}
	}
}
