function MyButton() {
//     Object { offer: '', action: '', ...others }

return(
    <div id="buttonComponent">
        <h1>This is the first Component</h1>
        <p>Below is a button being used by the MyButton Component</p>
        <button id="my-button">{ "I'm  a button" }</button>
    </div>
    );
}

//JSX ---=== JS Function, returning html === COMPONENT
export default MyButton;