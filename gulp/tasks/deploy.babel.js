import {src, series} from 'gulp';
import log from 'fancy-log';
import ftp from 'vinyl-ftp';
import {dist} from './dist.babel';
import {host, user, password, port} from './../ftp_settings';

const conn = ftp.create( {
    host:     host,
    user:     user,
    password: password,
    port: port,
    parallel: 7,
    log: log
});

const srcDir = {
    globs: [
        './dist/**/*'
    ],
    base: './dist'
};

const deployFTP = () => {

    // using base = '.' will transfer everything to /public_html correctly
        // turn off buffering in gulp.src for best performance
    
        return src( srcDir.globs, {base: srcDir.base, buffer: false})
            .pipe( conn.newer( '.' ) ) // only upload newer files
            .pipe( conn.dest( '.' ) );
        
};

const ForcedeployFTP = () => {

    // using base = '.' will transfer everything to /public_html correctly
        // turn off buffering in gulp.src for best performance
    
        return src( srcDir.globs, {base: srcDir.base, buffer: false})
            .pipe( conn.dest( '.' ) );
        
};

const deploy = series(dist, deployFTP);

export {deploy, ForcedeployFTP};