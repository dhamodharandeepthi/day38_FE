import instance from "./instance"

const getUser = async () => {
    try {
        console.log('fetching user...');
        const res = await instance.protectedInstance.get('/users/getUser');
        
        if (res.data.user) {
            return res.data.user;
        }
        return null;
    } catch (error) {
        console.log('Error fetching user',error);
    }
}

export default {
    getUser,
};