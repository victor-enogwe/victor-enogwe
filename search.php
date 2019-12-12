<?php
/**
 * Search results page
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
 * File: page.php
 * ------------------------------------
 * Php Version 7
 *
 * @category Theme
 * @package  Enogwe
 * @author   iykyvic <victor.enogwe@gmail.com>
 * @license  GNU 3.0
 * @link     https://github.com/victor-enogwe/enogwe
 */
$templates        = array( 'search.twig', 'archive.twig', 'index.twig' );
$context          = Timber::context();
$context['title'] = 'Search results for ' . get_search_query();
$context['posts'] = new Timber\PostQuery();

Timber::render( $templates, $context );
