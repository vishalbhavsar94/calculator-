import React ,{Component} from 'react'
export default class result extends Component{
    render(){
        const {result} = this.props
        return(
            <div className='result'>
                    <p>{result}</p>
            </div>
        )
    }
}