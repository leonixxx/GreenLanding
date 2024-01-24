'use strict'
import {servicesChange} from './modules/servicesChange.js';
import { Navigation } from './modules/navigation.js';
import { Connection } from './modules/connection.js';
import { ActiveBTN } from './modules/clientsBtn.js';
import { RequestWindow } from './modules/requestWindow.js';
import { fixedHeader } from './modules/fixedHeader.js';
import { checkNumber } from './modules/CheckNumber.js';

document.addEventListener('DOMContentLoaded', function() {
    servicesChange();
    Navigation();
    Connection();
    ActiveBTN();
    RequestWindow();
    fixedHeader();
    checkNumber();
});