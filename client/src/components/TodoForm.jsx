

const TodoForm = ()=> {
    const [text, setText]= useState()
    const text;
    setText("Hello");
    const OnFormSubmit = ()=>{

    }
    const onInputChange = ()=>{

    }
    return (
        <form className="form"onSubmit={OnFormSubmit}>
            <input 
                placeholder="Enter new todo..."
                classname="input"
                onChange={onInputChange}
            />
        </form>
    )
}
export default TodoForm;