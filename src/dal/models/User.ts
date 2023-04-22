import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbConfigurations/sequelize';

class User extends Model{
    public firstName!: string;
    public lastName!: string;
    public title!: string;
    public gender!: string;
    public largePicture!: string;
    public thumbnailPicture!: string;
    public username!: string;
    public birthDate!: Date;
    public age!: number;
    public country!: string;
    public city!: string;
    public state!: string;
    public street!: string;
    public streetNumber!: number;
    public phone!:string;
    public email!:string;
  }
  
  User.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          gender: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          largePicture: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          thumbnailPicture: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey:true
          },
          birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          age: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          country: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          city: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          state: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          street: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          streetNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
    },
    {
        modelName: 'User',
      tableName: 'users',
      sequelize,
    }
  );

  export default User;
