import React from 'react'

// res.send('<h1></h1>')

function Edit(props) {
    return ( 
        <div>
            <h1>Edit </h1>
            <form action={`/fruits/${props.log._id}?_method=PUT`} method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" defaultValue={props.log.name} /><br /><br />

                <label htmlFor="rdy">Ready To Eat:</label>
                <input type="checkbox" id="rdy" name="readyToEat" defaultChecked={props.fruit.readyToEat} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Edit;