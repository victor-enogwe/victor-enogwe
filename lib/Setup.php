<?php
/**
 *
 */

namespace Enogwe;

defined( 'WPINC' ) || exit;

if ( ! class_exists( Setup::class ) ) {

	class Setup {
		private $_theme;
		private $_baseDir;

		public function __construct() {
			add_action( 'after_setup_theme', array( $this, 'init' ) );
		}

		public function init() {
			$this->addThemeSupport();
		}

		public function addThemeSupport(): void {
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
	}
}
