<?php

/**
 * @Block(
 *   id = "scrolltopbutton",
 *   admin_label = @Translation("Scroll Top Button block"),
 * )
 */

namespace Drupal\scrolltopbutton\Plugin\Block;

use Drupal\Core\Block\BlockBase;

class ScrollTopButtonBlock extends BlockBase {

  public function build() {
    $block = [];

    $block[] = [
      '#theme' => 'scrolltopbutton',
      '#attached' => [
        'library' => [
          'scrolltopbutton/scrolltotop',
        ],
      ],
    ];

    return $block;
  }
}