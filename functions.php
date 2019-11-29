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
 * File: functions.php
 * ------------------------------------
 * Php Version 7
 *
 * @category Theme
 * @package  Enogwe
 * @author   iykyvic <victor.enogwe@gmail.com>
 * @license  GNU 3.0
 * @link     https://github.com/victor-enogwe/enogwe
 */

namespace Enogwe;

// Exit if accessed directly.
defined( 'WPINC' ) || exit;

require_once __DIR__ . '/vendor/autoload.php';

new Theme();
