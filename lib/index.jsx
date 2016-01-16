import './style.css!';
import React from 'react'

export default class Component {
    constructor(name) {
        this.name = name
        console.log('component', this)
    }
    view() {
        return <div></div>
    }
}
