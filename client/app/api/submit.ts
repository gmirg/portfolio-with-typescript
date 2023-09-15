import axios, { AxiosResponse } from "axios";
import { IContact } from "../interfaces/contact.interface";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const Submit = async (data: IContact) => {
  const apiUrl = "http://localhost:5000/email/";
  try {
    const response = await axios.post(apiUrl, data);
    const toastifySuccess = () => {
      toast('Message has been sent correctly. Thank you!!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
      });
    };
    toastifySuccess()
    return console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught higher up
  }
};
