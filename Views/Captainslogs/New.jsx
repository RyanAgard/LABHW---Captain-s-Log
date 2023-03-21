import React from 'react'


function New() {
  return ( 
      <div>
          <h1>New Ship Log</h1>
          <form action="/captain" method="POST">
              {/* <label htmlFor="nme">Name:</label><br /> */}
              {/* <input type="text" id="nme" name="" /><br /><br /> */}

              <label htmlFor="clr">Title:</label><br />
              <input type="text" id="clr" name="title" /><br /><br />

              <label htmlFor="clr">Entry:</label><br />
              <input type="text" id="ent" name="entry" /><br /><br />

              <label htmlFor="rdy">shipIsBroken:</label><br />
              <input type="checkbox" id="shipIsBroken" name="shipIsBroken" /><br /><br />

              <button>Submit</button>
          </form>
      </div>
  );
}

export default New;