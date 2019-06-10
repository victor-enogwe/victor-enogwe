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
        private $_script_path = 'assets/js/';
        private $_style_path = 'assets/css/';

		/**
		 * __construct
		 *
		 * @return void
		 */
		public function __construct() {
			$this->_init();
		}

		/**
		 * _init
		 *
		 * @return void
		 */
		private function _init() {
			if ( is_admin() && current_user_can( 'manage_options' ) ) {
				$this->_addActionSettingsScreen();
			}
		}


		/**
		 * Register Settings Scripts
		 *
		 * @param string $hook page hook id
		 *
		 * @return void
		 */
		public function settingsScripts( $hook ) {
			if ( $hook !== 'toplevel_page_enogwe-theme-settings' ) {
				return;
			}

            $theme_dir =  trailingslashit( get_stylesheet_directory_uri() );

            $script_path = $theme_dir . $this->_script_path . 'admin/settings.js';
            $style_path = $theme_dir . $this->_style_path . 'admin/settings.css';

            wp_register_style(
                'enogwe_settings',
                $style_path,
                array('wp-edit-blocks'),
                false
            );

            wp_register_script(
                'reactstrap',
                $theme_dir . $this->_script_path . 'reactstrap.min.js',
                array('wp-element'),
                false,
                true
            );

			wp_register_script(
				'enogwe_settings',
				$script_path,
				array( 'wp-editor', 'wp-element', 'wp-components', 'reactstrap' ),
				false,
				true
            );

            wp_localize_script( 'enogwe_settings', 'cred', array( 'nonce' => wp_create_nonce( 'wp_rest' ) ) );

			wp_enqueue_media();
            wp_enqueue_style('enogwe_settings');
			wp_enqueue_script( 'enogwe_settings' );
		}

		/**
		 * Add Action Settings Screen
		 *
		 * @return void
		 */
		private function _addActionSettingsScreen() {
			add_action( 'admin_enqueue_scripts', array( $this, 'settingsScripts' ) );
        }


	}
}
