import UsersDataSource from "./datasource.js";

export interface ContextUser {
    id: string;
    email: string;
    roles: string[];
}

export interface Context {
    user: ContextUser,
    api: UsersDataSource    
}

// async function parseUserOnRequest({ req }): Promise<ContextUser> {
//     let user: ContextUser = null;
//     if (req.headers['x-user-data']) {
//         user =  JSON.parse(req.headers['x-user-data']);
//     } 
//     return user;
// }

const context = async ({req, res}): Promise<Context> => {       
    // const user = await parseUserOnRequest({ req });
    const contextObject: Context = {
        api: new UsersDataSource(),
        user:null,
    };
    return contextObject;
};

export default context;