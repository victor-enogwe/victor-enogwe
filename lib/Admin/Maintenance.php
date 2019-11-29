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

if ( ! class_exists( Maintenance::class ) ) {

	class Maintenance {
		private $maintenance = false;

		public function __construct() {
			add_action( 'wp_loaded', array( $this, 'init' ) );
		}

		public function init() {
			$this->activate( json_decode( get_theme_mod( 'settings' ) )['maintenance'] );
		}

		private function activate( $settings ) {
			global $pagenow;
			if ( 'wp-login.php' !== $pagenow && ! current_user_can( 'manage_options' ) && ! is_admin() ) {
				$this->headers( $settings['duration'] );

				die();
			}
		}

		private function is_capable( $capabilities ) {
			return array_reduce( $capabilities, current_user_can );
		}

		private function headers( $retry ) {
			header( $_SERVER['SERVER_PROTOCOL'] . ' 503 Service Temporarily Unavailable', true, 503 );
			header( 'Content-Type: text/html; charset=utf-8' );
			header( 'Retry-After: ' . $retry );
		}
	}
}
