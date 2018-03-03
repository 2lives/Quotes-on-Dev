<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="site-info">
					<?php 
					wp_nav_menu(
						array(
								'theme_location' => 'primary',
								'menu-id' => 'primary-menu',
								'menu-class' => 'footer-nav'
							)
					);
					?>

						<p>Brought to you by &copy; <a href="#"id ="plug-link">Cirque du Soleil</a> <?php echo date( 'Y' ); ?></p>

				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
