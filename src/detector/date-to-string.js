/*
 * @Author: tackchen
 * @Date: 2021-11-15 22:26:57
 * @LastEditors: tackchen
 * @LastEditTime: 2022-01-06 00:08:02
 * @FilePath: /disable-devtool/src/detector/date-to-string.js
 * @Description: Coding something
 */

import {registInterval} from '../utils/interval';
import {triggerOnDevOpen} from './detector';
import {clearLog, log} from '../utils/log';
import {DETECTOR_TYPE} from '../utils/constant';
 
export default function detector () {
    const type = DETECTOR_TYPE.DATE_TO_STRING;
    let count = 0;
    const date = new Date();
    date.toString = () => {
        count ++;
        return '';
    };

    const checkIsOpen = () => {
        count = 0;
        log(date);
        clearLog();
        if (count >= 2) {
            triggerOnDevOpen(type);
        }
    };

    registInterval(type, checkIsOpen);
}