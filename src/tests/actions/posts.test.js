import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    removePost,
    addPost,
    editPost,
    setPosts,
    startRemovePost,
    startAddPosts,
    startSetPosts,
    startEditpost
} from '../../actions/posts';
import database from '../../firebase/firebase'
import posts from '../fixture/posts'

const uid = 'thisismyuid';
const defaultAuthState = {auth:{uid}};
const createMockStore =configureMockStore([thunk]);

beforeEach(() => {
    const postsData = {};
    posts.forEach(({id, title, description}) => {
        postsData[id] = {title, description}
    });
    database.ref(`users/${uid}/posts`).set(postsData).then(() => {
        done()
    })
})

test('should set up remove post action object', () => {
    const action = removePost({id: 'abc123'});
    expect(action).toEqual({
        type: 'REMOVE_POST',
        id: 'abc123'
    });
})

 test('should remove post from firebase', (done) => {
     const store = createMockStore(defaultAuthState);
     const id = posts[2].id;
     store.dispatch(startRemovePost({id})).then(() => {
         const actions = store.getActions();
         expect(actions[0]).toEqual({
             type: 'REMOVE_POST',
             id
         })
         return database.ref(`users/${uid}/posts/${uid}`).once('value')
     }).then((snapshot) => {
         expect(snapshot.val()).toBeFalsy();
     })
     done();
 })


test('should set up edit post action object', () => {
    const edit = editPost('abc123', {title: 'new post edited'});
    expect(edit).toEqual({
        type: 'EDIT_POST',
        id: 'abc123',
        updates: {
            title: 'new post edited'
        }
    });
})


test('should edit post from firenase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = posts[1].id;
    const updates = {title : 'Node js'};

    store.dispatch(startEditpost(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[1]).toEqual({
            type: 'EDIT_POST',
            id,
            updates
        }) 
        return database.ref(`users/${uid}/posts/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().title).toBe(updates.title)
    })
    done();
})


test('should set up add post action object with the provided values', () => {
    const action = addPost(posts[1]);
    expect(action).toEqual({
        type:'ADD_POST',
        post: posts[1]
    })
})

test('should add post with default to firebase store', (done) => {
    const store = createMockStore(defaultAuthState);
    const defaultsData = {
        title: '',
        description: ''
    }

    store.dispatch(startAddPosts({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_POST',
            post: {
                id: expect.any(String),
                ...defaultsData
            }
        })
        return database.ref(`posts/${actions[0].post.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultsData)
        
    })
    done();
})


test('should set up add post action object with the default value', () => {
     const action = addPost(posts[2]);
     expect(action).toEqual({
         type:'ADD_POST',
         post: posts[2]
     })
})

test('should add post to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const postData = {
        title: 'title',
        description: 'description'
    }

    store.dispatch(startAddPosts(postData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_POST',
            post: {
                id: expect.any(String),
                ...postData
            }
        });

        return database.ref(`posts/${actions[0].post.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(postData);
    })
    done();
})

test('should sep up set post action object with data', () => {
    const action = setPosts(posts);
    expect(action).toEqual({
        type:'SET_POSTS',
        posts
    })
})

test('should fetch the posts from database', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetPosts()).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_POSTS',
            posts
        });
        done();
    })
})