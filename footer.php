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
 * File: footer.php
 * ------------------------------------
 * Php Version 7
 *
 * @category Theme
 * @package  Enogwe
 * @author   iykyvic <victor.enogwe@gmail.com>
 * @license  GNU 3.0
 * @link     https://github.com/victor-enogwe/enogwe
 */

$timberContext = $GLOBALS['timberContext']; // @codingStandardsIgnoreFile
if ( ! isset( $timberContext ) ) {
	throw new \Exception( 'Timber context not set in footer.' );
}
$timberContext['content'] = ob_get_contents();
ob_end_clean();
$templates = array( 'page-plugin.twig' );

Timber::render( $templates, $timberContext );
