<?php
/**
 *
 */

namespace Enogwe;

defined( 'WPINC' ) || exit;

if ( ! class_exists( Setup::class ) ) {

	class Setup {

		public function __construct() {
			add_action( 'after_setup_theme', array( $this, 'init' ) );
		}

		public function init() {
			$this->add_theme_support();
			$this->ajax_functions();
			$this->clean_up();
		}

		public function add_theme_support(): void {
			load_theme_textdomain( 'enogwe', get_stylesheet_directory() . '/languages' );
			add_theme_support( 'automatic-feed-links' );
			add_theme_support( 'title-tag' );
			add_theme_support( 'post-thumbnails' );
			set_post_thumbnail_size( 825, 510, true );
			register_nav_menus(
				array(
					'primary' => __( 'Header Menu', 'enogwe' ),
					'social'  => __(
						'Footer  Menu',
						'enogwe'
					),
				)
			);
			add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
		}

		public function ajax_functions() {
			add_action( 'wp_ajax_get_header', 'get_header' );
		}

		public function clean_up() {
			show_admin_bar( false );
			// REMOVE WP EMOJI
			remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
			remove_action( 'wp_print_styles', 'print_emoji_styles' );
			remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
			remove_action( 'admin_print_styles', 'print_emoji_styles' );
		}
	}
}
