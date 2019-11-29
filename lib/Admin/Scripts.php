<?php
/**
 * Php Version 7
 * Enogwe WordPress Theme.
 * ------------------------------------
 *
 * Theme Name:  enogwe
 * Description: Enogwe WordPress Theme
 * Version:     0.1
 * Author:      iykyvic <victor.enogwe@gmail.com>
 * Author URI:  https://victorenogwe.me
 * License:     GNU-3.0
 * License URI: https://opensource.org/licenses/gpl-3.0.html
 * Text Domain: enogwe
 * File:
 * ------------------------------------
 *
 * @category Theme
 * @package  Enogwe
 * @author   Victor Enogwe <contact@victorenogwe.me>
 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
 * @link     https://github.com/victor-enogwe/enogwe
 * @date     2019 05 31
 */

namespace Enogwe\Admin;

//  Exit if accessed directly.
defined( 'WPINC' ) || exit;

if ( ! class_exists( Scripts::class ) ) {
	/**
	 * Scripts class
	 * ------------------------------------
	 *
	 * @category Theme
	 * @package  Enogwe
	 * @author   Victor Enogwe <contact@victorenogwe.me>
	 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
	 * @link     https://github.com/victor-enogwe/enogwe
	 */
	class Scripts {

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
				$this->add_action_settings_screen();
			}
		}

		/**
		 * Register Settings Scripts
		 *
		 * @param string $hook page hook id.
		 *
		 * @return void
		 */
		public function register_scripts( $hook ) {
			if ( 'toplevel_page_enogwe-theme-settings' !== $hook ) {
				return;
			}

			wp_register_style( 'enogwe_settings', ENOGWE_ADMIN_ASSETS . 'css/settings.css', array( 'wp-edit-blocks' ), ENOGWE_VERSION );

			wp_register_script(
				'enogwe_settings',
				ENOGWE_ADMIN_ASSETS . 'js/settings.js',
				array( 'wp-editor', 'wp-element', 'wp-components', 'reactstrap' ),
				ENOGWE_VERSION,
				true
			);

			wp_localize_script( 'enogwe_settings', 'cred', array( 'nonce' => wp_create_nonce( 'wp_rest' ) ) );

			wp_enqueue_media();
			wp_enqueue_style( 'enogwe_settings' );
			wp_enqueue_script( 'enogwe_settings' );
		}

		/**
		 * Add Action Settings Screen
		 *
		 * @return void
		 */
		private function add_action_settings_screen() {
			add_action( 'admin_enqueue_scripts', array( $this, 'register_scripts' ) );
		}
	}
}
