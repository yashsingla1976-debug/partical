import child from './child'
function Parent() {
    const name = "Yash";
    const age=20;
    const hobby="cricket";
    return(
        <div>
            <h1>Parent Component</h1>
            <child name={name} age={age} hobby={hobby}/>
        </div>
    );
    
}
export default Parent;