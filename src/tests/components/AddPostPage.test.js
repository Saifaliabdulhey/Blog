import React from 'react';
import { shallow } from 'enzyme';
import { AddPostPage } from '../../components/AddPostPage'
import posts from '../fixture/posts'

let startAddPosts, history, wrapper;

beforeEach(() => {
    startAddPosts = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddPostPage startAddPosts={startAddPosts} history={history} />);
});

test('should render AddPostsPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})


// test('should handle onSubmit', () => {
//     wrapper.find('PostForm').prop('onSubmit')(posts[1]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(startAddPosts).toHaveBeenLastCalledWith(posts[1]);
// })