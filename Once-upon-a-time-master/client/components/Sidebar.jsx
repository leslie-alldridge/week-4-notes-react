import React from 'react'
import stories from '../../data/data'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        
            
            <ul>
           <li id="link" key="intro"><Link to={`/chapter/intro`} replace><a id="span" class="button is-primary">Introduction</a></Link></li>
                {Object.keys(stories).map(chapter => {
                    if(chapter == 'intro'){
                        return
                    }
                    return (
                    <div>
                   <li key={chapter}><Link to={`/chapter/${chapter}`} replace>
                   <a id="span" class="button is-primary">Chapter {chapter} -> </a>
                   </Link></li>

                </div>)
   
                })}
              
            </ul>    
    )
}

export default Sidebar