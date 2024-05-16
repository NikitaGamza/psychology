import { Dispatch, FormEvent } from 'react';
export default async function submitForm(
  e: FormEvent,
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
    e.preventDefault();
    const subscribe = {
      data: { name: name, email: email, phone: mobile },
    };
    const sendData = await fetch(
      'http://77.232.128.234:1337/api/record-tariffs',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscribe),
      }
    );
    const sendResponse = await sendData.json();
    // setModal(false);
    setModal(false);
  }
}
