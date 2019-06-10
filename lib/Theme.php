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
 * File:        lib/class-theme.php
 * ------------------------------------
 *
 * @category Theme
 * @package  Enogwe
 * @author   Victor Enogwe <contact@victorenogwe.me>
 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
 * @link     https://github.com/victor-enogwe/enogwe
 * @date     2019 05 30
 */

namespace Enogwe;

defined( 'WPINC' ) || exit;

use Enogwe\Admin\RestApi;
use Enogwe\Admin\Settings;
use Enogwe\Admin\Scripts as AdminScripts;

if ( ! class_exists( Theme::class ) ) {
	/**
	 * Theme class
	 * ------------------------------------
	 *
	 * @category Theme
	 * @package  Enogwe
	 * @author   Victor Enogwe <contact@victorenogwe.me>
	 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
	 * @link     https://github.com/victor-enogwe/enogwe
	 */
	class Theme {

		/**
		 * Constructor
		 */
		public function __construct() {
			new Setup();
			new RestApi();
			new Settings();
			new AdminScripts();
		}
	}
}
