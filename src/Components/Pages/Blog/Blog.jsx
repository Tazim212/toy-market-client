/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='my-14 mx-16'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-indigo-950 text-slate-200 leading-7 rounded-box mb-5">
                <div className="collapse-title text-xl font-bold text-emerald-500">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>An access token is a token that used to access the credential info like api's in web server.When a user is authorised then this token is accessed to that user.Refresh token is the token that gives when one token is expired of accessed credential.This token gives a fresh access token without reauthenticating the user.Normaly access tokens should store in the memory.But for now we can store it in http cookies. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-indigo-950 text-slate-200 leading-7 rounded-box mb-5">
                <div className="collapse-title text-xl font-bold text-emerald-500">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>Comparing SQL and NOSQL databases--
                        1.In SQL databases the information keeps in the database store in a table in the row and column.But in NOSQL the information are kept in a collection of onject.
                        2.SQL databases are designed in a vertically schema in a single server.Whereas NOSQL databases are designed in horizontally schema.
                        3.In SQL databases the changes of the schema involve migrations.But in NOSQL we can change the schema easily.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-indigo-950 text-slate-200 leading-7 rounded-box mb-5">
                <div className="collapse-title text-xl font-bold text-emerald-500">
                What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>express Js is the framework of the node Js.Nest Js is the framework of typescript</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-indigo-950 text-slate-200 leading-7 rounded-box">
                <div className="collapse-title text-xl font-bold text-emerald-500">
                What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>MongoDB aggregate is the operation of powerfool tools that help to transform the data collection.This aggregation takes array as an input where each stages have their performing.It works like when the operation happens mongDB process the documents of the each stage of the collection to pass the output as input in the next stage until it aggregate the final result.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;