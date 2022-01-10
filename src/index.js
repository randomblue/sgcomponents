import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail 
                avatarPhoto={faker.image.image()} 
                author="JP" 
                timeAgo="Today at 4:45PM" 
                blogComment="Nice"/>
            <CommentDetail 
                avatarPhoto={faker.image.image()} 
                author="Bo" 
                timeAgo="Today at 1:45PM" 
                blogComment="Truck"/>
            <CommentDetail 
                avatarPhoto={faker.image.image()} 
                author="Sherwin" 
                timeAgo="Yesterday at 4:45AM" 
                blogComment="Bro"/>
            <CommentDetail 
                avatarPhoto={faker.image.image()} 
                author="Tenzin" 
                timeAgo="Yesterday at 6:69PM" 
                blogComment="LOL"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));