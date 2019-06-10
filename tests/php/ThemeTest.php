<?php

declare(strict_types=1);

namespace Enogwe\Test;

\WP_Mock::bootstrap();

use Enogwe\Theme as Theme;

final class ThemeTest extends \WP_Mock\Tools\TestCase {

	public function testInstantiatesTheTheme(): void {
		\WP_Mock::userFunction(
			'is_admin',
			array(
				'return' => true,
				'times'  => '3+',
			)
		);

		\WP_Mock::userFunction(
			'current_user_can',
			array(
				'args'   => array( 'manage_options' ),
				'return' => true,
			)
		);

		$this->assertInstanceOf(
			Theme::class,
			new Theme()
		);

		$this->assertTrue( is_admin() );
		$this->assertTrue( current_user_can('manage_options'));
	}
}
