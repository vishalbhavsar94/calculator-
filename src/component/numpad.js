import React, { Component } from 'react'
import {Button,Table} from 'reactstrap'

export default class numpad extends Component {
    onClick = e => {
        this.props.onNumClick(e.target.name)
    }
    render() {
        return (
            <div>
                    <Table bordered>
                        <tr>
                                <td><Button name='(' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>(</Button></td>
                                <td><Button name='clear'className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>Clear</Button></td>
                                <td><Button name=')'className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>)</Button></td>
                                <td><Button name='ce'className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>CE</Button></td>
                        </tr>
                        <tr>
                                <td><Button name='1'  className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>1</Button></td>
                                <td><Button name='2' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>2</Button></td>
                                <td><Button name='3' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>3</Button></td>
                                <td><Button name='+' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>+</Button></td>
                        </tr>
                        <tr>
                                <td><Button name='4'  className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>4</Button></td>
                                <td><Button name='5' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>5</Button></td>
                                <td><Button name='6' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>6</Button></td>
                                <td><Button name='-' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>-</Button></td>
                        </tr>
                        <tr>
                                <td><Button name='7'  className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>7</Button></td>
                                <td><Button name='8' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>8</Button></td>
                                <td><Button name='9' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>9</Button></td>
                                <td><Button name='*' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>*</Button></td>
                        </tr>
                        <tr>
                                <td><Button name='.'  className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>.</Button></td>
                                <td><Button name='0' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>0</Button></td>
                                <td><Button name='=' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>=</Button></td>
                                <td><Button name='%' className='btn  btn-lg btn-block' color='primary' onClick={this.onClick}>%</Button></td>
                        </tr>
                    </Table>
            </div>
        )
    }
}
