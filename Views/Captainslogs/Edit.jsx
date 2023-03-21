import React from 'react'

// res.send('<h1></h1>')
// console.log(props)
function Edit(props){
    return ( 
        <div>
            <h1>Edit </h1>
            <form action={`/captain/${props.log._id}?_method=PUT`} method="POST">
                <label htmlFor="tit"> title:</label><br />
                <input type="text" id="tit" name="title" defaultValue={props.log.title} /><br /><br />

                <label htmlFor="ent">entry:</label><br />
                <input type="text" id="ent" name="entry" defaultValue={props.log.entry} /><br /><br />

                <label htmlFor="sib">shipIsBroken:</label>
                <input type="checkbox" id="shb" name="shipIsBroken" defaultChecked={props.log.shipIsBroken} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Edit;