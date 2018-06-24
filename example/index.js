/**
 * @author zhangyi
 * @date 2018/6/24
 */
import React from 'react'
import {render} from 'react-dom'
import App from './App'

const data = {
    name : 'World'
};
render(<App {...data} />, document.getElementById('root'));