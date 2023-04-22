import IContactInfo from "./IContactInfo";
import ILocation from "./ILocation";

export default interface IUser {
  firstName: string;
  lastName: string;
  title: string;
  gender: string;
  largePicture: string;
  thumbnailPicture: string;
  username: string;
  birthDate: Date;
  age: number;
  location: ILocation;
  contactInfo: IContactInfo;
}
