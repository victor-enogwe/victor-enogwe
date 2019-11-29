<?php
/**
 * Php Version 7
 * Enogwe WordPress Theme.
 * ------------------------------------.
 *
 * Theme Name:  enogwe
 * Description: Enogwe WordPress Theme
 * Version:     0.1
 * Author:      iykyvic <victor.enogwe@gmail.com>
 * Author URI:  https://victorenogwe.me
 * License:     GNU-3.0
 * License URI: https://opensource.org/licenses/gpl-3.0.html
 * Text Domain: enogwe
 * File:        lib/class-theme.php
 * ------------------------------------
 *
 * @category Theme
 *
 * @author   Victor Enogwe <contact@victorenogwe.me>
 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
 *
 * @see     https://github.com/victor-enogwe/enogwe
 * @date     2019 05 30
 */

namespace Enogwe;

defined( 'WPINC' ) || exit;

use Enogwe\Admin\RestApi;
use Enogwe\Admin\Settings;
use Enogwe\Admin\Scripts as AdminScripts;
use Enogwe\Frontend\Scripts as FEScripts;

if ( ! class_exists( Theme::class ) ) {
	/**
	 * Theme class
	 * ------------------------------------.
	 *
	 * @category Theme
	 *
	 * @author   Victor Enogwe <contact@victorenogwe.me>
	 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
	 *
	 * @see     https://github.com/victor-enogwe/enogwe
	 */
	class Theme {

		/**
		 * Constructor.
		 */
		public function __construct() {
			$this->env();
			new Setup();
			new RestApi();
			new Settings();
			new AdminScripts();
			new FEScripts();
		}

		/**
		 *  ENvironment Variables.
		 */
		public function env() {
			$theme = wp_get_theme();
			define( 'ENOGWE_DIRECTORY', trailingslashit( get_stylesheet_directory_uri() ) );
			define( 'ENOGWE_FRONTEND_ASSETS', ENOGWE_DIRECTORY . '/assets/frontend/' );
			define( 'ENOGWE_ADMIN_ASSETS', ENOGWE_DIRECTORY . '/assets/admin/' );
			define( 'ENOGWE_VERSION', $theme->get( 'Version' ) );
			define( 'ENOGWE_TEXT_DOMAIN', $theme->get( 'TextDomain' ) );
		}
	}
}
