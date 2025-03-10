import { IUser , UserModel } from "./models.js";
import { UserInput, UserFilter } from "./generated/graphql.js";

export default class UsersDataSource {
  async getAll(filter?: UserFilter): Promise<IUser[]> {

    // if no filter is provided, return all users
    if (!filter) {
      return UserModel.find().exec();
    }
    
    // if filter is provided, return users matching the filter
    const { ids, names } = filter;
    const users = await UserModel.find(
      { id: { $in: ids } },
      { name: { $in: names } }
    ).exec();
    return users;
  }

  async upsert(users: UserInput[]): Promise<IUser[]> {
    
    // prepare bulk operations
    const bulkOps = users.map(user => {
      const { id, ...rest } = user;
      return {
        updateOne: {
          filter: { id: id },
          update: { $set: rest },
          upsert: true,
          setDefaultsOnInsert: true
        }
      }
    });

    // execute bulk operations
    await UserModel.bulkWrite(bulkOps);

    //fetch and return the saved amenities
    const savedUsers = await UserModel.find({
      id: {$in: users.map(user => user.id)}
    });
    return savedUsers;

  }

  //delete
  async delete(ids: string[]): Promise<Boolean> {
    // delete all in a bulk operation
    const deletedUsers = await UserModel.deleteMany({
      id: {$in: ids}
    });
    return deletedUsers.deletedCount > 0;
  }
}