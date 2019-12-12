<?php
/**
 * Enogwe WordPress Theme.
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 * ------------------------------------
 * Theme Name: enogwe
 * Description: Enogwe WordPress Theme
 * Version: 0.1
 * Author: iykyvic <victor.enogwe@gmail.com>
 * Author URI: https://github.com/victor-enogwe
 * License: GNU 3.0
 * License URI:  https://
 * Text Domain: enogwe
 * File: index.php
 * ------------------------------------
 * Php Version 7
 *
 * @category Theme
 * @package  Enogwe
 * @author   iykyvic <victor.enogwe@gmail.com>
 * @license  GNU 3.0
 * @link     https://github.com/victor-enogwe/enogwe
 */

$context          = Timber::context();
$context['posts'] = new Timber\PostQuery();
$context['foo']   = 'bar';
$templates        = array( 'index.twig' );

if ( is_home() ) {
	array_unshift( $templates, 'front-page.twig', 'home.twig' );
}

Timber::render( $templates, $context );
