import {series} from 'gulp';
import {styles} from './gulp/tasks/styles.babel';
import {live} from './gulp/tasks/live.babel';
import {dist} from './gulp/tasks/dist.babel';
import {deploy, ForcedeployFTP} from './gulp/tasks/deploy.babel';

export {styles, live, dist, deploy, ForcedeployFTP};

exports.default = series(styles, live);