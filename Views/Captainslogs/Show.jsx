import React from 'react'


function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.log.title}</strong> {props.log.shipIsBroken ? 'is ready to sale' : 'is NOT ready to sale'}</p>
          
            <a href={`/captain/${props.log._id}/edit`}>Edit</a>
            
            <br /><br />


            <form action={`/captain/${props.log._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>

            <br />

            <a href="/captain/">Back</a>
        </div>
    )
}

export default Show;