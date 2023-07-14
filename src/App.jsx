import './App.css'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import Form from 'react-jsonschema-form';

function App() {

  const customRange = (props)=>{
    return (
      <InputRange
      maxValue={props.schema.maxValue
      }
      minValue={0}
      formatLabel={value => `${value} kg`}
      value={props.value}
      onChange={value => props.onChange(value)}/>
    )
  }

  const schema = {
    title: 'Range selector',
    type: 'object',
    properties: {
      title: {type : 'number',  mutable: true , title: 'Range', default: {min:10,max:15} , maxValue:50,},
    },
  };

  const uiSchema = {
    title: {
      'ui:widget': customRange, 
    },
  };


  return (
    <>
  
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={(e)=>console.log(e)}
        className='form'
      />
    </>
  )
}

export default App
