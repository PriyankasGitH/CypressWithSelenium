import 'dotenv/config'

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:process.env.BASEURL,
 
    //baseUrl:'https://opensource-demo.orangehrmlive.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    env:{
          adminURL:'https://google.com/',
          userName: process.env.USERNAME,
          password: process.env.PASSWORD,
          displayName:process.env.DISPLAYNAME
    }
  },
});
