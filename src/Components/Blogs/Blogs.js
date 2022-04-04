import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>(1) What is context API?</h1>
            <p>Ans: Usually we have to send data from one component to another through props drilling which is inefficient.This problem can be solved by using context API.If we want to send any data from one component to another directly ,we should declare a context in the sender component.And then we have to export it.After that,we should set the context area by wrapping the components with a component named "ContextName.provider".Then, give a value as attribute in this component.At last we can get the data by importing it in the recieving component. </p>
            <h1>(2) Write the differences among inline,block and inline-block elements.</h1>
            <p>Ans: Inline,block and inline-block elements are the elements of HTML.Their characteristics are different.
                <br />
                At first,inline elements are those elements which do not start on a new line and take the specific width it requires.We can not set height and width in inline elements.
                <br />
                Then,inline-block elements are those elements which do not start on a new line,but we can set height and width in it.
                <br />
                At last,block elements always start from a new line and take the full width.The browsers automatically add some space before and after block elements.
            </p>
        </div>
    );
};

export default Blogs;