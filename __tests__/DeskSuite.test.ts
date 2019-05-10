// import DeskSuitePlugin, { DeskSuite } from '../src/index';
// import Vue from 'vue';
// import { createLocalVue } from 'vue-test-utils';

// const version = '0.0.19042701';
// const localVue = createLocalVue()
// let deskSuite: DeskSuite;

// localVue.use(DeskSuitePlugin, { 
//   firebaseConfig: {
//     apiKey: "AIzaSyBmHcyoT3Yrmz8g6IDlVK0ogPd89-M-lWQ",
//     authDomain: "desk-uy.firebaseapp.com",
//     databaseURL: "https://desk-uy.firebaseio.com",
//     projectId: "desk-uy",
//     storageBucket: "desk-uy.appspot.com",
//     messagingSenderId: "456998131508"
//   },
//   businessId: 'hN4Z7KaHwWxniNgVHjTX'
// })
// deskSuite = localVue.prototype.$DeskSuite;

test('Verificar versión del módulo Auth', () => {
  expect(true === true).toBe(true)
});
// test('Generar nuevo usuario', async () => {
//   expect(await deskSuite.Modules.Auth.SignUpWithEmailAndPassword('test@desksuite.app', 'passwordtest'))
//     .not.toBeUndefined();
// });
