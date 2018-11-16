// import axios from 'axios';
// import { resolve } from 'url';

// const url = 'http://loaclhosts:5000/api/posts';

// class PostService {
//     //GET
//     static getPosts() {console.log('dddddddddddddddddddddddd');
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const res = await axios.get(url);
//                 const data = res.data;
//                 resolve(
//                     data.map(post => ({
//                         ...post,
//                         createdAt: new Date(post.createdAt)
//                     }))
//                 );
//             } catch(err) {
//                 reject(err);
//             }
//         })
//     }

//     //Create Post

//     static insertPost(text) {
//         return axios.post(url, {
//             text
//         });
//     }

//     //Delete Post
//     static deletePost(id) {
//         return axios.delete('${unl}${id}')

//     }
// }

// export default PostService;