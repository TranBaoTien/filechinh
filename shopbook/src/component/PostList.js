import React from "react";
import PropTypes from 'prop-types';

Postlist.propTypes={
    posts: PropTypes.array,
};
Postlist.defaultProps={
    posts:[],

};

function Postlist(props){
    const{posts}=props;
    return(
<ul>
{posts.map(post=>(
    <li key={post.id}>{post.tensach}</li>
))}

</ul>
    );
}
export default Postlist;