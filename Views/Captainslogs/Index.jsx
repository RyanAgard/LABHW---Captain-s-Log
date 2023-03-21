import React from 'react'


function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way

    return (
  
            <div>
                <h1>Captain Logs</h1>
                <ul>
                    {props.log.map((logs,index) => 
                        <li key={index}>
                            <a href={`/captain/${logs._id}`}><strong>{logs.title}</strong></a>
                        </li>
                    )}
                </ul>
                <a href="/captain/new">Add...</a>

                <br/><br/><br/>

                <form action="/captain/seed" method="POST">
                    <button>SEED</button>
                </form>

                <br/>

                <form action="/captain/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>
                </form>
            </div>
    )
}

export default Index