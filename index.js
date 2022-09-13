import fs from 'fs'
import path from 'path'
import minimist from 'minimist'
import banner from './utils/banner.js'

async function init() {
  console.log(banner)
}

init().catch((e) => {
  console.error(e)
})
