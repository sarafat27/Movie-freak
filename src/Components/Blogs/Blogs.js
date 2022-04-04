import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>(1) What is context API?</h1>
            <p>Ans: Usually we have to send data from one component to another through props drilling which is inefficient.This problem can be solved by using context API.If we want to send any data from one component to another directly ,we should declare a context in the sender component.And then we have to export it.After that,we should set the context area by wrapping the components with a component named "ContextName.provider".Then, give a value as attribute in this component.At last we can get the data by importing it in the recieving component. </p>
        </div>
    );
};

export default Blogs;