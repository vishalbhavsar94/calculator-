import React, { Component } from 'react'
import Numpad from './component/numpad'
//import Result from './component/result'
import {Container,Row,Col,Card,CardBody,CardHeader,Input} from 'reactstrap'

export default class App extends Component {
  constructor(){
    super()
    this.state={
        result:''
    }
  }
  onNumClick = button =>{
     if(button === '=')
     this.calculate()
     else if(button ==='clear')
     this.reset()
     else if(button ==='ce')
     this.backspace()
     else{
        this.setState({
            result:this.state.result + button
        })
     }
  }
  calculate = () =>{
      
      this.setState({
        result:(eval(this.state.result)||"") + ""
      })

  }
  reset = () =>{
      this.setState({
        result:''
      })
  }
  backspace = () =>{
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }
  render() {
    return (
      <div>
          <Container>
                  <Row>
                    <Col md='6'>
                          <Card>
                              <CardHeader tag='h2' className='text-center'>
                                         calculator 
                              </CardHeader>
                              <CardBody>
                                      <Input name='result' value={this.state.result}/>
                                      <Numpad onNumClick = {this.onNumClick}/>
                              </CardBody>
                          </Card>
                    </Col>
                  </Row>
          </Container>
      </div>
    )
  }
}
