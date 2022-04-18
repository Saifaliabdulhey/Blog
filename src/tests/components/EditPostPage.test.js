import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import posts from '../fixture/posts';
import EditPostPage  from '../../components/AddPostPage';


const store = configureStore();

let startEditPost, startRemovePost, history, wrapper;

beforeEach(() => {
    startEditPost = jest.fn();
    startRemovePost = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <Provider store={store}>
        <EditPostPage
            startEditPost={startEditPost}
            startRemovePost={startRemovePost}
            history={history}
            post={posts[1]} />
            </Provider>
    )
})

test('should render EditPostPage', () => {
    expect(wrapper).toMatchSnapshot();
})

// test('should handle startEditPost', () => {
//     wrapper.find('PostForm').prop('onSubmit')(posts[2]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(startEditPost).toHaveBeenLastCalledWith(posts[2].id, posts[2]);
// })

// test('should handle startRemovePost', () => {
//     wrapper.find('button').simulate('click');
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(startRemovePost).toHaveBeenLastCalledWith({
//         id: posts[2].id
//     })
// })

