import { Builder, Capabilities, By} from "selenium-webdriver"

import { beforeAll, afterAll } from '@jest/globals'

const { expect, test, describe } = require('@jest/globals')

const movies = require('./index.js')

const addMovie = require('./index.js')

const chromedriver = ('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5502/movieList/index.html')
})

afterAll(async () =>{
    await (await driver).quit()
})

describe('adding movies test', function() {
    test('should add movie', function(){
        expect(addMovie('test')).toEqual(true)
    })
})