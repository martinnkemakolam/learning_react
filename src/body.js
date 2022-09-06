import react from "react";

function body(props){

      return(
        <div style={{
          'padding': '1rem 2.5rem',
          'textAlign': 'center',
          'boxShadow': '0 3px 1rem -1px black',
          'margin': '1rem 2.5rem'
        }}>
        <h3 style={
          {
            'color': 'black',
            'font': '2rem'
          }
        }>{props.header}</h3>
        <p style={
          {
            'color': 'blue',
            'font': '1rem',
            'textAlign': 'left'
          }
        }>{props.body}</p>
        <button style={
          {
            'padding': '.5rem 1.5rem',
            'border': 'none',
            'borderRadius': "2rem" ,
            'display': 'inline',
            'margin': '1rem 2.5rem'
          }
        } onClick={props.clickFunc}>Like</button>
        <p style={{
          'display': 'inline',
          'margin': '1rem 2.5rem'
        }}>Likes <span>{props.likeCount}</span></p>
      </div>
    )
    }

export default body