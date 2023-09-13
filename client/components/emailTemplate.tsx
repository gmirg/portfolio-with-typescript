import { IContactProps } from "../app/interfaces/contact.interface";
export const EmailTemplate: React.FC<Readonly<IContactProps>> = ({
  fullName,
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
  </div>
);
