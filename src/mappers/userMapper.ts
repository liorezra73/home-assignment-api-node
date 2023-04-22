import User from "../dal/models/User";
import IUser from "../models/common/IUser";
import IUserMapper from "../models/mappers/IUserMapper";

const userMapper:IUserMapper = {
    mapToModel: function (user: User): IUser {
        const source = user.toJSON();
        return <IUser>{
            firstName: source.firstName,
            lastName: source.lastName,
            title: source.title,
            gender: source.gender,
            thumbnailPicture:source.thumbnailPicture,
            largePicture: source.largePicture,
            username: source.username,
            birthDate: source.birthDate,
            age: source.age,
            contactInfo: {
              phone: source.phone,
              email: source.email,
            },
            location: {
              country: source.country,
              city: source.city,
              state: source.state,
              street: source.street,
              streetNumber: source.streetNumber,
            },
        }
    },
    mapToDbModel: function (user: IUser):any {
        return {
            firstName:user.firstName,
            lastName:user.lastName,
            title:user.title,
            gender:user.gender,
            largePicture:user.largePicture,
            thumbnailPicture:user.thumbnailPicture,
            username:user.username,
            birthDate:user.birthDate,
            age:user.age,
            country:user.location.country,
            city:user.location.city,
            state:user.location.state,
            street:user.location.street,
            streetNumber:user.location.streetNumber,
            email:user.contactInfo.email,
            phone:user.contactInfo.phone,
           }
    }
}

export default userMapper;
