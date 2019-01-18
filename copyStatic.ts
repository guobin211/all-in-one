import * as shell from 'shelljs';

shell.rm('-rf', 'dist/public/js');
shell.rm('-rf', 'dist/public/css');
shell.rm('-rf', 'dist/public/fonts');
shell.rm('-rf', 'dist/public/api');
shell.rm('-rf', 'dist/public/pc');
shell.rm('-rf', 'dist/public/h5');

/**
 * copy static file
 */
shell.cp('-R', 'src/public/js', 'dist/public/js');
shell.cp('-R', 'src/public/css', 'dist/public/css');
shell.cp('-R', 'src/public/fonts', 'dist/public/fonts');

/**
 * api doc
 */
shell.cp('-R', 'src/public/api', 'dist/public/api');
shell.cp('-R', 'src/routes/apiv1.json', 'dist/public/api');
/**
 * copy pc
 */
shell.cp('-R', 'app-ng/dist', 'dist/public/pc');
/**
 * copy h5
 */
shell.cp('-R', 'app-ionic/www', 'dist/public/h5');
