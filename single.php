<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
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
 * File:        single.php
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

$context         = Timber::context();
$timber_post     = Timber::query_post();
$context['post'] = $timber_post;

if ( post_password_required( $timber_post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	$templates = array(
		"single-$timber_post->ID.twig",
		"single-$timber_post->post_type.twig",
		"single-$timber_post->slug.twig",
		'single.twig',
	);
	Timber::render( $templates, $context );
}
