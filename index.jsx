import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import './index.less'

const bbb = (
    <div>
        <h1>hello world</h1>
        <Button type="primary">click me</Button>
    </div>
)

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div>
                <h1>hello world</h1>
                <Button type="primary">click me</Button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)