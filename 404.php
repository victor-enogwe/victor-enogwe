<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
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
 * File:        sidebar.php
 * ------------------------------------
 *
 * @category Theme
 *
 * @author   Victor Enogwe <contact@victorenogwe.me>
 * @license  GNU-3.0 https://opensource.org/licenses/gpl-3.0.html
 *
 * @see     https://github.com/victor-enogwe/enogwe
 * @date     2019 12 11
 */
$context = Timber::context();
Timber::render( '404.twig', $context );
