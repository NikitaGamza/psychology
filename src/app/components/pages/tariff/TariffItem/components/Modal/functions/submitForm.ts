import { Dispatch } from 'react';
export default function submitForm(
  name: string,
  mobile: string,
  email: string,
  checker: boolean,
  setNameErr: Dispatch<boolean>,
  setMobileErr: Dispatch<boolean>,
  setEmailErr: Dispatch<boolean>,
  setCheckErr: Dispatch<boolean>,
  setModal: Dispatch<boolean>
) {
  if (name === '') {
    setNameErr(true);
  } else {
    setNameErr(false);
  }
  if (mobile === '') {
    setMobileErr(true);
  } else {
    setMobileErr(false);
  }
  if (email === '') {
    setEmailErr(true);
  } else {
    setEmailErr(false);
  }
  if (checker === false) {
    setCheckErr(true);
  } else {
    setCheckErr(false);
  }
  if (name !== '' && mobile !== '' && email !== '' && checker) {
    setModal(false);
  }
}
