import * as shell from 'shelljs';

/**
 * copy static file
 */
shell.cp('-R', 'src/public/js', 'dist/public/js');
shell.cp('-R', 'src/public/css', 'dist/public/css');
shell.cp('-R', 'src/public/fonts', 'dist/public/fonts');
shell.cp('-R', 'src/public/images', 'dist/public/images');
shell.cp('-R', 'src/public/dist', 'dist/public/dist');
shell.cp('-R', 'src/public/v1', 'dist/public/v1/');
