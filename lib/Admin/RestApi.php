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

if ( ! class_exists( RestApi::class ) ) {
	/**
	 * Rest Api class
	 * ------------------------------------
	 *
	 * @category Theme
	 * @package  Enogwe
	 * @author   Victor Enogwe <contact@victorenogwe.me>
	 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
	 * @link     https://github.com/victor-enogwe/enogwe
	 */
	class RestApi {
		private $base_url;
		/**
		 * __construct
		 *
		 * @return void
		 */
		public function __construct() {
			$this->base_url = 'enogwe/v1';
			add_action( 'rest_api_init', array( $this, 'routes' ) );
		}

		public function routes() {
			register_rest_route(
				$this->base_url,
				'/settings',
				array(
					array(
						'methods'  => 'GET',
						'callback' => array( $this, 'get_settings' ),
					),
					array(
						'methods'             => 'POST',
						'callback'            => array( $this, 'set_settings' ),
						'args'                => array( 'settings' => array( 'required' => true ) ),
						'permission_callback' => array( $this, 'can_manage_options' ),
					),
				)
			);
		}

		/**
		 * Can_manage_options
		 *
		 * @return void
		 */
		public function can_manage_options() {
			return current_user_can( 'manage_options' );
		}

		/**
		 * Get_settings
		 *
		 * @return void
		 */
		public function get_settings() {
			return get_theme_mod( 'settings', '{}' );
		}

		/**
		 * Set_settings
		 *
		 * @param  mixed $request
		 *
		 * @return void
		 */
		public function set_settings( $request ) {
			$settings = $request->get_params( 'settings' );
			return set_theme_mod( 'settings', $settings );
		}
	}
}
