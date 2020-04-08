import React,{useState,useEffect,useRef} from 'react'
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types'

// function App(){
//     const [value,setValue] = useState('aaa')
//     return (
//         <div>
//         <InputNumber value={value} onChange={e=>{}}/>
//         <InputNumber defaultValue={value} onChange={e=>{}}/>
//         </div>
//     )
// }
// class App_14 extends React.Component{
// 	render(){
// 		const {
// 			value,
// 			onChange
// 		} = this.props
// 		return (
// 			<div>
// 				<input type="number" value={} onChange={(e)=>{}}/>
// 			</div>
// 		)
// 	}
// }
function App_14(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={e=>{
			setValue(e)
		}}/>
		{value}
		{/* <InputNumber defaultValue={value}/> */}
        {/* <InputNumber defaultValue={value} onChange={e=>{}}/> */}
        </div>
    )
}
const InputNumber = (props)=>{
	const val = props.value || props.defaultValue;
	const onchange = props.onChange
	const input = useRef(null);
	let [value,setValue] = useState(val);
	const handleChange=(e)=>{
		setValue(e.target.value);
	}
	useEffect(()=>{
		if(onchange){
			onchange(value)
		}
	},[value])
	return (
		<div>
			<input type="text" 
			value={value} 
			ref={input}
			//defaultValue={props.defaultValue} 
			onChange={(e)=>{handleChange(e)}}
			/>
		</div>
	)
}
InputNumber.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
}
export default App_14