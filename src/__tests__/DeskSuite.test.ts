import DeskSuitePlugin, { DeskSuite } from '../index';
import Vue from 'vue';
import { createLocalVue } from 'vue-test-utils';

const version = '0.0.19042701';
const localVue = createLocalVue()
let deskSuite: DeskSuite;

localVue.use(DeskSuitePlugin, { 
  config: {
    // apiKey: "AIzaSyBmHcyoT3Yrmz8g6IDlVK0ogPd89-M-lWQ",
    apiKey: "AIzaSyBmHcyoT3Yrmz8g6IDlVK0ogPd89-M-lWQ",
    authDomain: "desk-uy.firebaseapp.com",
    databaseURL: "https://desk-uy.firebaseio.com",
    projectId: "desk-uy",
    storageBucket: "desk-uy.appspot.com",
    messagingSenderId: "456998131508"
  }
})
deskSuite = localVue.prototype.$DeskSuite

test('Verificar versión del módulo Auth', () => {
  expect(deskSuite.Modules.Auth.Version === version).toBe(true)
});
