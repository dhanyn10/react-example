import React from 'react';

class Maincontent extends React.Component
{
    /**
     * Called immediately after a component is mounted.
     * Setting state here will trigger re-rendering.
     */
    componentDidMount()
    {
        //check your browser console
        console.log("hello from react example");
    }
    render()
    {
        return(
            <div>
                <div onLoad={this.componentDidMount}></div>
            </div>
        );
    }
}

export default Maincontent;