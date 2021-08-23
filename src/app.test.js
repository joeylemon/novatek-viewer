import React from 'react'
import App from './app'
import renderer from 'react-test-renderer'

test('App is working', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
